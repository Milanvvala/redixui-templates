"use client"
import { Button, Flex, Heading, Text } from "@radix-ui/themes"
import {
  CheckIcon,
  ExternalLinkIcon,
  GitHubLogoIcon
} from "@radix-ui/react-icons"

export default function Hero() {
  const FeaturesCol1 = [
    "Responsive Demos",
    "Easy Customizable",
    "Written in TypeScript"
  ]
  const FeaturesCol2 = ["100% Open Source", "10 Templates", "5 Categories"]

  return (
    <Flex mx="5" my="8" pt="4" direction="column" gap="7">
      <Heading size="9" weight="bold">
        10 responsive components
        <br />
        built with Mantine
      </Heading>

      <Text size="4" weight="light" color="gray">
        Build your next website even faster with premade responsive components
        designed and built with Redix Themes All components are free forever for
        everyone.
      </Text>

      <Flex gap="8">
        <Flex direction="column" gap="4">
          {FeaturesCol1.map((f, i) => {
            return (
              <Flex key={i} align="center" gap="2">
                <CheckIcon color="lime" />
                <Text weight="bold" color="gray">
                  {f}
                </Text>
              </Flex>
            )
          })}
        </Flex>

        <Flex direction="column" gap="4">
          {FeaturesCol2.map((f, i) => {
            return (
              <Flex key={i} align="center" gap="2">
                <CheckIcon color="lime" />
                <Text weight="bold" color="gray">
                  {f}
                </Text>
              </Flex>
            )
          })}
        </Flex>
      </Flex>

      <Flex gap="8">
        <Button color="iris" size="4">
          Browse Templates
        </Button>
        <Button variant="soft" size="4">
          <GitHubLogoIcon />
          GitHub
        </Button>
        <Button variant="soft" size="4">
          Get Started with RedixUI <ExternalLinkIcon />
        </Button>
      </Flex>
    </Flex>
  )
}
