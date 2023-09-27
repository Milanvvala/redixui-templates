"use client"
import { Logo } from "@/components"
import { Flex, Link, Text } from "@radix-ui/themes"

export default function Large() {
  const largeMenu = [
    {
      listTitle: "Product",
      items: [
        { linkTitle: "Overview", link: "http://example.com" },
        { linkTitle: "Features", link: "http://example.com" },
        { linkTitle: "Tutorials", link: "http://example.com" },
        { linkTitle: "Pricing", link: "http://example.com" },
        { linkTitle: "Releases", link: "http://example.com" }
      ]
    },
    {
      listTitle: "Support",
      items: [
        { linkTitle: "Help Center", link: "http://example.com" },
        { linkTitle: "Terms of Service", link: "http://example.com" },
        { linkTitle: "Legal", link: "http://example.com" },
        { linkTitle: "Privacy Policy", link: "http://example.com" },
        { linkTitle: "Status", link: "http://example.com" }
      ]
    },
    {
      listTitle: "Company",
      items: [
        { linkTitle: "About", link: "http://example.com" },
        { linkTitle: "Press", link: "http://example.com" },
        { linkTitle: "Careers", link: "http://example.com" },
        { linkTitle: "Contact", link: "http://example.com" },
        { linkTitle: "Partners", link: "http://example.com" }
      ]
    },
    {
      listTitle: "Follow Us",
      items: [
        { linkTitle: "Facebook", link: "http://example.com" },
        { linkTitle: "Twitter", link: "http://example.com" },
        { linkTitle: "Dribbble", link: "http://example.com" },
        { linkTitle: "Instagram", link: "http://example.com" },
        { linkTitle: "LinkedIn", link: "http://example.com" }
      ]
    }
  ]

  return (
    <Flex justify="between" my="4" mx="8" align="center" p="4">
      <Flex pl="4" direction="column" gap="4">
        <Logo />
        <Text size="3">© 2022 Chakra Templates. All rights reserved</Text>
      </Flex>

      {largeMenu.map((obj) => {
        return (
          <Flex direction="column" gap="2" key={obj.listTitle} align="start">
            <Text size="4" weight="medium">
              {obj.listTitle}
            </Text>
            {obj.items.map((item) => {
              return (
                <Link href={item.link} key={item.linkTitle} color="indigo">
                  {item.linkTitle}
                </Link>
              )
            })}
          </Flex>
        )
      })}
    </Flex>
  )
}
