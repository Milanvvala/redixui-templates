import { SubCategory } from "../types"

export const navbar: SubCategory = {
  name: "Navbar",
  id: "navbar",
  children: [
    {
      name: "Simple with Icon and Dark theme switcher",
      filename: "simple"
    },
    {
      name: "With Sub-Navigation & CTA",
      filename: "mainmenu"
    },
    {
      name: "With action button & user profile",
      filename: "dashboard"
    }
  ]
}

// "use client"
// import { Box, Text } from "@radix-ui/themes"

// export default function Dashboard() {
//   return (
//     <>
//       <Box>
        
//       </Box>
//     </>
//   )
// }

/*
card

<Box m="6" width="max-content">
        <Card size={"4"}>
          <Inset m={"4"} side={"top"}>
            <Box color="white">
              <Image src={img} width={200} height={100} alt="alt" />
            </Box>
          </Inset>
          <Separator size={"4"} m={"0"} />
          <Flex justify={"between"}>
            <Flex direction={"column"} gap="2">
              <Badge color="red" radius="full">
                NEW
              </Badge>
              <Text size={"5"}>Wayfarer Classic</Text>
              <Flex>
                <StarFilledIcon /> <StarFilledIcon /> <StarFilledIcon />
                <StarFilledIcon /> <StarIcon />
              </Flex>
              <Text color="gray" size={"2"}>
                34 riviews
              </Text>
            </Flex>
            <Flex direction={"column"} gap="2">
              <CircleIcon />
              <Text>$9.8</Text>
            </Flex>
          </Flex>
        </Card>
      </Box>

*/





      /* <Flex display={{ initial: "flex", xs: "none" }} align="center" mr="4">
        
    </Flex> */