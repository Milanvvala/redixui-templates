// import { Box, Stack, Text, StackProps, useColorModeValue } from '@chakra-ui/react'
// import { data } from '../../data'
// import { GITHUB_LINK } from '../../config/constants'

// const NavigationLink = (props: Props) => {
//   const { href, children, pathname } = props
//   const isActive = pathname === href
//   const activeBg = useColorModeValue('green.50', 'green.900')
//   return (
//     <Box
//       href={href} fontSize={'sm'} rounded={'md'} px={3} py={2} ml={'-12px!important'}
//       bg={isActive ? activeBg : undefined} fontWeight={isActive ? 600 : 400}
//       color={
//         isActive
//           ? 
//           // eslint-disable-next-line react-hooks/rules-of-hooks
//             useColorModeValue('green.700', 'green.400')
//           : // eslint-disable-next-line react-hooks/rules-of-hooks
//             useColorModeValue('gray.700', 'gray.300')
//       }
//       _hover={{
//         bg: isActive ? activeBg : useColorModeValue('gray.100', 'gray.900'),// eslint-disable-next-line react-hooks/rules-of-hooks
//       }}
//       as={Link}>
//       {children}
//     </Box>
//   )
// }

// export const Navigation = (props: StackProps) => {
//   const pathname = usePathname()
//   const categoryColor = useColorModeValue('gray.800', 'gray.200')

//   return (
//     <Stack
//       as={'nav'}
//       spacing={6}
//       maxW={{ md: '3xs' }}
//       w={'full'}
//       flexShrink={0}
//       {...props}>
//       {data.map((category) => (
//         <Stack key={category.id}>
//           <Text
//             textTransform={'uppercase'}
//             color={categoryColor}
//             fontWeight={700}
//             fontSize="sm"
//             letterSpacing={1}>
//             {category.name}
//           </Text>
//           <Stack spacing={1} marginTop={1} marginBottom={4}>
//             {category.children?.map((subCategory) => (
//               <NavigationLink
//                 pathname={pathname}
//                 key={subCategory.id}
//                 href={`/${category.id}/${subCategory.id}`}>
//                 {subCategory.name}
//               </NavigationLink>
//             ))}
//           </Stack>
//         </Stack>
//       ))}
//       <Stack
//         spacing={2}
//         bg={useColorModeValue('gray.50', 'gray.900')}
//         rounded={'md'}
//         p={{ base: 4 }}>
//         <Text fontWeight={700} fontSize={'sm'}>
//           These are not the templates you are looking for?
//         </Text>
//         <Text fontSize={'sm'}>
//           Feel free to contribute your own template in our{' '}
//           <Link href={GITHUB_LINK} target={'_blank'} color={'green.400'}>
//             Github
//           </Link>{' '}
//           Repository.
//         </Text>
//       </Stack>
//     </Stack>
//   )
// }

// head
// 'use client'

// import {
//   Box,
//   Flex,
//   Container,
//   Stack,
//   useDisclosure,
//   IconButton,
//   useColorModeValue,
//   Icon,
//   useColorMode,
//   Heading,
// } from '@chakra-ui/react'
// import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
// import { IoMoon, IoSunny } from 'react-icons/io5'
// import Link from 'next/link'

// import { Logo } from '#/components/Logo'
// import { TextUnderline } from '#/components/TextUnderline'
// import { MobileNav } from '#/components/Header/MobileNav'
// import { DesktopNav } from '#/components/Header/DesktopNav'

// export const Header = () => {
//   const { isOpen: isMobileNavOpen, onToggle } = useDisclosure()
//   const { colorMode, toggleColorMode } = useColorMode()

//   return (
//     <Box as="header">
//       <Flex
//         as={'header'}
//         pos="fixed"
//         top="0"
//         w={'full'}
//         minH={'60px'}
//         boxShadow={'sm'}
//         zIndex="999"
//         justify={'center'}
//         css={{
//           backdropFilter: 'saturate(180%) blur(5px)',
//           backgroundColor: useColorModeValue(
//             'rgba(255, 255, 255, 0.8)',
//             'rgba(26, 32, 44, 0.8)',
//           ),
//         }}>
//         <Container as={Flex} maxW={'7xl'} align={'center'}>
//           <Flex
//             flex={{ base: '0', md: 'auto' }}
//             ml={{ base: -2 }}
//             mr={{ base: 6, md: 0 }}
//             display={{ base: 'flex', md: 'none' }}>
//             <IconButton
//               onClick={onToggle}
//               icon={
//                 isMobileNavOpen ? (
//                   <CloseIcon w={3} h={3} />
//                 ) : (
//                   <HamburgerIcon w={5} h={5} />
//                 )
//               }
//               variant={'ghost'}
//               size={'sm'}
//               aria-label={'Toggle Navigation'}
//             />
//           </Flex>

//           <Flex flex={{ base: 1, md: 'auto' }} justify={{ base: 'start', md: 'start' }}>
//             <Stack
//               href="/"
//               direction="row"
//               alignItems="center"
//               spacing={{ base: 2, sm: 4 }}
//               as={Link}>
//               <Icon as={Logo} w={{ base: 8 }} h={{ base: 8 }} />
//               <Heading as={'h1'} fontSize={'xl'} display={{ base: 'none', md: 'block' }}>
//                 <TextUnderline>Chakra</TextUnderline> Templates
//               </Heading>
//             </Stack>
//           </Flex>

//           <Stack
//             direction={'row'}
//             align={'center'}
//             spacing={{ base: 6, md: 8 }}
//             flex={{ base: 1, md: 'auto' }}
//             justify={'flex-end'}>
//             <DesktopNav display={{ base: 'none', md: 'flex' }} />
//             <IconButton
//               size={'sm'}
//               variant={'ghost'}
//               aria-label={'Toggle Color Mode'}
//               onClick={toggleColorMode}
//               icon={colorMode == 'light' ? <IoMoon size={18} /> : <IoSunny size={18} />}
//             />
//           </Stack>
//         </Container>
//       </Flex>
//       <MobileNav isOpen={isMobileNavOpen} />
//     </Box>
//   )
// }