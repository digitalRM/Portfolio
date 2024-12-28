import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#FFFFFF",
};

export const metadata = {
  metadataBase: new URL("https://www.ruslan.in"),
  title: {
    default: "Ruslan Mukhamedvaleev - Student, Researcher & Developer",
    template: "%s | Ruslan Mukhamedvaleev",
  },
  description:
    "Student researcher and developer focused on design, machine learning, and web development. Co-Founder of Koel Labs, Founder of FOYM, and Research Assistant at Washington State University.",
  keywords: [
    "Ruslan Mukhamedvaleev",
    "Koel Labs",
    "Student Researcher",
    "Web Developer",
    "FOYM Founder",
    "Washington State University",
  ],
  authors: [{ name: "Ruslan Mukhamedvaleev" }],
  creator: "Ruslan Mukhamedvaleev",
  publisher: "Ruslan Mukhamedvaleev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ruslan Mukhamedvaleev - Student, Researcher & Developer",
    description:
      "Student researcher and developer focused on design, machine learning, and web development. Co-Founder of Koel Labs, Founder of FOYM, and Research Assistant at Washington State University.",
    url: "https://www.ruslan.in",
    siteName: "Ruslan Mukhamedvaleev",
    images: [
      {
        url: "/openGraph.png",
        width: 1600,
        height: 900,
        alt: "Ruslan Mukhamedvaleev - Student, Researcher & Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruslan Mukhamedvaleev - Student, Researcher & Developer",
    description:
      "Student researcher and developer focused on design, machine learning, and web development. Co-Founder of Koel Labs, Founder of FOYM, and Research Assistant at Washington State University.",
    images: ["/openGraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ruslan.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://www.ruslan.in/#person",
            name: "Ruslan Mukhamedvaleev",
            givenName: "Ruslan",
            familyName: "Mukhamedvaleev",
            description:
              "Student researcher and developer focused on design, machine learning, and web development. Co-Founder of Koel Labs, Founder of FOYM, and Research Assistant at Washington State University.",
            url: "https://www.ruslan.in",
            image: "https://www.ruslan.in/openGraph.png",
            sameAs: [
              "https://github.com/digitalRM",
              "https://www.linkedin.com/in/ruslan-muk/",
              "https://www.instagram.com/ruslan_mk11/",
              "https://builders.mozilla.org/profile/ruslan-mukhamedvaleev/",
            ],
            alumniOf: {
              "@type": "HighSchool",
              name: "Kamiak High School",
              location: "Mukilteo, Washington",
            },
            worksFor: [
              {
                "@type": "Organization",
                name: "Koel Labs",
                url: "https://koellabs.com",
              },
              {
                "@type": "Organization",
                name: "Washington State University",
                url: "https://wsu.edu",
              },
              {
                "@type": "Organization",
                name: "Mukilteo Robotics",
                url: "https://www.mukilteorobotics.org",
              },
              {
                "@type": "Organization",
                name: "Legislative Youth Advisory Council",
                url: "https://walyac.org",
              },
              {
                "@type": "Organization",
                name: "FOYM",
                url: "https://www.foym.org",
              },
            ],
          })}
        </Script>
      </head>
      <body style={{ background: "#FFF" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
