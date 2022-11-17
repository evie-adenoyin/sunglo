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
import Image from 'next/image'
import { MdPlayCircleFilled } from "react-icons/md"
import HeaderImg from '../public/Rectangle 1542.png'
import why1 from '../public/why1.png'
import why2 from '../public/why2.png'
import why3 from '../public/why3.png'
import why4 from '../public/why4.png'
import mobiledesktop from '../public/Group 2033.png'
import Panels from '../public/panels.png'
import solarAsset from '../public/man.svg'
import Bankgrade from '../public/5553 1.svg'



function HomePage() {
  return (
    <div className='HomePage'>
      <SimpleGrid columns={{base:1, sm:2}} spacing={5} bg='#F6F6F6'>
      <Box display={{base:'block', sm:"flex"}} alignItems="center" bg='white' height={{base:'200px', sm:'549px'}} px={{base:'0', sm:'20'}}>
       <Box p={'3'}>
       <Box bg='red' display={{base:'block', sm:'none'}} height={'450px'}>
        <Image 
        src={HeaderImg} 
        alt="Picture of the author"
        // width={328}
        // height={253}
        />
        <div className='playIcon'  
        bg={'red'} 
        variant='solid'
        ><MdPlayCircleFilled color='red' size='52px'/></div>
      </Box>
       <Heading fontWeight={'semibold'} size='2xl' textAlign={{base:'center'}}>Conserve for the Generations to <span>come</span></Heading>
        <Text py={'4'} textAlign={{base:'center'}}>Invest in low risk, high impact solar energy projects and earn rental income for up to 20years. </Text>
        <ButtonGroup variant='solid' spacing='6' pt={'6'}>
          <Button
           px='40px'
           borderRadius='12px'
           fontSize='13px'
           fontWeight='semibold'
           bg='black'
           color='#ffffff'
           boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
           >View Available Project</Button>
          <Button
          // as='button'
          px='40px'
          borderRadius='12px'
          fontSize='13px'
          fontWeight='semibold'
          bg='#01FFFF'
          color='#4b4f56'
          boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
          >Get Started</Button>
      </ButtonGroup>
       </Box>
      </Box>
      <Box bg={{base:'white', sm:'#F6F6F6'}} display={{base:'none', sm:'block'}} height={{base:'200px', sm:'533px'}} pl={'4'} pt={'8'}>
        <Image 
        src={HeaderImg} 
        alt="Picture of the author"
        width={550}
        height={500}/>
        <div className='playIcon'  
        bg={'red'} 
        variant='solid'
        
        p={'3'}
        pos='absolute'
        top={'52px'}
        ><MdPlayCircleFilled color='red' size='52px'/></div>
      </Box>
      </SimpleGrid>



      <div className='Section1'>
        <Heading fontWeight={'semibold'} size='2xl'><Center>Why Sunglo</Center></Heading>
        <Text pt={'6'}><Center>Enjoy the benefits of investing in a high-quality solar project.
           Purchase a portfolio plan <br /> with a minimum purchase of one kilo-watt. </Center></Text>
       <div className="WhyBullets">
        <SimpleGrid columns={{base:1, sm:2}} spacing={10}>
          <Box h={'500px'} bg={'white'} p='10' borderRadius={'10px'} boxShadow='4px 4px 10px rgba(54, 219, 241, 0.15)'>
          <Box mx={'130px'}>
              <Image src={why1} />
              </Box>
            <Heading my={'20px'} fontWeight={'semibold'} fontSize={'25px'}>Earn with  purpose</Heading>
            <Text>Just like the way you purchase real estate you can purchase solar cells then lease them out to schools, businesses, communities in an emerging economy.</Text>
          </Box>
          <Box  bg={'white'} p='10' borderRadius={'10px'} boxShadow=' -4px 4px 10px rgba(54, 219, 241, 0.15);'>
              <Heading mt={'40px'} fontWeight={'semibold'} fontSize={'25px'}>Energy Asset Diversification</Heading>
              <Text mt={'30px'}>You can diversify your solar asset portfolio across different industries to increase your impact and earn more rental income while balancing your risk portfolio.</Text>
              <Box mx={'130px'} mt={'80px'}>
              <Image src={why2} />
              </Box>
            </Box>
            <Box h={'500px'} bg={'white'} p='10' borderRadius={'10px'} boxShadow='4px 4px 10px rgba(54, 219, 241, 0.15)'>
            <Box mx={'138px'} mt={'20px'}>
              <Image src={why3} />
              </Box>
            <Heading mt={'40px'} fontWeight={'semibold'} fontSize={'25px'}>No Volatility</Heading>
            <Text mt={'38px'}>Unlike Stocks, Crypto, ETFs. Investing in solar projects has no market volatility, We identify empty roof spaces of high impact commercial energy consumers and lease out your solar cells 
              at a fixed rental income rate. These businesses enjoy the privilege of lowering their electricity bill while you earn a fixed monthly rental return. </Text>
          </Box>
          <Box bg={'white'} p='10' borderRadius={'10px'} boxShadow=' -4px 4px 10px rgba(54, 219, 241, 0.15);'>
              <Heading my={'20px'} fontWeight={'semibold'} fontSize={'25px'}>Best-In-Class Solar Projects</Heading>
              <Text>All the Solar Project options listed on Sunglo, are carefully screened and vetted, managed by energy professionals and fund managers. All the diverse energy investments 
                are managed by a third-party custodian structure and are fully insured with asset warranty from original equipment manufacturers. </Text>
                <Box mx={'130px'}>
              <Image src={why4} />
              </Box>
            </Box>
        </SimpleGrid>
       </div>
       </div>

       <div className="Section2">
       <Heading mb={'100px'} fontSize={'xl'}>Invest on the go. Anywhere, anytime...</Heading>
       <div>
       <SimpleGrid columns={{base:1, sm:2}} spacing={5}>
          <Box>
            <Image src={mobiledesktop} />
          </Box>
          <Box display={'flex'} alignItems={'center'}>
           <Box>
           <Heading mb={'15px'} fontSize={'2xl'}>The easy way to own your share</Heading>
            <Text  mb={'15px'}>Income-producing power plants across Africa Sunglo is an exclusive peer 
              to peer leasing platform to purchase and own your share of an income-producing 
              solar plant, right from your mobile phone or computer.</Text>
              <Button
              // as='button'
              px='40px'
              borderRadius='12px'
              fontSize='13px'
              fontWeight='semibold'
              bg='#01FFFF'
              color='#4b4f56'
              boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
              >Get Started</Button>
           </Box>
          </Box>

        </SimpleGrid>
        
       </div>
        <div>
        <Center mt={'150px'} mb={'70px'}><Heading fontSize={'3xl'}>How To Invest</Heading></Center>
        <Heading mb={'10px'} fontSize={'xl'}>Put Your Money to work while doing good</Heading>
        <Text>Join a global community from all corners of the world that's solar powering the planet and 
          creating a sustainable energy future.</Text>

      <div>
      <Box display={'flex'} mt={'35px'}>
        <Box borderRadius={'12px'} w={{base:'20px', sm:'50px'}} h={'50px'} bg={'#ECECEC'} mt={'10px'}></Box>
        <Box ml={{base:'2px', sm:'20px'}}> 
          <Heading fontSize={'2xl'}>SignUp</Heading>
          <Text w={{base:'100%', sm:'400px'}} my={'15px'}>Register to become a member of the Sunglo Impact Investing community.</Text>
          </Box>
       </Box>
       <Box display={'flex'} mt={'35px'}>
        <Box borderRadius={'12px'} w={{base:'20px', sm:'50px'}} h={'50px'} bg={'#ECECEC'} mt={'10px'}></Box>
        <Box ml={{base:'2px', sm:'20px'}}> 
          <Heading fontSize={'2xl'}>Discover</Heading>
          <Text w={{base:'100%', sm:'400px'}} my={'15px'}>Discover new and impactful solar project opportunities across multiple industries.</Text>
          </Box>
       </Box>
       <Box display={'flex'} mt={'35px'}>
        <Box borderRadius={'12px'} w={{base:'20px', sm:'50px'}} h={'50px'} bg={'#ECECEC'} mt={'10px'}></Box>
        <Box ml={{base:'2px', sm:'20px'}}> 
          <Heading fontSize={'2xl'}>Invest in Solar Cells</Heading>
          <Text w={{base:'100%', sm:'400px'}} my={'15px'}>Purchase and lease out your solar cell and start earning from the sun. </Text>
          </Box>
       </Box>
      </div>

       <div>
       <Center mt={'100px'} mb={'50px'}><Heading fontSize={'3xl'}>Featured Project</Heading></Center>
       <div className='featured'>
        <Image src={Panels} />
        <div className="darktheme">
        <div className='featuredplayIcon'  
          bg={'red'} 
          variant='solid'
          
          p={'3'}
          ><MdPlayCircleFilled color='red' size='52px'/>
        </div>
        </div>
       </div>
       </div>

       <div>
      <div>
      <Center mt={'-200px'}><Heading fontSize={'3xl'}>We ensure your Solar Asset  is well  protected</Heading></Center>
       <Center mt={'10px'}>We follow a transparent and simplified structure that ensures solar asset
        ownership is managed and
        </Center>
        <Center my={'-2px'}>protected by our engineering, technical and institutional partners that include:
        </Center>
      </div>
      <div>
        <Box display= {{base:'block', sm:'flex'}} justifyContent={'center'} mt={'35px'}>
          <Box mx={'5'} px={'50px'} py={'19px'} variant='outline' border={'1px'} borderColor={'#05C3DD'} borderRadius={'11'}>
          <Text>An SEC licensed trustee</Text>
          </Box>
          <Box mx={'5'} px={'50px'} py={'19px'} variant='outline' border={'1px'} borderColor={'#05C3DD'} borderRadius={'12px'}>
          <Text>Strong Technology Partners</Text>
          </Box>
        </Box>
        <Box display= {{base:'block', sm:'flex'}} justifyContent={'center'} mt={'35px'}>
          <Box mx={'5'} px={'50px'} py={'19px'} variant='outline' border={'1px'} borderColor={'#05C3DD'} borderRadius={'11'}>
          <Text>Experienced solar energy developers</Text>
          </Box>
          <Box mx={'5'} px={'50px'} py={'19px'} variant='outline' border={'1px'} borderColor={'#05C3DD'} borderRadius={'12px'}>
          <Text>A professional fund  manager</Text>
          </Box>
        </Box>
      </div>

      <div>
        <Box display= {{base:'block', sm:'flex'}} mt={'300px'}>
          <Box>
          <Heading mb={'10px'} fontSize={'3xl'}>We ensure your Solar <br /> Asset  is well  protected</Heading>
          <Text w={'392px'}>We follow a transparent and simplified structure that ensures solar asset ownership is managed and protected by our engineering, 
            technical and institutional partners that include:</Text>
            <Button
              mt={'20px'}
              px='40px'
              borderRadius='12px'
              fontSize='13px'
              fontWeight='semibold'
              bg='#01FFFF'
              color='#4b4f56'
              boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
              >Get Started</Button>
          </Box>
          <Box mt={{base: '20px', sm:'-40px'}}>
            <Image src={solarAsset} height={'400'} width={'1000'} />
          </Box>
        </Box>
        <Box display={{base:'block', sm:'flex'}} mt={'200px'}>
          <Box  mt={{base: '0', sm:'-70px'}}>
              <Image src={Bankgrade} height={'400'} width={'1000'} />
          </Box>
          <Box mt={'20px'}>
          <Heading mb={'10px'} fontSize={'3xl'}>Bank-grade Security</Heading>
          <Text w={'392px'}>Our payment processors are PCI-DSS compliant to ensure the security
           of your data electronically. All cards and bank data are encrypted to prevent unauthorized 
           access to sensitive information.</Text>
            <Button
              mt={'20px'}
              px='40px'
              borderRadius='12px'
              fontSize='13px'
              fontWeight='semibold'
              bg='#01FFFF'
              color='#4b4f56'
              boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
              >Get Started</Button>
          </Box>      
        </Box>
      </div>
       </div>
        </div>
       </div>
  
    </div>
  )
}

export default HomePage

