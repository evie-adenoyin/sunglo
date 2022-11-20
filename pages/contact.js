import React from 'react'
import {
    SimpleGrid,
    Box,
    Heading,
    Text,
    Button,
    ButtonGroup,
    Center,
    Grid,
    GridItem,
    Input,
    Textarea
  } 
from '@chakra-ui/react'
import Image from 'next/image'
import ContactImg from '../public/contact.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import Layout from '../components/layout'

const Contact = () => {
    const DisplayGrid = {base:'block', sm:'flex'}
    const AlignItems = {base:'center'}
    const HeaderFontSize = {base:'xl',sm:'3xl'}
    const HeaderFontWeight = 'semibold'
    const TextFontSize = {base:'sm',sm:'md'}
  return (
    <div>
        <Box display={{base:'none', sm:'block'}}><Image src={ContactImg} alt='ContactImg' height={1000}/></Box>
        <Box w={{base:'100%'}} pos={{sm:'absolute'}} top={{base:'2rem',sm:'14.5rem'}} >
        <Box textAlign={'center'}>
                <Box>
                    <Heading fontSize={HeaderFontSize}>Get In Touch</Heading>
                    <Text fontSize={TextFontSize}>Any questions or remarks? just write a <span>message</span></Text>
                </Box>
            </Box>

            <Box display={DisplayGrid} justifyContent={'center'} mt={{sm:'45px'}}>
            <Box bg={{base:'white', sm:'black'}} w={{base:'100%', sm:'72%'}}  borderRadius={'16px'} px={{sm:'40px'}} py={{sm:'30px'}}>
                <Box display={DisplayGrid} justifyContent={'space-between'}>
                    <Box w={{sm:'40%'}} display={{base:'none', sm:'block'}}>
                    <Box color={'white'} mb={{sm:'50px'}}>
                        <Heading fontWeight={{sm:'semibold'}} mb={{sm:'10px'}}>Contact Information</Heading>
                        <Text>Fill up the form and our team would get back to you within 24 hours</Text>
                    </Box>
                    <Box color={'white'} pl={{sm:'4'}}>
                        <Box display={DisplayGrid} my={{sm:'5'}}><Box mt={{sm:'1'}} mr={{sm:'4'}}><FaPhone color='#05C3DD' /></Box> <Box >+234 8123456783</Box></Box>
                        <Box display={DisplayGrid} my={{sm:'5'}}><Box mt={{sm:'1'}} mr={{sm:'4'}}><FaEnvelope color='#05C3DD' /></Box> <Box>Sunglo@inv.com</Box></Box>
                        <Box display={DisplayGrid} my={{sm:'5'}}><Box mt={{sm:'1'}} mr={{sm:'4'}}><FaMapMarker color='#05C3DD' /></Box><Box>12, Admiral Macaulay, Lagos, Nigeria</Box></Box>
                    </Box>
                    <Box mt={{sm:'8rem'}} w={'30%'} display='flex' justifyContent={'space-between'}>
                                <Box bg={'#0B0B0B'}  border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={{base:'4', sm:'2'}}><FaTwitter color='#05C3DD' /></Box>
                                <Box bg={'#0B0B0B'}  border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={{base:'4', sm:'2'}}><FaInstagram color='#05C3DD' /></Box>
                                <Box bg={'#0B0B0B'}  border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={{base:'4', sm:'2'}}><FaFacebookF color='#05C3DD' /></Box>
                                <Box bg={'#0B0B0B'}  border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={{base:'4', sm:'2'}}> <FaYoutube color='#05C3DD' /></Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box px={{base:'3'}} mt={{base:'25px'}}>
                        <Box w={{base:'100%'}} bg={'#F1F1F1'} p={{base:'4',sm:'20px'}} borderRadius={'16px'} h={{base:'100vh', sm:'auto'}}>
                            <Box my='4'>
                                <Text mb={'-10px'} fontSize={TextFontSize}>Your name</Text>
                                <Input
                                    id='text'
                                    name='text'
                                    type='text'
                                    placeholder='Enter your name'
                                    // onChange={formik.handleChange}
                                    // value={formik.values.email}
                                    border={'1px'}
                                    borderColor={'#05C3DD'}
                                    bg={'white'}
                                    mt={{base:'4'}}
                                />
                            </Box>

                            <Box my='4'>
                                <Text  mb={'-10px'}>E-mail</Text>
                                <Input
                                    id='email'
                                    name='email'
                                    type='email'
                                    placeholder='Enter a valid email'
                                    // onChange={formik.handleChange}
                                    // value={formik.values.email}
                                    border={'1px'}
                                    borderColor={'#05C3DD'}
                                    bg={'white'}
                                    mt={{base:'4'}}
                                />
                            </Box>
                            <Box my='4'>
                                <Text mb={'-10px'} fontSize={TextFontSize}>Message</Text>
                                <Textarea
                                    id='email'
                                    name='email'
                                    type='textarea'
                                    placeholder='message'
                                    // onChange={formik.handleChange}
                                    // value={formik.values.email}
                                    border={'1px'}
                                    borderColor={'#05C3DD'}
                                    bg={'white'}
                                    mt={{base:'4'}}
                                    w={{base:'100%', sm:'300px'}}
                                />
                            </Box>
                            <Box display={'flex'} justifyContent='end'>
                                <Button
                                    mt={'20px'}
                                    px='40px'
                                    borderRadius='12px'
                                    fontSize='13px'
                                    fontWeight='semibold'
                                    bg='#01FFFF'
                                    color='#4b4f56'
                                    w='150px'
                                    // boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
                                    >Submit
                                </Button>
                            </Box>
                        </Box>
                        </Box>
                        <Box mt={'-40'} bg='black' h={'200px'} display={{base:'block', sm:'none'}} color={'white'} p={'4'}>
                        <Heading fontSize={'l'} fontWeight={'bold'} mb={{sm:'10px'}}>Contact Information</Heading>
                        <Box color={'white'} mt='6' w={'100%'}>
                            <Box display={'flex'} my='5' fontSize={'sm'}><Box mt='1' mr='4'><FaPhone color='#05C3DD' /></Box> <Box >+234 8123456783</Box></Box>
                            <Box display={'flex'} my='5' fontSize={'sm'}><Box mt='1' mr='4'><FaEnvelope color='#05C3DD' /></Box> <Box>Sunglo@inv.com</Box></Box>
                            <Box display={'flex'} my='5' fontSize={'sm'}><Box mt='1' mr='4'><FaMapMarker color='#05C3DD' /></Box><Box>12, Admiral Macaulay, Lagos, Nigeria</Box></Box>
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

Contact.getLayout = function getLayout(page) {
    return (
      <Layout>{page}</Layout>
    )
  }

export default Contact
