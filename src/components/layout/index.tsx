import React from 'react'
import { Header } from '../header'
import Footer from '../footer'

export const getNoneLayout = (page: React.ReactElement) => page

export const getDefaultLayout = (page: React.ReactElement) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{page}</main>
      <Footer />
    </div>
  )
}
