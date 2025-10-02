import { ShipmentsResponse } from '@/types/android-types';
import { ApiRoutes, Status } from './constants';
import { axiosClassic } from './interceptors';


export const getAll = async (): Promise<ShipmentsResponse> => {
  return (await axiosClassic.get(ApiRoutes.FULL_ALL)).data;
};

export const pushDB = async (data: any): Promise<boolean> => {
  return await axiosClassic.post(ApiRoutes.CREATE_ANDROID, data);
};

// export const moveCode = async (data: MoveBoxPayload): Promise<boolean> => {
//   return await axiosClassic.patch(ApiRoutes.MOVE_REPORT, data);
// };
