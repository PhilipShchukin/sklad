// components/LeftSidebar.tsx
import React from 'react';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'; // shadcn components
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShipmentsResponse } from '@/types/android-types';

export function LeftSidebar({ shipments }: { shipments: ShipmentsResponse }) {
  console.log(shipments.map((items)=>{
    {items.id}
  }))
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="fixed left-2 top-4 z-50">☰</Button>
      </DrawerTrigger>
      <DrawerContent  className="w-72 p-4">
        <DrawerTitle>Move Goal</DrawerTitle>
        <h3 className="font-semibold mb-2">Отгрузки</h3>
        <nav className="space-y-2">
          {shipments.map((item) => (
            <a key={item.id} className="block p-2 rounded hover:bg-muted">{item.id}</a>
          ))}
          {/* {shipments?.map(s => (
            <Link key={s.id} href="/dashboard">
              <a className="block p-2 rounded hover:bg-muted">{s.id}</a>
            </Link>
          ))} */}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
