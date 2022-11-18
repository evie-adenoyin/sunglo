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
    // const contactBg = 'black'
    const textDecoration = { textDecoration: 'none' }
    return(
        <div className='footer'>
            <Box h={{base:'100%', sm:'100vh'}} bg={'#F6F6F6'} py={{base:'4', sm:'16'}} px={{base:'4', sm:'28'}}>
                <Box display={{base:'block', sm:'flex'}} justifyContent={'center'} gap={'3'} px={{base:'10'}}>
                    <Box>
                       <Text textAlign={{base:'center'}} fontSize={{base:'md', sm:'xl'}} fontWeight={'semibold'} mt={'1'}>Join Sunglo For Free:</Text> 
                    </Box>
                    <Box mt={{sm:'-3'}}>
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
                        mt={{base:'4'}}
                    />
                    </Box>
                </Box>
                <Box mt={'10'}>
                <Heading fontSize={{base:'xl', sm:'2xl'}} fontWeight={'normal'} my={{base:'10', sm:'20'}}>Logo</Heading>
                </Box>
                <Box display={{base:'block', sm:'flex'}}>    
                   <Box w={{base:"100%", sm:'50%'}}>
                   <Box display={{base:'block', sm:'flex'}}  justifyContent={'space-between'}>
                        <Box>
                            <Link href='/about' _hover={textDecoration} fontSize={{base:'sm', sm:'l'}}>About Us</Link>
                            <Link href='/projects' _hover={textDecoration} fontSize={{base:'sm', sm:'l'}} display={'block'} my={'4'}>Solar Projects</Link>
                            <Link href='/whyus' _hover={textDecoration} fontSize={{base:'sm', sm:'l'}} display={'block'} my={'4'}>Why Us</Link>
                            <Link href='/blog' _hover={textDecoration} fontSize={{base:'sm', sm:'l'}} display={'block'} my={'4'}>Sunglo Blog</Link>
                            <Link href='/howtoinvest' _hover={textDecoration} fontSize={{base:'sm', sm:'l'}} display={'block'} my={'4'}>How to Invest</Link>
                            <Link href='/FAQs' _hover={textDecoration} fontSize={{base:'sm', sm:'l'}} display={'block'} my={'4'}>FAQs</Link>
                           
                        </Box>
                        <Box mr={'16'}>
                            <Link  href='/termsandconditions' _hover={textDecoration} fontSize={{base:'sm', sm:'l'}} display={'block'} mb={'4'}>Terms & Conditions</Link>
                            <Link  href='/policy' _hover={textDecoration} fontSize={{base:'sm', sm:'l'}} display={'block'} mb={'4'}>Privacy Policy</Link>
                            <Link  href='/openpositions' _hover={textDecoration} fontSize={{base:'sm', sm:'l'}} display={'block'} mb={'4'}>Careers</Link>
                            <Link  href='/contact' _hover={textDecoration} fontSize={{base:'sm', sm:'l'}} display={'block'} mb={'4'}>Contact Us</Link>
                            
                        </Box>
                    </Box>
                    <Box  w={'30%'} display='flex' justifyContent={'space-between'}>
                            <Box bg={'#0B0B0B'} boxShadow={'4px 4px 13px rgba(54, 219, 241, 0.3)'} border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={{base:'4', sm:'1'}}><FaTwitter color='#05C3DD' /></Box>
                            <Box bg={'#0B0B0B'} boxShadow={'4px 4px 13px rgba(54, 219, 241, 0.3)'} border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={{base:'4', sm:'1'}}><FaInstagram color='#05C3DD' /></Box>
                            <Box bg={'#0B0B0B'} boxShadow={'4px 4px 13px rgba(54, 219, 241, 0.3)'} border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={{base:'4', sm:'1'}}><FaFacebookF color='#05C3DD' /></Box>
                            <Box bg={'#0B0B0B'} boxShadow={'4px 4px 13px rgba(54, 219, 241, 0.3)'} border={' 0.5px solid rgba(54, 219, 241, 0.3)'} borderRadius={'6px'} p={'1.5'} mr={{base:'4', sm:'1'}}> <FaYoutube color='#05C3DD' /></Box>
                    </Box>
                   </Box>
                    
                    <Box w={{base:'100%', sm:'50%'}} py={{base:'10'}}>
                        <Box display={{base:'block', sm:'flex'}} justifyContent={{base:'center', sm:'end'}}>
                            <Box>
                            <Heading fontSize={{base:'l', sm:'3xl'}}>Ready To Begin ?</Heading>
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
                                    w={{base:'100%', sm:'220px'}}
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
                                    w={{base:'100%', sm:'220px'}}
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