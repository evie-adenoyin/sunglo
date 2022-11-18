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
        <Box ref={btnRef} bg={'white'} mt={'20px'} onClick={onOpen}>
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
                <Box>
                <Link href='/about' display={'block'} w='100%' my={'6'} _hover={textDecoration} >About Us</Link>
                <Link href='/whyus' display={'block'} w='100%' my={'6'} _hover={textDecoration} >Why Us</Link>
                <Link href='/projects' display={'block'} w='100%' my={'6'} _hover={textDecoration} >Projects</Link>
                <Link href='/howtoinvest' display={'block'} w='100%' my={'6'} _hover={textDecoration} >How To Invest</Link>
                <Link href='/company' display={'block'} w='100%' my={'6'} _hover={textDecoration} >Company</Link>
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
                  >Get started
              </Button>
                </Box>
            </DrawerBody>
  
            <DrawerFooter>
              <Text>UI design by <Link _hover={textDecoration}>Eferigho Runo</Link></Text>
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
    <div className='Navbar'>
 
    <Box>
    <Flex fontWeight='normal' minWidth='max-content' alignItems='center' gap='2' >
        <Box display={'flex'} justifyContent={'space-between'} w={MobileWidth}>
        <Box><Logo /></Box>
        <Box display={MobileNavebar}><NavDrawer /></Box>
        </Box>
        <Spacer />
        <Box  display={DesktopNavebar}>
            <Link href='/about' w='100%' mx={'4'} _hover={textDecoration}>About Us</Link>
            <Link href='/whyus'  w='100%' mx={'4'} _hover={textDecoration} >Why Us</Link>
            <Link href='/projects' w='100%' mx={'4'} _hover={textDecoration} >Projects</Link>
            <Link href='/howtoinvest' w='100%' mx={'4'} _hover={textDecoration} >How To Invest</Link>
            <Link href='/company' w='100%' mx={'4'} _hover={textDecoration} >Company</Link>
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