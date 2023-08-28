"use client"

// import { Container, Icon, Box, Stack, Text, SimpleGrid, useColorModeValue, Flex,} from '@chakra-ui/react'
import { Container, Box, Text, Grid, Flex } from "@radix-ui/themes"
import Link from "next/link"
import Image from "next/image"
import { data } from "@/data"
import {
  ANALYTICS_LINK,
  DISCORD_INVITE_LINK,
  GITHUB_LINK,
  TWITTER_LINK,
  FIGMA_LINK,
  CONTRIBUTORS_LINK,
  TWITTER_LINK_ACHIM,
  BUY_ME_A_COFFEE_LINK
} from "../../utils/const"
import { Logo } from "@/components/Logo"
import { ReactNode } from "react"

const SOCIAL_LINKS = [
  { label: "Discord Community", href: DISCORD_INVITE_LINK },
  { label: "GitHub Repository", href: GITHUB_LINK },
  { label: "Twitter Account", href: TWITTER_LINK },
  { label: "Figma Design Resources", href: FIGMA_LINK }
]

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text weight="medium" size="4" mb="2">
      {children}
    </Text>
  )
}

export const Footer = () => {
  return (
    <>
    'Footer'
    <Box
    // bg={useColorModeValue('gray.50', 'gray.900')}
    // color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container width='6' py='1'>
        <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap='1'>
          <Flex align="start">
            <ListHeader>Templates</ListHeader>
            {data.map((category) => (
              <Link href={`/${category.id}/${category.children?.[0].id}`}>
                <Box key={category.id}>{category.name}</Box>
              </Link>
            ))}
          </Flex>

          <Flex align="start">
            <ListHeader>Social</ListHeader>
            {SOCIAL_LINKS.map((link) => (
              <Box key={link.label} rel="noopener noreferrer">
                <Link href={link.href} target="_blank">
                  {link.label}
                </Link>
              </Box>
            ))}
          </Flex>

          <Flex align="start">
            <ListHeader>Analytics</ListHeader>
            <Link href={ANALYTICS_LINK}>Public Statistics</Link>
            <Link href="https://splitbee.io?ref=chakratemplates">
              <Image
                src="/splitbee-badge.svg"
                // src={useColorModeValue( "/splitbee-badge.svg", "/splitbee-badge-dark.svg")}
                width={114}
                height={45}
                alt="Splitbee Analytics"
              />
            </Link>
          </Flex>

          <Flex align="start">
            <ListHeader>Support us</ListHeader>

            <Box
              width="9" //'142px'
              height="3" //'40'
              // objectFit="contain"
            >
              <Link href={BUY_ME_A_COFFEE_LINK}>
                <Image
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  height={40}
                  width={142}
                  priority
                  alt="Buy Me A Coffee"
                />
              </Link>
            </Box>
          </Flex>
        </Grid>
      </Container>
      <Box pb="6">
        <Flex
          align="center"
          // _before={{
          //   content: '""',
          //   borderBottom: "1px solid",
          //   // borderColor: useColorModeValue("gray.200", "gray.700"),
          //   flexGrow: 1,
          //   mr: 8
          // }}
          // _after={{
          //   content: '""',
          //   borderBottom: "1px solid",
          //   // borderColor: useColorModeValue("gray.200", "gray.700"),
          //   flexGrow: 1,
          //   ml: 8
          // }}
        >
          <Box>
            <Link href='/'>
            {/* <Icon as={Logo} w={{ base: 12 }} h={{ base: 12 }} /> */}
            </Link>
          </Box>
        </Flex>
        <Text size="1" align="center">
          Made on the Internet by{" "}
          <Link href={TWITTER_LINK_ACHIM}>Achim Rolle</Link> and{" "}
          <Link href={CONTRIBUTORS_LINK}>Contributors</Link>
        </Text>
      </Box>
    </Box></>
  )
}
