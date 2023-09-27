"use client"
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
  SewingPinFilledIcon
} from "@radix-ui/react-icons"
import { Button, Card, Flex, Text, TextArea, TextField } from "@radix-ui/themes"

export default function ContactForm() {
  return (
    <Card m="8" size='4'>
      <Flex>
        {/* Left Sidw */}
        <Flex direction="column" gap="4">
          <Text size="6" weight="bold">
            Contact
          </Text>
          <Text size="3" color="gray">
            Fill up the form below to contact
          </Text>

          <Flex direction="column" gap="6" align="center">
            <Text weight="medium">
              <PersonIcon />
              +91-9812345678
            </Text>
            <Text weight="medium">
              <EnvelopeClosedIcon />
              hello@xyz.com
            </Text>
            <Text weight="medium">
              <SewingPinFilledIcon />
              Mumbai, India
            </Text>
          </Flex>

          <Flex gap="8" align="center">
            <LinkedInLogoIcon color="gray" /> <GitHubLogoIcon />
            <InstagramLogoIcon />
          </Flex>
        </Flex>

        {/* Right Side */}
        <Flex direction="column" gap="4" p="7">
          <Flex direction="column" gap="2" align="start">
            <Text size="5" weight="medium">
              Your Name
            </Text>
            <TextField.Root>
              <TextField.Slot>
                <PersonIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input placeholder="enter your name" />
            </TextField.Root>
          </Flex>

          <Flex direction="column" gap="2" align="start">
            <Text size="5" weight="medium">
              Email
            </Text>
            <TextField.Root>
              <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input placeholder="enter your email" />
            </TextField.Root>
          </Flex>

          <Flex direction="column" gap="2" align="start">
            <Text size="5" weight="medium">
              Message
            </Text>
            <TextArea placeholder="message" />
          </Flex>
        </Flex>

        <Button color="blue" variant="solid">
          Send Message
        </Button>
      </Flex>
    </Card>
  )
}
