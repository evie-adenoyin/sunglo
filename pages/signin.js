
import {
    SimpleGrid,
    Box,
    Heading,
    Text,
    Button,
    ButtonGroup,
    Center,
    Link,
    Input,
    InputGroup,
    InputLeftElement, 
    keyframes
  } 
from '@chakra-ui/react'
import Image from 'next/image'
import NestedLayout from "../components/nestedlayout"
import {FaArrowLeft, FaLock, FaEnvelope } from 'react-icons/fa'
import sidebanner from '../public/Group 2035.svg'



export default function ChangePassword() {
const textDecoration = { textDecoration: 'none' }
  return (
    <div>
       <Box>
            <Box display={{base:'none', sm:'block'}}><Image src={sidebanner} alt='ContactImg' height={1000}/></Box>
            <Box w={{base:'100%'}} pos={{sm:'absolute', base:'relative'}} top={{base:'3rem',sm:'4rem'}}>
               <Box display={{sm:'flex'}} justifyContent={'space-between'} px={{sm:'110px', base:'4'}}>
                <Box mt={'20px'} display={{sm:'block', base:'none'}}>
                    <Heading ml={'-40px'} size='lg' fontWeight={'normal'}><Link fontWeight='semibold' href='/' display={'block'} _hover={textDecoration} >Logo</Link></Heading>
                </Box>
                <Box w={{sm:'50%'}} mt={'20px'}>
                <Box  display={{sm:'flex'}} justifyContent={'space-between'} >
                <Box w={{sm:'20%'}}>
                    <div className='arrow'>
                    <Link  href='/'><FaArrowLeft color='gray.500' size='12'/></Link>
                    </div>
                </Box>
                <Box mt={{base:'-6',sm:'0'}} fontSize={{base:'sm', sm:'md'}} pb={40} w={{sm:'80%'}} display={'flex'} justifyContent={'end'}>Not a member yet? <Link href='/signup' ml={'10px'} _hover={textDecoration} borderBottom={'1px'} borderColor={'#068695'}><span> Sign Up</span></Link></Box>
               
                </Box>
                <Box  display={'flex'} justifyContent={'center'} mt={{sm:'-20', base:'-20'}} px={{base:'1',sm:'0'}}>
                    <Box w={{base:'100%', sm:'100%'}}>
                        <Box w='100%'>
                            <Text w={{base:'100%', sm:'400px'}} fontWeight={'semibold'} fontSize={{base:'xl', sm:'3xl'}}>Welcome Back,</Text>
                            <Text mb={'60px'} w={{base:'100%', sm:'400px'}} fontWeight={'normal'} fontSize='md'>Invest in something new..</Text>
                                <Box 
                                    w='100%'
                                    borderLeft={{sm:'2px', base:'1px'}}
                                    borderBottom={{sm:'2px', base:'1px'}}
                                    borderRight={'none'}
                                    borderTop={'none'}
                                    borderColor={{sm:'#05C3DD', base:'#05C3DD'}}
                                    borderBottomLeftRadius={'12px'}
                                    mt={{sm:'30px', base:'30px'}}
                                    px={'3px'}
                                    pb={{sm:'4px', base:'8px'}}
                                    >
                                    <InputGroup>
                                    <InputLeftElement
                                    mt={'-2'}
                                    pointerEvents='none'
                                    children={<FaEnvelope color='gray' />}
                                    />
                                    <Input 
                                    type='password' 
                                    placeholder='Email' 
                                    variant='unstyled'
                                    fontSize={{base:'sm', sm:'md'}}
                                     />
                                    </InputGroup>

                                </Box>

                                <Box 
                                    w={{sm:'100%'}}
                                    borderLeft={{sm:'2px', base:'1px'}}
                                    borderBottom={{sm:'2px', base:'1px'}}
                                    borderRight={'none'}
                                    borderTop={'none'}
                                    borderColor={{sm:'#05C3DD', base:'#05C3DD'}}
                                    borderBottomLeftRadius={'12px'}
                                    mt={{sm:'50px', base:'30px'}}
                                    px={'3px'}
                                    pb={{sm:'4px', base:'8px'}}
                                    >
                                    <InputGroup>
                                    <InputLeftElement
                                    mt={'-2'}
                                    pointerEvents='none'
                                    children={<FaLock color='gray' />}
                                    />
                                    <Input 
                                    type='password' 
                                    placeholder='Password' 
                                    variant='unstyled'
                                    fontSize={{base:'sm', sm:'md'}}
                                     />
                                    </InputGroup>
                                </Box>
                                <Box display={'flex'} justifyContent={'end'}>
                                <Text mt={'3'} fontWeight={'normal'} fontSize='sm'><span>Forgot password?</span></Text>
                                </Box>
                                <Box mt={'50px'}>
                                <Button
                                    px='40px'
                                    borderRadius='12px'
                                    fontSize='13px'
                                    fontWeight='semibold'
                                    bg='#01FFFF'
                                    color='#4b4f56'
                                    w='100%'
                                    boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
                                    >Continue
                                </Button>
                                </Box>
                        </Box>
                    </Box>
                </Box> 
                </Box>
               </Box>            
            </Box> 
        </Box>
      
    </div>
  )
}

ChangePassword.getLayout = function getLayout(page) {
  return (
    <NestedLayout>
      {page}
    </NestedLayout>
  )
}