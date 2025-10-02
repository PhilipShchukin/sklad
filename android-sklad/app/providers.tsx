'use client';

import { AppSidebar } from '@/components/shared/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';

export function Providers({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }),
  );
  return (
    <QueryClientProvider client={client}>
      <SidebarProvider>
        <AppSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          {/* header / trigger */}
          <div className="flex justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-lg font-medium">title</h1>
            </div>
            {/* <div>
                <ModeToggle />
              </div> */}
          </div>

          {/* content row */}
          <div className="flex min-w-0 flex-1 p-6">
            {/* main — занимает всё оставшееся место */}
            <main className="min-w-0 flex-1 overflow-auto">
              {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
              {children}
            </main>
          </div>
        </div>

        {/* {children} */}
        <Toaster theme="dark" position="bottom-right" duration={1500} />
      </SidebarProvider>
    </QueryClientProvider>
  );
}
