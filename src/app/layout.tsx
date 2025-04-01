"use client";

import { PropsWithChildren, Suspense } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MantineProvider } from '@mantine/core';
import "./globals.css";
import useMiddleware from '@/hooks/useMiddleware';


export default function RootLayout({
  children,
}: PropsWithChildren) {
  useMiddleware();
  const client = new QueryClient();
  return (
    <html lang="en">
      <body
      >
          <MantineProvider>
            <QueryClientProvider client={client}>
                <AppRouterCacheProvider>
                  <Suspense>{children}</Suspense>
                </AppRouterCacheProvider>
            </QueryClientProvider>
          </MantineProvider>
      </body>
    </html>
  );
}
