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
    GridItem 
  } 
from '@chakra-ui/react'
import Layout from '../components/layout'
import { FaMapMarker } from "react-icons/fa";
import NestedLayout from '../components/nestedlayout';




const OpenPositions = () => {
    const DisplayGrid = {base:'block', sm:'flex'}
    const AlignItems = {base:'center'}
    const HeaderFontSize = {base:'xl',sm:'3xl'}
    const HeaderFontWeight = 'semibold'
    const TextFontSize = {base:'sm',sm:'md'}
  return (
    <div>
       <Box textAlign={'center'} w={{base:'100%'}}>
       <Box my={'50px'}>
            <Box>
                <Heading fontSize={HeaderFontSize}>Open Positions</Heading>
                <Text fontSize={TextFontSize}>We would love to have you in the <span>TEAM</span></Text>
            </Box>
        </Box>

        <Box display={DisplayGrid} justifyContent={'center'} my={'60px'} px={{base:4}}>
           <Box w={{base:'100%', sm:'72%'}}>
           <Box  my={'3'}>
               <Box p={'4'} borderRadius={'12'} border={'1px'} borderColor={'rgba(63, 81, 181, 0.3)'}>
               <Box display={{base:'block', sm:'flex'}}  justifyContent={'space-between'} >
                    <Box display={{base:'block', sm:'none'}} mb='2'>
                        <Text fontSize='xs' textAlign='right'> Posted: Thu. 21 Oct, 2021</Text>
                    </Box>
                    <Box mb={{base:'3'}}>
                        <Heading fontSize={{base:'sm',sm:'xl'}} fontWeight='semibold' textAlign={{base:'left'}}>Enterprise Sales Manager</Heading>
                        <Text textAlign={'left'} my={{sm:'3'}} fontSize={{base:'xs',sm:'md'}}>Sunglo</Text>
                    </Box>
                    <Box display={{base:'none', sm:'block'}}>
                        <Text fontSize='xl'> Posted: Thu. 21 Oct, 2021</Text>
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} >
                    <Box mt={'3'}>
                        <Box display={'flex'}><Box mt={{sm:'1'}} mr={{sm:'4'}}><FaMapMarker color='black' /></Box> <Box fontSize={{base:'xs', sm:'md'}} ml={{base:'2'}}>Lagos. Nigeria</Box></Box>
                    </Box>
                    <Box>
                    <Button
                        // mt={'20px'}
                        px={{base:'10px', sm:'40px'}}
                        borderRadius='12px'
                        fontSize={{base:'10px', sm:'13px'}}
                        fontWeight='semibold'
                        bg='#01FFFF'
                        color='#4b4f56'
                        w={{base:'100px', sm:'150px'}}
                        // boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
                        >Apply Now
                    </Button>
                    </Box>
                </Box>
               </Box>
                
           </Box>
           <Box my={'3'}>
               <Box p={'4'} borderRadius={'12'} border={'1px'} borderColor={'rgba(63, 81, 181, 0.3)'}>
               <Box display={{base:'block', sm:'flex'}}  justifyContent={'space-between'} >
                    <Box display={{base:'block', sm:'none'}} mb='2'>
                        <Text fontSize='xs' textAlign='right'> Posted: Thu. 21 Oct, 2021</Text>
                    </Box>
                    <Box mb={{base:'3'}}>
                        <Heading fontSize={{base:'sm',sm:'xl'}} fontWeight='semibold' textAlign={{base:'left'}}>Enterprise Sales Manager</Heading>
                        <Text textAlign={'left'} my={{sm:'3'}} fontSize={{base:'xs',sm:'md'}}>Sunglo</Text>
                    </Box>
                    <Box display={{base:'none', sm:'block'}}>
                        <Text fontSize='xl'> Posted: Thu. 21 Oct, 2021</Text>
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} >
                    <Box mt={'3'}>
                        <Box display={'flex'}><Box mt={{sm:'1'}} mr={{sm:'4'}}><FaMapMarker color='black' /></Box> <Box fontSize={{base:'xs', sm:'md'}} ml={{base:'2'}}>Lagos. Nigeria</Box></Box>
                    </Box>
                    <Box>
                    <Button
                        // mt={'20px'}
                        px={{base:'10px', sm:'40px'}}
                        borderRadius='12px'
                        fontSize={{base:'10px', sm:'13px'}}
                        fontWeight='semibold'
                        bg='#01FFFF'
                        color='#4b4f56'
                        w={{base:'100px', sm:'150px'}}
                        // boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
                        >Apply Now
                    </Button>
                    </Box>
                </Box>
               </Box>
                
           </Box>
           <Box my={'3'}>
               <Box p={'4'} borderRadius={'12'} border={'1px'} borderColor={'rgba(63, 81, 181, 0.3)'}>
               <Box display={{base:'block', sm:'flex'}}  justifyContent={'space-between'} >
                    <Box display={{base:'block', sm:'none'}} mb='2'>
                        <Text fontSize='xs' textAlign='right'> Posted: Thu. 21 Oct, 2021</Text>
                    </Box>
                    <Box mb={{base:'3'}}>
                        <Heading fontSize={{base:'sm',sm:'xl'}} fontWeight='semibold' textAlign={{base:'left'}}>Enterprise Sales Manager</Heading>
                        <Text textAlign={'left'} my={{sm:'3'}} fontSize={{base:'xs',sm:'md'}}>Sunglo</Text>
                    </Box>
                    <Box display={{base:'none', sm:'block'}}>
                        <Text fontSize='xl'> Posted: Thu. 21 Oct, 2021</Text>
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} >
                    <Box mt={'3'}>
                        <Box display={'flex'}><Box mt={{sm:'1'}} mr={{sm:'4'}}><FaMapMarker color='black' /></Box> <Box fontSize={{base:'xs', sm:'md'}} ml={{base:'2'}}>Lagos. Nigeria</Box></Box>
                    </Box>
                    <Box>
                    <Button
                        // mt={'20px'}
                        px={{base:'10px', sm:'40px'}}
                        borderRadius='12px'
                        fontSize={{base:'10px', sm:'13px'}}
                        fontWeight='semibold'
                        bg='#01FFFF'
                        color='#4b4f56'
                        w={{base:'100px', sm:'150px'}}
                        // boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
                        >Apply Now
                    </Button>
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

OpenPositions.getLayout = function getLayout(page) {
    return (
     <Layout>{page}</Layout> 
    )
  }


export default OpenPositions
