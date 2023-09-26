"use client"
import { Box, Button, Flex, Text } from "@radix-ui/themes"
import Img from "@/utils/headers-dark.8aceaf30.svg"
import Image from "next/image"

export default function SpleetScreen() {
  return (
    <Flex p="8" m="8">
      <Flex direction="column" gap="6" justify="start">
        <Text size="8" align="left" weight="bold">
          Freelance <br />
          <Text size="8" color="ruby" weight="bold">
            Design Projects
          </Text>
        </Text>
        <Text color="gray" size="4" mr="9">
          The project board is an exclusive resource for contract work. It's
          perfect for freelancers, agencies, and moonlighters.
        </Text>
        <Flex gap="4">
          <Button variant="solid" color="ruby" radius="none" size="4">
            Create Project
          </Button>
          <Button variant="soft" color="gray" radius="none" size="4">
            How it Works
          </Button>
        </Flex>
      </Flex>
      <Image src={Img} alt="alt" />
    </Flex>
  )
}
