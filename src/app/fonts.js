import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const generalSans = localFont({
  src: [
    { path: './fonts/GeneralSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/GeneralSans-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-general-sans',
  display: 'swap',
})
