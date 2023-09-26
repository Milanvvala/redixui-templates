import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Container, Theme, ThemePanel } from "@radix-ui/themes"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import "@radix-ui/themes/styles.css"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  metadataBase: new URL("https://chakra-templates.dev/"),
  title: "RedixUI Templates",
  description: "Templates for Redix UI",
  // "A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project."
  keywords:
    "chakra ui, ui templates, web templates, web design, react templates, react ui templates, chakra ui templates, chakra templates",
  openGraph: {
    type: "website",
    title: "RedixUI Templates",
    description:
      "A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project.",
    images: "https://chakra-templates.dev/favicon.png",
    siteName: "RedixUI Templates",
    url: "https://chakra-templates.dev/"
  },
  twitter: {
    title: "RedixUI Templates",
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
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
