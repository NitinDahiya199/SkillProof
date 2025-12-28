import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkillProof - The Trust Layer for Remote Hiring',
  description: 'AI + Blockchain Hiring Trust Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}

