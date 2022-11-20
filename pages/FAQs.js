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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } 
from '@chakra-ui/react'
import Layout from '../components/layout'




const FAQs = () => {
    const DisplayGrid = {base:'block', sm:'flex'}
    const AlignItems = {base:'center'}
    const HeaderFontSize = {base:'xl',sm:'3xl'}
    const HeaderFontWeight = 'semibold'
    const TextFontSize = {base:'sm',sm:'md'}
  return (
    <div>
       <Box textAlign={'center'} w={{base:'100%'}} py={{base:'70px',sm:'100px'}}>
       <Box>
            <Box>
                <Heading fontSize={HeaderFontSize}>Frequently Asked Qustions</Heading>
                <Text fontSize={TextFontSize} my={'4'}>Have questions? We are here to help.</Text>
            </Box>
        </Box>

        <Box display={DisplayGrid} justifyContent={'center'} my={{base:'60px',sm:'90px'}} >
            <Accordion  w={{base:'100%', sm:'65%'}} px={{base:'4px'}}>

            <AccordionItem >

            <h2>
            <AccordionButton>
            <Box flex='1' fontWeight={'semibold'} textAlign='left'>
            What is Sunglo 
            </Box>
            <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign='left' fontSize={{base:'sm', sm:'md'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
            </AccordionItem>

            <AccordionItem >

            <h2>
            <AccordionButton>
            <Box flex='1' fontWeight={'semibold'} textAlign='left'>
            How does Sunglo work?
            </Box>
            <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign='left' fontSize={{base:'sm', sm:'md'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
            </AccordionItem>

            <AccordionItem >

            <h2>
            <AccordionButton>
            <Box flex='1' fontWeight={'semibold'} textAlign='left'>
            How do i credit my Sunglo wallet
            </Box>
            <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign='left' fontSize={{base:'sm', sm:'md'}}>
            How do i credit my Sunglo wallet How do i credit my Sunglo wallet How do i credit my Sunglo wallet How do i credit my Sunglo wallet
            </AccordionPanel>         
            </AccordionItem>

            <AccordionItem >

            <h2>
            <AccordionButton>
            <Box flex='1' fontWeight={'semibold'} textAlign='left'>
            What is the maximum project i can invest in?
            </Box>
            <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign='left' fontSize={{base:'sm', sm:'md'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
            </AccordionItem>
           
            <AccordionItem >

            <h2>
            <AccordionButton>
            <Box flex='1' fontWeight={'semibold'} textAlign='left'>
            How do i become a sunglo partner
            </Box>
            <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign='left' fontSize={{base:'sm', sm:'md'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
            </AccordionItem>

            </Accordion>
        </Box>

        <Box textAlign={'center'} mb={'20'}>
            <Box>
                <Text my={'5'} fontSize={TextFontSize} color='rgba(11, 11, 11, 0.8)'>Invest in clean energy today....</Text>
                <Button
                    // as='button'
                    px='40px'
                    borderRadius='12px'
                    fontSize='13px'
                    fontWeight='semibold'
                    bg='#01FFFF'
                    color='#4b4f56'
                    boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
                    >Get Started
                </Button>
            </Box>
        </Box>
       </Box>
    </div>
  )
}

FAQs.getLayout = function getLayout(page) {
    return (
      <Layout>{page}</Layout>
    )
  }

export default FAQs
