import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataService {
  private logger = new Logger(DataService.name);

  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {}

  async getAgentsList(): Promise<any> {
    console.log('111')
    try {
      // Используйте метод с проверкой валидности
      const token = await this.authService.getValidToken();
      console.log('Token:', token);

      const dataUrl = this.configService.get<string>('DATA_URL');
      const requestData = {
        // Ваши параметры согласно документации API
        // Например:
        country: '112',
        // dateFrom: "2024-01-01",
        // dateTo: "2024-12-31"
      };

      const response = await axios.post(
        'https://sandbox-api.datamark.by/contracts/agentsList',
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Token: token, // иногда API ожидает заголовок 'Token'
            'User-Agent': 'axios/1.12.2',
            Accept: 'application/json, text/plain, */*',
          },
          timeout: 5000,
        },
      );

      console.log('Agents list:', response.data);
      return response.data;

      // const response = await axios.post(dataUrl, {
      //   headers: {
      //     // ДОБАВЬТЕ "Bearer "
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //   },
      // });

      // return response.data;
    } catch (error) {
      this.logger.error('Data fetch error:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
      throw error;
    }
  }
}
