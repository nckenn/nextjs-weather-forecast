import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from '@/config/site'
import { cn } from "@/lib/utils"
import { fontSans } from '@/lib/fonts'

import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from '@/components/site-header'
import Provider from "@/app/provider"


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader></SiteHeader>
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  </>
  )
}
