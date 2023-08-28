"use client"

import { usePathname } from "next/navigation"
// import Link from 'next/link'
import { Box, Link, Text, Flex } from "@radix-ui/themes"

import { data } from '../data'
import { GITHUB_LINK } from '../utils/const'

interface Props {
  href: string
  children: React.ReactNode
  pathname: string
}
interface StackProps {}

const NavigationLink = (props: Props) => {
  const { href, children, pathname } = props
  const isActive = pathname === href
  return (
    <Box px="3" py="2">
      <Link
        href={href}
        size="3"
        weight={isActive ? "medium" : "regular"}
        color={isActive ? "green" : "gray"}
        underline="hover"
      >
        {children}
      </Link>
    </Box>
  )
}

export const Navigation = (props: StackProps) => {
  const pathname = usePathname()
  // const categoryColor = useColorModeValue("gray.800", "gray.200")

  return (
    <nav>
      <Flex
        gap='6'
        width={{ md: '3' }}
        grow='1'
        shrink='0'
        {...props}
      >
        {data.map((category) => (
          <Box key={category.id}>
            <Text
              // textTransform={"uppercase"}
              color='gray'
              weight='bold'
              size='3'
              // letterSpacing={1}
            >
              {category.name}
            </Text>
            <Flex gap='1' mt='1' mb='4' >
              {category.children?.map((subCategory) => (
                <NavigationLink
                  pathname={pathname}
                  key={subCategory.id}
                  href={`/${category.id}/${subCategory.id}`}
                >
                  {subCategory.name}
                </NavigationLink>
              ))}
            </Flex>
          </Box>
        ))}
        <Flex
          gap='2'
          // bg={useColorModeValue("gray.50", "gray.900")}
          // rounded={"md"}
          // p={{ base: 4 }}
        >
          <Text weight='bold' size='3'>
            These are not the templates you are looking for?
          </Text>
          <Text size='3'>
            Feel free to contribute your own template in our{" "}
            <Link href={GITHUB_LINK} target={"_blank"} color='green'>
              Github
            </Link>{" "}
            Repository.
          </Text>
        </Flex>
      </Flex>
    </nav>
  )
}
