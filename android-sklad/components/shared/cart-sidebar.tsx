// components/CartSidebar.tsx
import React from 'react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

export function CartSidebar({ summary }: { summary: any }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="fixed right-2 top-4 z-50">🧺</Button>
      </DrawerTrigger>
      <DrawerContent  className="w-80 p-4">
        <h3 className="font-semibold mb-2">Корзина / Статус</h3>
        <div>
          {/* render summary */}
          {/* {summary?.tasks?.map((t:any) => (
            <div key={t.id} className="flex justify-between items-center p-2 border-b">
              <div>
                <div>{t.product.name}</div>
                <div className="text-sm text-muted-foreground">{t.collected}/{t.required}</div>
              </div>
              <div>{t.status === 'DONE' ? '✅' : (t.status === 'IN_PROGRESS' ? '⏳' : '🟡')}</div>
            </div>
          ))} */}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
