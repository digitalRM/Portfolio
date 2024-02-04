import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  themeColor: '#FFFFFF',
}

export const metadata = {
  metadataBase: new URL('https://www.ruslan.in'),
  title: 'Ruslan Mukhamedvaleev',
  description: "I'm a student and the founder of FOYM, a not-for-profit organization that tries to help nonprofits and small businesses with web development. At 4Human, I'm honored to serve as the Director of Front-End Development, and I'm also a Data Science Intern at Washington State University. I'm fortunate to be part of many different organizations that focus on technology, youth leadership, and community service. I'm also really passionate about language access in education as a bilingual immigrant from Kyrgyzstan.",
  openGraph: {
    title: 'Ruslan Mukhamedvaleev',
    description: "I'm a student and the founder of FOYM, a not-for-profit organization that tries to help nonprofits and small businesses with web development. At 4Human, I'm honored to serve as the Director of Front-End Development, and I'm also a Data Science Intern at Washington State University. I'm fortunate to be part of many different organizations that focus on technology, youth leadership, and community service. I'm also really passionate about language access in education as a bilingual immigrant from Kyrgyzstan.",
    url: 'https://www.ruslan.in',
    siteName: 'Ruslan Mukhamedvaleev',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image with Ruslan Mukhamedvaleev written on it.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{background: '#FFF'}} className={inter.className}>      
        {children}
      </body>
    </html>
  )
}
