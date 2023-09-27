import { SubCategory } from '../types'

export const hero: SubCategory = {
  name: 'Hero',
  id: 'hero',
  children: [
    {
      name: 'CTA with Annotation',
      filename: 'simple',    },
    {
      name: 'CTA with Illustration',
      filename: 'bighero',
    },
    {
      name: 'Split Screen with Image',
      filename: 'splitscreen',
    },
  ],
}

export const features: SubCategory = {
  name: "Features",
  id: "features",
  children: [
    {
      name: "Grid List with Heading",
      filename: "simple"
    },
    {
      name: "Feature Cards with Heading",
      filename: "complex"
    }
  ]
}

export const statistics: SubCategory = {
  name: "Statistics",
  id: "statistics",
  children: [
    {
      name: "Basic Statistics",
      filename: "basic"
    },
    {
      name: "Statistics with Icons",
      filename: "iconstats"
    },
    {
      name: "Statistics with Title and Description",
      filename: "detailstats"
    }
  ]
}
