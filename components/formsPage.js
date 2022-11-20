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
    InputLeftElement
  } 
from '@chakra-ui/react'
import Image from "next/image"
import resetPasswordImage from '../public/Group 2037.svg'
import { FaArrowLeft, FaEnvelope } from 'react-icons/fa'


export default function FormsPage({ children }) {
const textDecoration = { textDecoration: 'none' }
  return (
    <div>
        <Box>
            <Box display={{base:'none', sm:'block'}}><Image src={resetPasswordImage} alt='ContactImg' height={1000}/></Box>
            <Box w={{base:'100%'}} pos={{sm:'absolute', base:'relative'}} top={{base:'3rem',sm:'4rem'}}>
               <Box display={{sm:'flex'}} justifyContent={'space-between'} px={{sm:'110px', base:'4'}}>
                <Box mt={'20px'} display={{sm:'block', base:'none'}}>
                    <Heading ml={'-40px'} size='lg' fontWeight={'normal'}><Link fontWeight='semibold' href='/' display={'block'} _hover={textDecoration} >Logo</Link></Heading>
                </Box>
                <Box w={{sm:'20%'}} >
                    <div className='arrow'>
                    <FaArrowLeft color='gray.500' size='12'/>
                    </div>
                </Box>
                <Box mt={{base:'-6',sm:'0'}} fontSize={{base:'sm', sm:'md'}} pb={40} w={{sm:'30%'}} display={'flex'} justifyContent={'end'}>Not a member yet? <Link ml={'10px'} _hover={textDecoration} borderBottom={'1px'} borderColor={'#068695'}><span> Sign Up</span></Link></Box>
               </Box>

               {/* <Box display={'flex'} justifyContent={'center'} mt={{sm:'-2', base:'-20'}} px={{base:'4'}}>
                    <Box display={'flex'} justifyContent={'center'} pl={{sm:'180px'}}>
                        <Box w={{sm:'55%', base:'100%'}}>
                            <Text fontWeight={'semibold'} fontSize={{base:'sm', sm:'md'}}>Enter the email address associated with your account and we’ll send you
                                 a link to reset your password.
                            </Text>
                                <Box 
                                    w={{sm:'100%'}}
                                    borderLeft={{sm:'2px', base:'1px'}}
                                    borderBottom={{sm:'2px', base:'1px'}}
                                    borderRight={'none'}
                                    borderTop={'none'}
                                    borderColor={'#05C3DD'}
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
                                    type='email' 
                                    placeholder='Email' 
                                    variant='unstyled'
                                    fontSize={{base:'sm', sm:'md'}}
                                     />
                                    </InputGroup>
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
               </Box> */}
               { children }
               
            </Box>
         
        </Box>
    </div>
  )
}
