import {
    Button, 
    ButtonGroup,
    Link, 
    Flex, 
    Spacer, 
    Box, 
    Heading,
    defineStyle,
    defineStyleConfig} 
from '@chakra-ui/react'

export default function Navbar() {

    const textDecoration = { textDecoration: 'none' }
    
  return (
    <>
    <div className='Navbar'>
       
        <Flex fontWeight='normal' minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='lg' fontWeight={'normal'}>Logo</Heading>
            </Box>
            <Spacer />
            <Box>
                <Link w='100%' mx={'4'} _hover={textDecoration} href='/about'>About Us</Link>
                <Link w='100%' mx={'4'} _hover={textDecoration} >Why Us</Link>
                <Link w='100%' mx={'4'} _hover={textDecoration} >Projects</Link>
                <Link w='100%' mx={'4'} _hover={textDecoration} >How To Invest</Link>
                <Link w='100%' mx={'4'} _hover={textDecoration} >Company</Link>
            </Box>
            <Spacer />
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
        </Flex>
    </div>
    </>
  )
}