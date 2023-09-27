"use client"
import { useDisclosure } from "@chakra-ui/hooks"
import { Example, Logo,PageHeading } from "@/components"

export default function page() {
  const Links = ["Dashboard", "Projects", "Team"]
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {/* <Example /> */}
      <PageHeading />
    </>
  )
}
