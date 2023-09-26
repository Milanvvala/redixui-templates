import { SubCategory } from "../types"
export const footer: SubCategory = {
  name: "Footer",
  id: "footer",
  children: [
    {
      name: "Simple with Logo, Navigation, Socialicons",
      filename: "smallcentered"
    },
    {
      name: "Small with Logo",
      filename: "clean"
    },
    {
      name: "Small with Navigation",
      filename: "simple"
    },
    {
      name: "Large with Logo",
      filename: "largesimple"
    },
    {
      name: "Large with Newslatter",
      filename: "large"
    }
  ]
}

/* pricing
<Box m="6" width="max-content">
        <Card size={"3"}>
          <Flex gap="5" direction="column" width="max-content">
            <Flex gap="4" direction="column" align={"center"}>
              <Badge color="green">Hobby</Badge>
              <Flex gap="2" align="center">
                <Text size="5">$</Text>
                <Text size="8" weight={"bold"}>
                  79
                </Text>
                <Text size="3" color="gray">
                  /month
                </Text>
              </Flex>
            </Flex>
            <Flex direction="column" gap="2">
              <Flex align="center">
                <CheckIcon color="lime" />
                <Text>5,000 page views</Text>
              </Flex>
              <Flex align="center">
                <CheckIcon color="lime" />
                <Text>50 automation execution</Text>
              </Flex>
              <Flex align="center">
                <CheckIcon color="lime" />
                <Text>50 identified users</Text>
              </Flex>
              <Flex align="center">
                <CheckIcon color="lime" />
                <Text>All features</Text>
              </Flex>
            </Flex>
            <Button variant="solid" color="green">
              Start your trial
            </Button>
          </Flex>
        </Card>
      </Box>
*/
/* product card

<Box m="6" width="max-content">
        <Card size={"4"}>
          <Flex gap={"5"} direction={"column"}>
            <Box color="white">
              <Image src={img} width={200} height={100} alt="image" />
            </Box>
            <Text size={"2"} color="gray">
              BRAND
            </Text>
            <Text size={"5"}>Nice Chair , Pink</Text>
            <Text size={"4"} highContrast>
              $57
              <Text size={"2"} color="gray">
                <del>$199</del>
              </Text>
            </Text>
          </Flex>
        </Card>
      </Box>

*/
