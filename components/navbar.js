import React from 'react'
import {
    Button, 
    ButtonGroup,
    Link, 
    Flex, 
    Spacer, 
    Box, 
    Heading,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Text
    } 
from '@chakra-ui/react'
import {FaBars} from 'react-icons/fa'
import { ChakraProvider } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

const textDecoration = { textDecoration: 'none' }
const Logo =()=>{
    return(
        <Box p='2' ml={{sm:'-10px', base:'0'}}>
            <Heading size='lg' fontWeight={'normal'}><Link fontWeight='semibold' href='/' display={'block'} _hover={textDecoration} >Logo</Link></Heading>
        </Box>
    )
}

const NavDrawer =()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Box ref={btnRef} bg={'white'} mt={'16px'} onClick={onOpen}>
          <FaBars color='black' size={'20'} />
        </Box>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color={'#1EBDD0'}/>
            <DrawerHeader></DrawerHeader>
  
            <DrawerBody>
                <Link fontSize='20px' fontWeight='semibold' href='/' display={'block'} _hover={textDecoration} >Logo</Link>
                <Box>
                <Link href='/' display={'block'} w='100%' my={'6'} _hover={textDecoration} >Home</Link>
                <Link href='/about' display={'block'} w='100%' my={'6'} _hover={textDecoration} >About Us</Link>
                <Link href='/contact' display={'block'} w='100%' my={'6'} _hover={textDecoration} >Contact Us</Link>
                <Link href='/blog' display={'block'} w='100%' my={'6'} _hover={textDecoration} >Sunglo Blog</Link>
                <Link href='/FAQs' display={'block'} w='100%' my={'6'} _hover={textDecoration} >FAQs</Link>
                <Link href='/resetpassword' display={'block'} w='100%' my={'6'} _hover={textDecoration} >Reset password</Link>
                <Link href='/changepassword' display={'block'} w='100%' my={'6'} _hover={textDecoration} >Change password</Link>
                <Link href='/openpositions' display={'block'} w='100%' my={'6'} _hover={textDecoration} >Careers</Link>
                <Button
                  mt={'20px'}
                  px='40px'
                  borderRadius='12px'
                  fontSize='13px'
                  fontWeight='semibold'
                  bg='#01FFFF'
                  color='#4b4f56'
                  // w={'220px'}
                  boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
                  ><Link  href='/signin' display={'flex'} justifyContent={'space-between'}><Text mr={'2'}>Sign In</Text> <Text mt={'1'}><FaArrowRight color='gray.500' size='12'/></Text></Link>
              </Button>
                </Box>
            </DrawerBody>
  
            <DrawerFooter>
              <Text fontSize={{base:'sm'}}>UI design by <Link _hover={textDecoration}>Nicole Eferigho Runo</Link></Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default function Navbar() {

    
    const DesktopNavebar  = {base:'none', sm:'block'}
    const MobileNavebar  = {base:'block', sm:'none'}
    const MobileWidth  = {base:'100%', sm:'auto'}
    
  return (
    <>
    <ChakraProvider>
    <div className='Navbar'>
 
    <Box>
    <Flex fontWeight='normal' minWidth='max-content' alignItems='center' gap='2' >
        <Box display={'flex'} justifyContent={'space-between'} w={MobileWidth}>
        <Box><Logo /></Box>
        <Box display={MobileNavebar}><NavDrawer /></Box>
        </Box>
        <Spacer />
        <Box  display={DesktopNavebar}>
            <Link href='/' w='100%' mx={'4'} _hover={textDecoration}>Home</Link>
            <Link href='/blog' w='100%' mx={'4'} _hover={textDecoration} >Blog</Link>
            <Link href='/careers' w='100%' mx={'4'} _hover={textDecoration} >Careers</Link>
            <Link href='/contact'  w='100%' mx={'4'} _hover={textDecoration} >Contact Us</Link>
            <Link href='/FAQs' w='100%' mx={'4'} _hover={textDecoration} >FAQs</Link>
        </Box>
        <Spacer />
        <Box display={DesktopNavebar}>
        <ButtonGroup gap='1'>
            <Button fontWeight='hairline' colorScheme='none' color='black'><Link w='100%' href='/signin'>Sign in</Link></Button>
            <Box
            as='button'
            px='40px'
            borderRadius='12px'
            fontSize='13px'
            fontWeight='semibold'
            bg='#01FFFF'
            color='#4b4f56'
            boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
            >Get Started</Box>
        </ButtonGroup>
        </Box>
       
    </Flex>
    </Box>
    </div>
    </ChakraProvider>
    </>
  )
}