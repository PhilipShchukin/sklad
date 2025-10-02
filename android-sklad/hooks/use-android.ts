import { Api } from '@/services/api-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

export function useGetAll() {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['android'],
    queryFn: () => Api.android.getAll(),
  });

  return { data, isLoading, isSuccess, isError };
}

export const usePushDB = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Report) => Api.android.pushDB(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['report'] });
      // toast('Отчет добавлен в базу');
      toast.success('Отчет добавлен в базу');
    },
    onError: (error: Error) => {
      // toast.error(error.message);
      toast.error('Отчет не добавлен в базу');
    },
  });
};
