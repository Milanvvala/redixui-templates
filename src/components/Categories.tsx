"use client"
import { Box, Card, Flex, Grid, Inset, Text } from "@radix-ui/themes"
import Image from "next/image"
import img from "@/utils/headers-dark.8aceaf30.svg"

export default function Categories() {
  const cards: String[] = ["Navbar", "Footer", "Hero", "Fetures", "Blog"]

  return (
    <Flex my="8" direction="column" gap="3" align="center">
      <Text size="8" weight="bold">
        Templates
      </Text>
      
      {/* Template Grid */}
      <Grid columns="3" gap="4" mt="8">
        {cards.map((f, i) => {
          return (
            <Box key={i} width="max-content">
              <Card>
                <Inset side="top" mb="4">
                  <Image src={img} alt="img" height={150} />
                </Inset>
                <Text size="6" weight="medium" mx="4">
                  {f}
                </Text>
              </Card>
            </Box>
          )
        })}
      </Grid>
    </Flex>
  )
}
