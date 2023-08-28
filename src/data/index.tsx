// import { authentication } from './templates/authentication'
import { blog } from './templates/blog'
// import { buttons } from './components/buttons'
import { cards } from './templates/cards'
// import { carousel } from './templates/carousel'
import { contact } from './templates/contact'
// import { features } from './templates/features'
// import { footer } from './templates/footer'
import { hero } from './templates/hero'
import { navbar } from './templates/navbar'
// import { multistep } from './templates/basic3StepForm'
// import { newsletter } from './templates/newsletter'
// import { product } from './templates/product'
// import { pricing } from './templates/pricing'
// import { result } from './components/result'
// import { sidebar } from './templates/sidebar'
// import { socialButtons } from './components/socialMediaButtons'
// import { statistics } from './templates/statistics'
// import { testimonials } from './templates/testimonials'

import { Category } from './types'
// import { imagesAndIcons } from './components/imagesAndIcons'
// import { accordion } from './components/accordion'

export const data: Category[] = [
  {
    name: 'Page Sections',
    subLabel: 'Large Page Sections like Hero, Features ...',
    id: 'page-sections',
    children: [
      hero,
      // features,
      // footer,
      // testimonials,
      // pricing,
      // statistics,
      // carousel,
      // product,
    ],
  },
  {
    name: 'Blog',
    subLabel: 'A section regarding all blog elements',
    id: 'blog',
    children: [blog],
  },
  {
    name: 'Navigation',
    id: 'navigation',
    subLabel: 'Header Navigation for Websites & Apps',
    children: [navbar, 
      // sidebar
    ],
  },
  {
    name: 'Forms',
    id: 'forms',
    subLabel: 'User Login, Newsletter & Multi-Step Forms',
    // children: [authentication, newsletter, contact, multistep],
  },
  {
    name: 'Components',
    id: 'components',
    subLabel: 'Smaller buildings blocks like Cards, Buttons, Result ...',
    children: [cards, 
      // buttons, socialButtons, result, imagesAndIcons, accordion
    ],
  },
]