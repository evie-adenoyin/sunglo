import {
    Button, 
    ButtonGroup,
    Link, 
    Flex, 
    Spacer, 
    Box, 
    Heading, 
    Text,
    Input,
    border
} 
from '@chakra-ui/react'
// import { useFormik, Formik } from "formik";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = ()=>{
     // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2))
//     },
//   })
    const textDecoration = { textDecoration: 'none' }
    return(
        <div className='footer'>
            <Box h={'100vh'} bg={'#F6F6F6'} py={'16'} px={'28'}>
                <Box display={'flex'} justifyContent={'center'} gap={'3'}>
                    <Box>
                       <Text fontSize={'xl'} fontWeight={'semibold'} mt={'1'}>Join Sunglo For Free:</Text> 
                    </Box>
                    <Box>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Enter email address'
                        // onChange={formik.handleChange}
                        // value={formik.values.email}
                        border={'1px'}
                        borderColor={'#05C3DD'}
                        bg={'white'}
                    />
                    </Box>
                </Box>
                <Box mt={'10'}>
                <Heading size='lg' fontWeight={'normal'} my={'20'}>Logo</Heading>
                </Box>
                <Box display={'flex'}>    
                    <Box display={'flex'} w={'50%'} justifyContent={'space-between'}>
                        <Box>
                            <Link _hover={textDecoration}>About</Link>
                            <Link _hover={textDecoration} display={'block'} my={'4'}>Solar Projects</Link>
                            <Link _hover={textDecoration} display={'block'} my={'4'}>Why Us</Link>
                            <Link _hover={textDecoration} display={'block'} my={'4'}>Sunglo Blog</Link>
                            <Link _hover={textDecoration} display={'block'} my={'4'}>How to Invest</Link>
                            <Link _hover={textDecoration} display={'block'} my={'4'}>FAQs</Link>
                            <Box display={'flex'} justifyContent={'space-around'}>
                            <Box bg={'#0B0B0B'} boxShadow={'4px 4px 13px rgba(54, 219, 241, 0.3)'} border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={'4'}><FaTwitter color='#05C3DD' /></Box>
                            <Box bg={'#0B0B0B'} boxShadow={'4px 4px 13px rgba(54, 219, 241, 0.3)'} border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={'4'}><FaInstagram color='#05C3DD' /></Box>
                            <Box bg={'#0B0B0B'} boxShadow={'4px 4px 13px rgba(54, 219, 241, 0.3)'} border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={'4'}><FaFacebookF color='#05C3DD' /></Box>
                            <Box bg={'#0B0B0B'} boxShadow={'4px 4px 13px rgba(54, 219, 241, 0.3)'} border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={'4'}> <FaYoutube color='#05C3DD' /></Box>
                            </Box>
                        </Box>
                        <Box mr={'16'}>
                            <Link  _hover={textDecoration} display={'block'} mb={'4'}>Terms & Conditions</Link>
                            <Link  _hover={textDecoration} display={'block'} mb={'4'}>Privacy Policy</Link>
                            <Link  _hover={textDecoration} display={'block'} mb={'4'}>Careers</Link>
                            <Link  _hover={textDecoration} display={'block'} mb={'4'}>Contact Us</Link>
                            
                        </Box>
                    </Box>
                    
                    <Box w={'50%'}>
                        <Box display={'flex'} justifyContent={'end'}>
                            <Box>
                            <Heading fontSize={'3xl'}>Ready To Begin ?</Heading>
                                <Input
                                    id='email'
                                    name='email'
                                    type='email'
                                    placeholder='Enter email address'
                                    // onChange={formik.handleChange}
                                    // value={formik.values.email}
                                    border={'1px'}
                                    borderColor={'#05C3DD'}
                                    bg={'white'}
                                    w={'220px'}
                                    h={'8'}
                                    mt={'4'}
                                />
                                <Box>
                                <Button
                                    mt={'20px'}
                                    px='40px'
                                    borderRadius='12px'
                                    fontSize='13px'
                                    fontWeight='semibold'
                                    bg='#01FFFF'
                                    color='#4b4f56'
                                    w={'220px'}
                                    boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
                                    >Subscribe
                                </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            
        </div>
    )
}

export default Footer