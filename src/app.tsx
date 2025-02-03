import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import { Toaster } from 'react-hot-toast'
import MyContextProvider from './components/layout/context'

export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), [])
  return (
    <MyContextProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={createRouter()} />
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </MyContextProvider>
  )
}
