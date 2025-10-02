'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';

async function getShipment(id: string) {
  const res = await fetch(`/api/shipments/${id}`);
  if (!res.ok) throw new Error('Failed');
  return res.json();
}

export default function ShipmentPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const qc = useQueryClient();
  const data = '';
  const isLoading = '';

  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // автофокус при заходе — важно для терминалов со сканером-клавиатурой
    inputRef.current?.focus();
  }, []);

  //   const mutation = useMutation(async (code:string) => {
  //     const res = await fetch('/api/scans', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shipmentId: id, code })});
  //     if (!res.ok) {
  //       const err = await res.text();
  //       throw new Error(err || 'Scan error');
  //     }
  //     return res.json();
  //   }, {
  //     onSuccess: () => qc.invalidateQueries(['shipment', id])
  //   });

  function submitCode(code: string) {
    // mutation.mutate(code);
    setInput('');
    // краткая вибрация/звук — можно вызвать через Capacitor Haptics/Audio
  }

  // Обработка ввода: терминалы обычно шлют Enter после кода
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      submitCode(input.trim());
    }
  }

  // Также обработка paste (некоторые сканеры вставляют напрямую)
  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const pasted = e.clipboardData.getData('text').trim();
    if (pasted) {
      setTimeout(() => submitCode(pasted), 50);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* <CartSidebar summary={data} /> */}
      <main className="pt-16 px-3">
        <h2 className="text-lg font-medium">{'Отгрузка'}</h2>
        <div className="mt-4 space-y-2">
          <div>
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              placeholder="Сканируй штрихкод — поле должно быть в фокусе"
            />
            <div className="mt-2">
              <Button onClick={() => submitCode(input)}>Отправить</Button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Нужно собрать</h3>
            <div className="space-y-2 mt-2"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
