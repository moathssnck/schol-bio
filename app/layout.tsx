import type React from "react"
import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "مدرسة نوره لتعليم القيادة | Bio Link",
  description: "مدرسة نوره لتعليم القيادة - خدمات تعليم القيادة الآمنة والمهنية",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
         <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5J3M1H0VBN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5J3M1H0VBN');
            `,
          }}
        />
      </head>
      <body >
        {children}
      </body>
    </html>
  )
}
