import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@radix-ui/themes/styles.css"
import { Theme, ThemePanel } from "@radix-ui/themes"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = { title: "RedixUI Templates", description: "Templates for Redix UI" }
export const metadata: Metadata = {
  metadataBase: new URL("https://chakra-templates.dev/"),
  title: "RedixUI Templates"
  // "Chakra Templates"
  ,
  description: "Templates for Redix UI"
    // "A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project."
    ,
  keywords:
    "chakra ui, ui templates, web templates, web design, react templates, react ui templates, chakra ui templates, chakra templates",
  openGraph: {
    type: "website",
    title: "Chakra Templates",
    description:
      "A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project.",
    images: "https://chakra-templates.dev/favicon.png",
    siteName: "Chakra Templates",
    url: "https://chakra-templates.dev/"
  },
  twitter: {
    title: "Chakra Templates",
    description:
      "A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project.",
    images: "https://chakra-templates.dev/favicon.png",
    card: "summary_large_image"
  }
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          appearance="dark"
          accentColor="iris"
          grayColor="slate"
          panelBackground="solid"
        >
          <Header />
          {children}
          <Footer />
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
