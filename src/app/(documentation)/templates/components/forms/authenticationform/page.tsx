"use client"
import { Button, Card, Flex, Link, Text, TextField } from "@radix-ui/themes"

export default function AuthenticationForm() {
  return (
    <Flex direction="column" align="center" m="8" p="8">
      <Text size="8" weight="bold">
        Sign up
      </Text>
      <Text size="4" color="gray">
        to enjoy all of our cool features
      </Text>

      <Card size="2">
        <Flex gap='2'>
          <Flex align="start" gap="1">
            <Text size="4" weight="medium">
              First Name
              <Text size="1" color="red">
                *
              </Text>
            </Text>
            <TextField.Input />
          </Flex>
          <Flex align="start" gap="1">
            <Text size="4" weight="medium">
              Last Name
            </Text>
            <TextField.Input />
          </Flex>
        </Flex>
        <Flex align="start" gap="1">
          <Text size="4" weight="medium">
            Email Address
            <Text size="1" color="red">
              *
            </Text>
          </Text>
          <TextField.Input />
        </Flex>
        <Flex align="start" gap="1">
          <Text size="4" weight="medium">
            Password
            <Text size="1" color="red">
              *
            </Text>
          </Text>
          <TextField.Input />
        </Flex>
        <Button color="blue" variant="solid">
          Sign Up
        </Button>

        <Text weight="light" size="4">
          Already a user? <Link color="blue">Login</Link>
        </Text>
      </Card>
    </Flex>
  )
}
