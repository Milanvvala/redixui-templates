"use client"
import { Badge, Flex, Text } from "@radix-ui/themes"
import { CopyIcon, FaceIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"

export default function Features() {
  const FeturesObj = [
    {
      Icon: <MagnifyingGlassIcon />,
      title: "Find your template",
      detail:
        "Every template is embedded within an iframe, so you can easily check what they look like and test the responsive behaviour."
    },
    {
      Icon: <CopyIcon />,
      title: "Copy the code",
      detail:
        "Click the code tab to see the actual source code of the template. Copy and paste it into your project and adjust it to your needs."
    },
    {
      Icon: <FaceIcon />,
      title: "Enjoy your free time",
      detail:
        "You've just saved yourself a bunch of time not building the same stuff over and over again. Enjoy your free time, and build business features"
    }
  ]

  return (
    <Flex my="8" direction="column" gap="3" align="center">
      {/* Heading */}
      <Text size="8" weight="bold">
        Getting started in <Text color="iris">3 easy steps</Text>
      </Text>

      <Flex gap="2">
        {FeturesObj.map((f, i) => {
          return (
            <Flex key={i} gap="2" direction="column" m="4" align="center">
              <Badge size="2" variant="soft" color="iris">
                {f.Icon}
              </Badge>
              <Text weight="medium">{f.title}</Text>
              <Text align="center" color="gray">
                {f.detail}
              </Text>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}
