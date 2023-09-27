import { navbar, footer } from "./templates/navigation"
import { hero, features, statistics } from "./templates/page-sections"
import { buttons, cards, forms} from "./templates/components"
import { Category } from "./types"
import { blog } from "./templates/blog"

export const data: Category[] = [
  {
    name: "Page Sections",
    subLabel: "Large Page Sections like Hero, Features ...",
    id: "page-sections",
    children: [hero, features, statistics]
  },
  {
    name: "Blog",
    subLabel: "A section regarding all blog elements",
    id: "blog",
    children: [blog]
  },
  {
    name: "Navigation",
    id: "navigation",
    subLabel: "Header Navigation for Websites & Apps",
    children: [navbar, footer]
  },

  {
    name: "Components",
    id: "components",
    subLabel: "Smaller buildings blocks like Cards, Buttons, Result ...",
    children: [cards, buttons, forms]
  }
]