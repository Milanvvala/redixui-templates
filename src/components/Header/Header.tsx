"use client"
import {
  Flex,
  Box,
  Container,
  Heading,
  Button,
  IconButton
} from "@radix-ui/themes"
import {
  HamburgerMenuIcon,
  Cross1Icon,
  Cross2Icon,
  MoonIcon,
  SunIcon
} from "@radix-ui/react-icons"
import Link from "next/link"
import { useDisclosure, } from '@chakra-ui/hooks'

import { Logo } from "@/components/Logo"
// import { TextUnderline } from '@/components/TextUnderline'
import { MobileNav } from "@/components/Header/MobileNav"
import { DesktopNav } from "@/components/Header/DesktopNav"

export const Header = () => {
  const { isOpen: isMobileNavOpen, onToggle } = useDisclosure()
  // const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      'Header'
      <Box>
        <Flex
          position="fixed"
          top="0"
          grow="1"
          height="4"
          // zIndex="999"
          justify="center"
          // css={{
          //   backdropFilter: "saturate(180%) blur(5px)",
          //   backgroundColor: useColorModeValue(
          //     "rgba(255, 255, 255, 0.8)",
          //     "rgba(26, 32, 44, 0.8)"
          //   )
          // }}
        >
          <Flex width="9" align="center">
            <Flex
              // flex={{ base: "0", md: "auto" }}
              ml={{ initial: "-2" }}
              mr={{ initial: "6", md: "0" }}
              display={{ initial: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                variant="outline"
                size="1"
                aria-label={"Toggle Navigation"}
              >
                {isMobileNavOpen ? (
                  <Cross2Icon width="3" height="3" />
                ) : (
                  <HamburgerMenuIcon width={5} height={5} />
                )}
              </IconButton>
            </Flex>

            <Flex
              // flex={{ initial: 1, md: "auto" }}
              justify={{ initial: "start", md: "start" }}
            >
              {/* <Link href="/">
                <Flex
                  direction="row"
                  align="center"
                  gap={{ initial: "2", sm: "4" }}
                >
                  <IconButton 
                  // width={{ initial: '8' }} 
                  // height={{ initial: '8' }} 
                  >
                    <Logo />
                  </IconButton>
                  <Heading
                    as='h1'
                    size='5'
                    // display={{ base: "none", md: "block" }}
                  >
                    RedixUI Templates
                  </Heading>
                </Flex>
              </Link> */}
            </Flex>

            <Flex
              direction='row'
              align='center'
              gap={{ initial: '6', md: '8' }}
              // flex={{ base: 1, md: "auto" }}
              justify='end'
            >
              {/* <DesktopNav  display={{ base: "none", md: "flex" }} /> */}
              <IconButton
                size="1"
                variant="outline"
                aria-label={"Toggle Color Mode"}
                // onClick={toggleColorMode}
              >
                {/* {colorMode == "light" ? (<MoonIcon width='1' height='1'/>) : (<SunIcon width='1' height='1'/>)} */}
              </IconButton>
            </Flex>
          </Flex>
        </Flex>
        {/* <MobileNav isOpen={isMobileNavOpen} /> */}
      </Box>
    </header>
  )
}
