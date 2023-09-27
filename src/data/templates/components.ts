import { SubCategory } from "../types"

export const buttons: SubCategory = {
  name: "Buttons",
  id: "buttons",
  children: [
    {
      name: "Buttons_1",
      filename: "simple"
    },
    {
      name: "Buttons_2",
      filename: "complex"
    },
    {
      name: "Buttons_3",
      filename: "buttontypes"
    }
  ]
}

export const cards: SubCategory = {
  name: "Cards",
  id: "cards",
  children: [
    {
      name: "Pricing",
      filename: "pricing"
    },
    {
      name: "Shoping",
      filename: "shoping"
    }
  ]
}

export const forms: SubCategory = {
  name: "Forms",
  id: "forms",
  children: [
    {
      name: "Contact Form",
      filename: "contactform"
    },
    {
      name: "Authentication Form",
      filename: "authenticationform"
    },
    {
      name: "newsletter",
      filename: "newsletter"
    },
  ]
}
