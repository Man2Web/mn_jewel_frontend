import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import { Toaster } from 'react-hot-toast'
import MyContextProvider from './components/layout/context'
import { Dialog } from './components/ui/dialog'

export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), [])
  return (
    <MyContextProvider>
      <Dialog>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <RouterProvider router={createRouter()} />
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </Dialog>
    </MyContextProvider>
  )
}
