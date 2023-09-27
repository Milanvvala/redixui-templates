"use client"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Flex, Heading, Link, Text } from "@radix-ui/themes"

interface Props {
  name?: string
  description?: string
}

export default function PageHeading(props: Props) {
  const { name, description } = props

  return (
    <Flex pt="4" m="5" gap="4" direction="column">
      <Flex align="center" gap="2">
        <ArrowLeftIcon />
        <Link>Back to all categories</Link>
      </Flex>

      <Heading as="h1" size="8">
        {name}
      </Heading>
      {description ? <Text color="gray">{description}</Text> : null}
    </Flex>
  )
}
