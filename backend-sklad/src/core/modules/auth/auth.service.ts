import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import * as qs from 'qs';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);
  private token: string;
  private tokenExpires: number;

  constructor(private configService: ConfigService) {}

  async login(): Promise<string> {
    try {
      const login = this.configService.get<string>('LOGIN');
      const password = this.configService.get<string>('PASSWORD');
      const loginUrl = this.configService.get<string>('LOGIN_URL');

      const payload = qs.stringify({
        username: login,
        password: password,
        is_rules_agree: true,
      });

      const response = await axios.post(loginUrl, payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          'User-Agent': 'NestJS-Datamark-Client/1.0',
        },
      });

      // Исправьте получение токена - проверьте структуру ответа
      this.token = response.data.token || response.data.access_token;

      // Установите время экспирации (например, 1 час)
      this.tokenExpires = Date.now() + 3600000; // 1 час в миллисекундах

      this.logger.log('Token acquired successfully');
      return this.token;
    } catch (error) {
      this.logger.error('Login error:', error.response?.data || error.message);
      throw error;
    }
  }

  // Добавьте проверку валидности токена
  async getValidToken(): Promise<string> {
    // Если токена нет или истек - логинимся заново
    if (!this.token || Date.now() >= this.tokenExpires) {
      this.logger.log('Token expired or missing, re-authenticating...');
      return await this.login();
    }

    return this.token;
  }

  getToken(): string {
    return this.token;
  }

  isTokenValid(): boolean {
    return this.token && Date.now() < this.tokenExpires;
  }
}
