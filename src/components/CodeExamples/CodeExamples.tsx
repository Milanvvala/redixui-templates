"use client"
import { Flex } from "@radix-ui/themes"
import { Example } from "../Example"
import type { Template } from "@/data/types"

interface Props {
  templates?: Template[]
  category: any
  subCategory: any
}

export const CodeExamples = (props: Props) => {
  const { templates, category, subCategory } = props

  return (
    <>
      <Flex gap="3" direction='column'>
        {templates?.map((t) => (
          <Example
            key={t.filename}
            template={t}
            category={category}
            subCategory={subCategory}
          />
        ))}
      </Flex>
    </>
  )
}
