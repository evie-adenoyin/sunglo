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
import NestedLayout from "../components/nestedlayout"
import { FaLock } from 'react-icons/fa'


export default function ChangePassword() {
const textDecoration = { textDecoration: 'none' }
  return (
    <div>
         <Box display={'flex'} justifyContent={'center'} mt={{sm:'-2', base:'-20'}} px={{base:'4'}}>
                    <Box w={{base:'100%', sm:'27%'}}>
                        <Box w='100%'>
                            <Text w={{base:'100%', sm:'400px'}} fontWeight={'semibold'} fontSize={{base:'sm', sm:'md'}}>Change password</Text>
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
                                    children={<FaLock color='gray' />}
                                    />
                                    <Input 
                                    type='password' 
                                    placeholder='New password' 
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
                                    mt={{sm:'30px', base:'30px'}}
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
                                    placeholder='Confirm password' 
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