"use client"
import {
  Box,
  Button,
  Card,
  Flex,
  IconButton,
  Inset,
  Link,
  Separator,
  Tabs,
  Text
} from "@radix-ui/themes"
import { getExampleUrl } from "@/utils/getExampleUrl"
import type { Category, SubCategory, Template } from "@/data/types"
import {
  DesktopIcon,
  ExternalLinkIcon,
  LaptopIcon,
  MobileIcon
} from "@radix-ui/react-icons"
import { CodeSample, ResizableFrame } from "@/components"

type ExampleProps = {
  template: Template
  category: Category
  subCategory: SubCategory
}

export default function Example(props: ExampleProps) {
  const { template, category, subCategory } = props

  return (
    <Flex pt="4" m="5" gap="4" direction="column" width="100%">
      <Card id={template.filename}>
        <Box height="100%" style={{ scrollMarginTop: "32px" }}>
          <Tabs.Root defaultValue="preview">
            {/* Head */}
            <Inset side="top" mb="4">
              <Flex
                px="4"
                pt="4"
                align="center"
                gap="4"
                style={{ background: "#24292f" }}
              >
                {/* Template Title */}
                <Text size="5" weight="medium">
                  {template.name}
                </Text>
                <Separator orientation="vertical" size="2" />

                {/* Tabs */}
                <Tabs.List>
                  <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                  <Tabs.Trigger value="code">Code</Tabs.Trigger>
                </Tabs.List>
                <Separator orientation="vertical" size="2" />

                {/* External View Link */}
                <Button variant="ghost" title="Open in Fullscreen">
                  <Link
                    href={getExampleUrl(category, subCategory, template) ?? "@"}
                  >
                    Live <ExternalLinkIcon />
                  </Link>
                </Button>
                <Separator orientation="vertical" size="2" />

                {/* Radio Button */}
                {/* <IconButton variant="soft">
                    <MobileIcon />
                  </IconButton>
                  <IconButton variant="soft">
                    <LaptopIcon />
                  </IconButton>
                  <IconButton variant="soft">
                    <DesktopIcon />
                  </IconButton> */}
              </Flex>
            </Inset>

            {/* Preview */}
            <Tabs.Content value="preview">
              <ResizableFrame
                template={template}
                category={category}
                subCategory={subCategory}
              />
            </Tabs.Content>

            {/* Code */}
            <Tabs.Content value="code">
              <CodeSample
                template={template}
                category={category}
                subCategory={subCategory}
              />
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Card>
    </Flex>
  )
}
