import React, { useState } from "react"
import { Badge, Flex } from "@radix-ui/themes"
import { DesktopIcon, MobileIcon, TableIcon } from "@radix-ui/react-icons"

export const ExampleViewer = () => {
  const options = [
    {
      label: "smart phone",
      width: "380px",
      icon: <MobileIcon />
    },
    {
      label: "Tablet",
      width: "600px",
      icon: <TableIcon />
    },
    {
      label: "PC",
      width: "full",
      icon: <DesktopIcon />
    }
  ]
  // const [varient, setVarient] : '"outline" | "solid" | "soft" | "surface" | undefined'= useState("outline")
  return (
    <>
      <Flex>
        {options.map((value) => {
          const label = value.width
          return (
            <Badge size="2" variant={varient} key={value.label}>
              {value.icon}
            </Badge>
          )
        })}
      </Flex>
    </>
  )
}
