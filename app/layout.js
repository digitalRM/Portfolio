import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  themeColor: '#FFFFFF',
}

export const metadata = {
  metadataBase: new URL('https://www.4human.co'),
  title: 'Ruslan Mukhamedvaleev',
  description: "Ruslan Mukhamedvaleev is a student and founder of FOYM, dedicated to assisting nonprofits and small businesses with web development. He is also the Director of Front-End Development at 4Human, a Data Science Intern at Washington State University, and involved in various other organizations focused on technology, youth leadership, and community service. He is passionate about technology, particularly coding and web development, and advocates for language access in education as a bilingual immigrant from Kyrgyzstan.",
  openGraph: {
    title: 'Ruslan Mukhamedvaleev',
    description: "Ruslan Mukhamedvaleev is a student and founder of FOYM, dedicated to assisting nonprofits and small businesses with web development. He is also the Director of Front-End Development at 4Human, a Data Science Intern at Washington State University, and involved in various other organizations focused on technology, youth leadership, and community service. He is passionate about technology, particularly coding and web development, and advocates for language access in education as a bilingual immigrant from Kyrgyzstan.",
    url: 'https://www.4human.co',
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
