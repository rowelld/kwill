import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

//https://www.youtube.com/watch?v=ucX2zXAZ1I0
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className='min-h-screen font-sans antialiased grainy'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
