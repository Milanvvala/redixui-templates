"use client"
import { Box, Flex, Link, Text } from "@radix-ui/themes"
import Image from "next/image"

export default function Footer() {
  const T = ["Page Sections", "Blog", "Navigation"]
  const S = [
    "GitHub Repository",
  ]
  return (
    <>
      <Box>
        <Flex py="8" gap="8" mx="6">
          <Flex gap="9">
            {/* Column 1 */}
            {/* <Flex gap="4" direction="column">
              <Text size="5" weight="medium">
                Templates
              </Text>
              <Flex gap="2" direction="column">
                {T.map((e) => {
                  return (
                    <Link key={e} size="3">
                      {e}
                    </Link>
                  )
                })}
              </Flex>
            </Flex> */}

            {/* Column 2 */}
            <Flex gap="4" direction="column">
              <Text size="5" weight="medium">
                Social
              </Text>
              <Flex gap="2" direction="column">
                {S.map((e) => {
                  return (
                    <Link key={e} size="3">
                      {e}
                    </Link>
                  )
                })}
              </Flex>
            </Flex>

            {/* Column 3 */}
            <Flex gap="4" direction="column">
              <Text size="5" weight="medium">
                Support Us
              </Text>
              <Image
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                width={142}
                height={40}
                alt="Buy Me A Coffee"
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
