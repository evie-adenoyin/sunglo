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
    Input
    } 
from '@chakra-ui/react'
import {FaBars} from 'react-icons/fa'

const textDecoration = { textDecoration: 'none' }
const Logo =()=>{
    return(
        <Box p='2'>
            <Heading size='lg' fontWeight={'normal'}>Logo</Heading>
        </Box>
    )
}

const NavDrawer =()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} bg={'white'} onClick={onOpen}>
          <FaBars color='black' size={'30'} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
  
            <DrawerBody>
                <Box>
                <Link display={'block'} w='100%' mx={'4'} _hover={textDecoration} href='/about'>About Us</Link>
                <Link display={'block'} w='100%' mx={'4'} _hover={textDecoration} >Why Us</Link>
                <Link display={'block'} w='100%' mx={'4'} _hover={textDecoration} >Projects</Link>
                <Link display={'block'} w='100%' mx={'4'} _hover={textDecoration} >How To Invest</Link>
                <Link display={'block'} w='100%' mx={'4'} _hover={textDecoration} >Company</Link>
                </Box>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
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
    const NavLinks = {base:'block', sm:'inline'}
    
  return (
    <>
    <div className='Navbar'>
 
    <Box>
    <Flex fontWeight='normal' minWidth='max-content' alignItems='center' gap='2' >
        <Box display={'flex'} justifyContent={'space-between'} w={MobileWidth}>
        <Box><Logo /></Box>
        <Box display={MobileNavebar}><NavDrawer /></Box>
        </Box>
        <Spacer />
        <Box  display={DesktopNavebar}>
            <Link w='100%' mx={'4'} _hover={textDecoration} href='/about'>About Us</Link>
            <Link w='100%' mx={'4'} _hover={textDecoration} >Why Us</Link>
            <Link w='100%' mx={'4'} _hover={textDecoration} >Projects</Link>
            <Link w='100%' mx={'4'} _hover={textDecoration} >How To Invest</Link>
            <Link w='100%' mx={'4'} _hover={textDecoration} >Company</Link>
        </Box>
        <Spacer />
        <Box display={DesktopNavebar}>
        <ButtonGroup gap='1'>
            <Button fontWeight='hairline' colorScheme='none' color='black'><Link w='100%'>Sign in</Link></Button>
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
    </>
  )
}