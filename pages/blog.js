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
    Textarea,
    Divider 
  } 
from '@chakra-ui/react'
import Image from 'next/image'
import { MdPlayCircleFilled } from "react-icons/md"
import BlogHeader1 from '../public/Rectangle 1545.svg'
import BlogHeader2 from '../public/Rectangle 1566.svg'
import BlogHeader3 from '../public/Rectangle 1568.svg'
import BlogHeader4 from '../public/Rectangle 1570.svg'
import Layout from '../components/layout'


const BLog = () => {
  return (
    <div>
        <Box px={{base:'4'}} p={{sm:'110px'}} mt={{sm:'-100px', base:'-100px'}} bg={'#F6F6F6'} h={{base:'276px',sm:'250px'}} >
        <Box pt={{base:'150px', sm:'0'}}>
            <Box mt={{sm:'30px'}} pb={{sm:'20px'}}>
                <Heading fontSize={{base:'xl', sm:'4xl'}} fontWeight={{sm:'semibold', base:'bold'}}>Sunglo Blog</Heading>
                <Text fontSize={{base:'xs', sm:'md'}} fontWeight={{sm:'normal'}} my={'10px'}>Stay up to date with the latest stories and commentary brought to you by Sunglo, 
                    the world's leading solar investment <span>company</span></Text>
            </Box>
        </Box>
        </Box>

       <Box  px={{sm:'110px', base:'2'}}>
       <Box>
            <Box display={{sm:'flex'}} py={{sm:'40px', base:'20px'}} justifyContent={{sm:'space-between'}}>
                <Box w={{sm:'45%'}} pos={'relative'}>
                    <Box>
                    <div className='BlogplayIcon'  
                        bg={'red'} 
                        variant='solid'
                        ><MdPlayCircleFilled color='red' size={{sm:'52px', base:'30px'}}/>
                    </div>
                    </Box>
                    <Image src={BlogHeader1} alt = 'BlogHeader1' />
                </Box>
                <Box w={{sm:'50%'}} display={'flex'} alignItems={'center'}>
                  <Box>
                  <Heading fontSize={{base:'2xl', sm:'4xl'}} my={{sm:'20px', base:'16px'}} w={{sm:'70%', base:'77%'}} fontWeight={'semibold'}>The easy way to own your share</Heading>
                    <Text color={'gray'} lineHeight={{sm:'30px'}} my={{sm:'20px', base:'5px'}} fontSize={{base:'xs', sm:'md'}} >
                    Income-producing power plants across Africa Sunglo is an exclusive peer to peer leasing platform 
                    to purchase and own your share of an income-producing solar plant, right from your mobile phone 
                    or computer.
                    </Text>
                    <Text fontSize={{base:'sm'}} fontWeight={{sm:'semibold', base:'bold'}} my={{sm:'20px', base:'20px'}}>2022-04-12</Text>
                  </Box>
                </Box>
            </Box>

        </Box>

        <Box py={{sm:'8',base:'5'}}>
        <Divider orientation='horizontal' />
        </Box>

        <Box my={{sm:'20px'}} pb={{sm:'20px', base:'70px'}} >
            <Box display={{sm:'flex'}} justifyContent={'space-around'} gap={6}>
                <Box mb={{base:'40px', sm:'0'}}>
                <Image src={BlogHeader2} alt = 'BlogHeader1' height={500} width={500}/>
                <Box>
                  <Heading my={{sm:'20px', base:'10px'}} w={{base:'89%', sm:'100%'}} fontSize={{sm:'xl'}} fontWeight={'semibold'}>The easy way to own your share The easy way to own your share</Heading>
                    <Text color={'gray'} lineHeight={{sm:'30px'}} fontSize={{base:'xs', sm:'md'}}>
                        The easy way to own your share The easy way to own your share The easy way to own your share
                         The easy way to own your share.
                    </Text>
                    <Text fontSize={{base:'sm', sm:'md'}} fontWeight={{sm:'semibold', base:'bold'}} my={{sm:'20px', base:'10px'}}>2022-04-12</Text>
                  </Box>
                </Box>
                <Box mb={{base:'40px', sm:'0'}}>
                <Image src={BlogHeader4} alt = 'BlogHeader1' height={500} width={500}/>
                <Box>
                  <Heading my={{sm:'20px', base:'10px'}} w={{base:'89%', sm:'100%'}} fontSize={{sm:'xl'}} fontWeight={'semibold'}>The easy way to own your share The easy way to own your share</Heading>
                    <Text color={'gray'} lineHeight={{sm:'30px'}} fontSize={{base:'xs', sm:'md'}}>
                        The easy way to own your share The easy way to own your share The easy way to own your share
                         The easy way to own your share.
                    </Text>
                    <Text fontSize={{base:'sm', sm:'md'}} fontWeight={{sm:'semibold', base:'bold'}} my={{sm:'20px', base:'10px'}}>2022-04-12</Text>
                  </Box>
                </Box>
                <Box mb={{base:'40px', sm:'0'}}>
                <Image src={BlogHeader3} alt = 'BlogHeader1' height={500} width={500}/>
                <Box>
                  <Heading my={{sm:'20px', base:'10px'}} w={{base:'89%', sm:'100%'}} fontSize={{sm:'xl'}} fontWeight={'semibold'}>The easy way to own your share The easy way to own your share</Heading>
                    <Text color={'gray'} lineHeight={{sm:'30px'}} fontSize={{base:'xs', sm:'md'}}>
                        The easy way to own your share The easy way to own your share The easy way to own your share
                         The easy way to own your share.
                    </Text>
                    <Text fontSize={{base:'sm', sm:'md'}} fontWeight={{sm:'semibold', base:'bold'}} my={{sm:'20px', base:'10px'}}>2022-04-12</Text>
                  </Box>
                </Box>
            </Box>
        </Box>
        <Box pb={{sm:'44'}} display={{base:'none', sm:'block'}}>
            <Box display={{sm:'flex'}} justifyContent={'space-around'} gap={6}>
                <Box mb={{base:'40px', sm:'0'}}>
                <Image src={BlogHeader2} alt = 'BlogHeader1' height={500} width={500}/>
                <Box>
                  <Heading my={{sm:'20px', base:'10px'}} w={{base:'89%', sm:'100%'}} fontSize={{sm:'xl'}} fontWeight={'semibold'}>The easy way to own your share The easy way to own your share</Heading>
                    <Text color={'gray'} lineHeight={{sm:'30px'}} fontSize={{base:'xs', sm:'md'}}>
                        The easy way to own your share The easy way to own your share The easy way to own your share
                         The easy way to own your share.
                    </Text>
                    <Text fontSize={{base:'sm', sm:'md'}} fontWeight={{sm:'semibold', base:'bold'}} my={{sm:'20px', base:'10px'}}>2022-04-12</Text>
                  </Box>
                </Box>
                <Box mb={{base:'40px', sm:'0'}}>
                <Image src={BlogHeader3} alt = 'BlogHeader1' height={500} width={500}/>
                <Box>
                  <Heading my={{sm:'20px', base:'10px'}} w={{base:'89%', sm:'100%'}} fontSize={{sm:'xl'}} fontWeight={'semibold'}>The easy way to own your share The easy way to own your share</Heading>
                    <Text color={'gray'} lineHeight={{sm:'30px'}} fontSize={{base:'xs', sm:'md'}}>
                        The easy way to own your share The easy way to own your share The easy way to own your share
                         The easy way to own your share.
                    </Text>
                    <Text fontSize={{base:'sm', sm:'md'}} fontWeight={{sm:'semibold', base:'bold'}} my={{sm:'20px', base:'10px'}}>2022-04-12</Text>
                  </Box>
                </Box>
                <Box mb={{base:'40px', sm:'0'}}>
                <Image src={BlogHeader4} alt = 'BlogHeader1' height={500} width={500}/>
                <Box>
                  <Heading my={{sm:'20px', base:'10px'}} w={{base:'89%', sm:'100%'}} fontSize={{sm:'xl'}} fontWeight={'semibold'}>The easy way to own your share The easy way to own your share</Heading>
                    <Text color={'gray'} lineHeight={{sm:'30px'}} fontSize={{base:'xs', sm:'md'}}>
                        The easy way to own your share The easy way to own your share The easy way to own your share
                         The easy way to own your share.
                    </Text>
                    <Text fontSize={{base:'sm', sm:'md'}} fontWeight={{sm:'semibold', base:'bold'}} my={{sm:'20px', base:'10px'}}>2022-04-12</Text>
                  </Box>
                </Box>
            </Box>
        </Box>
       </Box>
    </div>
  )
}

BLog.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}
export default BLog
