import React from 'react'
import PagenotFound from '../public/404.png' 
import Image from 'next/image'
import { Box, Text, Link } from '@chakra-ui/react'


const NotFound = () => {

    const textDecoration = {textDecoration:'none'}
  return (
    <div>
        <Box display={'flex'} justifyContent={'center'} p={'10'}>
            <Box>
            <Image src={PagenotFound} alt='Page not found' width={500}/>
            <Box my={'4'}>
               <Box>
               <Text textAlign={'center'} fontSize={{base:'10px', sm:'13px'}} fontWeight='semibold'>OOPSY..... PAGE NOT FOUND</Text>
               <Box textAlign={'center'} my={'5'}>
               <Link
                       href='/' // mt={'20px'}
                        px='50px'
                        borderRadius='12px'
                        fontSize={{base:'10px', sm:'13px'}}
                        fontWeight='semibold'
                        bg='#01FFFF'
                        color='#4b4f56'
                        py={'2'}
                        w={{base:'100px', sm:'200px'}}
                        boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
                        _hover={textDecoration}
                        >Home
                    </Link>
               </Box>
               </Box>
            </Box>
            </Box>
           
        </Box>
    </div>
  )
}

export default NotFound
