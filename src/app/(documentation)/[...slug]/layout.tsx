"use client"
import { Header, Footer } from "@/components"
import { Flex } from "@radix-ui/themes"

interface Props {
  children: React.ReactNode
}

export default function DocumentationLayout(props: Props) {
  const { children } = props
  return (
    <>
      <Header />
      <Flex py="2" mt="2">
        <Flex
          direction={{ initial: "column", lg: "row" }}
          gap={{ initial: "0", lg: "2" }}
        >
          <Flex direction="column" width="100%">
            {children}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
