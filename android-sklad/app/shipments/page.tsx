'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetAll } from '@/hooks/use-android';

export default function ShipmentsPage() {
  const { data: shipments, isLoading, isError } = useGetAll();

  if (isLoading) return <p className="p-6">Загрузка...</p>;
  if (isError) return <p className="p-6 text-red-500">Ошибка загрузки</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Отгрузки к совершению</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Группа</TableHead>
            <TableHead>Количество</TableHead>
            <TableHead>GTIN</TableHead>
            <TableHead>Дата операции</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shipments?.map((shipment) => (
            <TableRow key={shipment.id}>
              <TableCell>{shipment.group}</TableCell>
              <TableCell>{shipment.count}</TableCell>
              <TableCell>
                {shipment.products.map((p) => (
                  <div key={p.id}>{p.gtin}</div>
                ))}
              </TableCell>
              <TableCell>{new Date(shipment.operationDate).toLocaleDateString('ru-RU')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
