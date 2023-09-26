"use client"
import {
  Avatar,
  Badge,
  Box,
  Button,
  Callout,
  Card,
  Checkbox,
  DropdownMenu,
  Flex,
  Heading,
  IconButton,
  Inset,
  Link,
  Popover,
  PopoverTrigger,
  Separator,
  Tabs,
  Text,
  TextArea
} from "@radix-ui/themes"
import { Logo } from "@/components/Logo"
import {
  ArrowLeftIcon,
  AvatarIcon,
  ChatBubbleIcon,
  CheckCircledIcon,
  CheckIcon,
  CircleIcon,
  CopyIcon,
  Cross2Icon,
  CrossCircledIcon,
  DotsVerticalIcon,
  ExclamationTriangleIcon,
  ExternalLinkIcon,
  FaceIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  InfoCircledIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  StarFilledIcon,
  StarIcon,
  SunIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons"
import { CodeBlock } from "react-code-blocks"
import { useDisclosure } from "@chakra-ui/hooks"
import img from "@/app/icon.svg"
import Image from "next/image"
import { Example } from "@/components/Example"
import { PageHeading } from "@/components/PageHeading"

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
