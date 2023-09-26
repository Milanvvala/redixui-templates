import Categories from "@/components/Categories/page"
import Features from "@/components/Features/Features"
import Hero from "@/components/Hero/Hero"
import { Box, Card, Separator } from "@radix-ui/themes"

export default function Home() {
  return (
    <>
      <Separator orientation="horizontal" size="4" />
      <Hero />
      <Separator orientation="horizontal" size="4" />
      <Features />
      <Separator orientation="horizontal" size="4" />
      <Categories />
      <Separator orientation="horizontal" size="4" />
    </>
  )
}
