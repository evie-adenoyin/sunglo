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
import Layout from '../components/layout'


function HomePage() {
  return (
    <div className='HomePage'>

      {/* Header  */}
      <SimpleGrid columns={{base:1, sm:2}} spacing={5} bg='#F6F6F6' py={''}>
      <Box display={{base:'block', sm:"flex"}} alignItems="center" bg='white' height={{base:'10px', sm:'549px'}} px={{base:'0', sm:'20'}}>
       <Box p={'3'}>
       <Box bg='white' display={{base:'block', sm:'none'}} height={'450px'}>
        <Image  
        src={HeaderImg} 
        alt="Picture of the author"
        priority={'true'}
        />
        <div className='playIcon'  
        bg={'red'} 
        variant='solid'
        ><MdPlayCircleFilled color='red' size='52px'/></div>
      </Box>
        <div className='HeaderText'>
        <Heading fontWeight={'semibold'} textAlign={{base:'center', sm:'start'}} mt={{base:'-32'}} size={{base:'xl', sm:'2xl'}} >Conserve for the Generations to <span>come</span></Heading>
        <Text py={'4'} textAlign={{base:'center', sm:'start'}} >Invest in low risk, high impact solar energy projects and earn rental income for up to 20years. </Text>     
        </div>
       <ButtonGroup variant='solid' spacing='6' pt={'6'} display={{base:'flex'}} justifyContent={{base:"center", sm:'start'}}>
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



      {/* main  */}
      {/* Section 1  */}
      <div className='Section1'>
        <Heading fontWeight={'semibold'} size={{base:'xl',sm:'2xl'}}><Center>Why Sunglo</Center></Heading>
        <Center mt={'6'} px={{base:'20px', sm:'250px'}} fontSize={{base:'sm',sm:'md'}}>Enjoy the benefits of investing in a high-quality solar project.
           Purchase a portfolio plan with a minimum purchase of one kilo-watt. </Center>
       <div className="WhyBullets">
        <SimpleGrid columns={{base:1, sm:2}} spacing={10}>
          <Box bg={'white'} py={{base:'20px'}} px={{base:'2', sm:'10'}} borderRadius={'10px'} boxShadow='4px 4px 10px rgba(54, 219, 241, 0.15)'>
          <Box mx={{base:'42',sm:'130px'}}>
              <Image  src={why1} alt="Picture of the author"/>
          </Box>
            <Heading my={'20px'} fontWeight={'semibold'} fontSize={{base:'l',sm:'2xl'}}>Earn with  purpose</Heading>
            <Text fontSize={{base:'sm',sm:'md'}}>Just like the way you purchase real estate you can purchase solar cells then lease them out to schools, businesses, communities in an emerging economy.</Text>
          </Box>
          <Box  bg={'white'} py={{base:'20px'}} px={{base:'2', sm:'10'}} borderRadius={'10px'} boxShadow=' -4px 4px 10px rgba(54, 219, 241, 0.15);'>
              <Heading mt={'40px'} fontWeight={'semibold'} fontSize={{base:'l',sm:'2xl'}}>Energy Asset Diversification</Heading>
              <Text mt={'30px'} fontSize={{base:'sm',sm:'md'}}>You can diversify your solar asset portfolio across different industries to increase your impact and earn more rental income while balancing your risk portfolio.</Text>
              <Box mx={{base:'42',sm:'130px'}} mt={'80px'}>
              <Image  src={why2} alt="Picture of the author"/>
              </Box>
            </Box>
            <Box bg={'white'} py={{base:'20px'}} px={{base:'2', sm:'10'}} borderRadius={'10px'} boxShadow='4px 4px 10px rgba(54, 219, 241, 0.15)'>
            <Box mx={{base:'42',sm:'130px'}} mt={'20px'}>
              <Image  src={why3} alt="Picture of the author"/>
              </Box>
            <Heading mt={'40px'} fontWeight={'semibold'} fontSize={{base:'l',sm:'2xl'}}>No Volatility</Heading>
            <Text mt={'38px'} fontSize={{base:'sm',sm:'md'}}>Unlike Stocks, Crypto, ETFs. Investing in solar projects has no market volatility, We identify empty roof spaces of high impact commercial energy consumers and lease out your solar cells 
              at a fixed rental income rate. These businesses enjoy the privilege of lowering their electricity bill while you earn a fixed monthly rental return. </Text>
          </Box>
          <Box bg={'white'} py={{base:'20px'}} px={{base:'2', sm:'10'}} borderRadius={'10px'} boxShadow=' -4px 4px 10px rgba(54, 219, 241, 0.15);'>
              <Heading my={'20px'} fontWeight={'semibold'} fontSize={{base:'l',sm:'2xl'}}>Best-In-Class Solar Projects</Heading>
              <Text fontSize={{base:'sm',sm:'md'}}>All the Solar Project options listed on Sunglo, are carefully screened and vetted, managed by energy professionals and fund managers. All the diverse energy investments 
                are managed by a third-party custodian structure and are fully insured with asset warranty from original equipment manufacturers. </Text>
                <Box mx={{base:'42',sm:'130px'}}>
              <Image  src={why4} alt="Picture of the author"/>
              </Box>
            </Box>
        </SimpleGrid>
       </div>
       </div>


         {/* Section 2  */}
       <div className="Section2">
       <Heading mb={{base:'70px', sm:'100px'}} fontSize={{base:'l', sm:'xl'}}>Invest on the go. Anywhere, anytime...</Heading>
       <div>
       <SimpleGrid columns={{base:1, sm:2}} spacing={5}>
          <Box px={{base:'30px'}}>
            <Image  src={mobiledesktop} alt="Picture of the author"/>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
           <Box>
           <Heading mb={'15px'} mt={{base:'10'}} fontSize={{base:'xl', sm:'3xl'}}>The easy way to own your share</Heading>
            <Text  mb={'15px'} fontSize={{base:'sm',sm:'md'}}>Income-producing power plants across Africa Sunglo is an exclusive peer 
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
        <Center mt={{base:'80px', sm:'150px'}} mb={{base:'30px', sm:'70px'}}><Heading fontSize={{base:'xl', sm:'3xl'}}>How To Invest</Heading></Center>
        <Heading mb={'10px'} fontSize={{base:'sm', sm:'3xl'}}>Put Your Money to work while doing good</Heading>
        <Text fontSize={{base:'sm',sm:'md'}}>Join a global community from all corners of the world that's solar powering the planet and 
          creating a sustainable energy future.</Text>

      <div>
      <Box display={'flex'} mt={'35px'}>
        <Box borderRadius={{base:'6px', sm:'12px'}} w={{base:'40px', sm:'50px'}} h={{base:'60px', sm:'50px'}} bg={'#ECECEC'} mt={'10px'}></Box>
        <Box ml='18px'> 
          <Heading fontSize={{base:'l',sm:'2xl'}}>SignUp</Heading>
          <Text w={{base:'100%', sm:'400px'}} my={{base:'10px',sm:'15px'}} fontSize={{base:'sm', sm:'md'}}>Register to become a member of the Sunglo Impact Investing community.</Text>
          </Box>
       </Box>
       <Box display={'flex'} mt={'35px'}>
        <Box borderRadius={{base:'6px', sm:'12px'}} w={{base:'40px', sm:'50px'}} h={{base:'60px', sm:'50px'}} bg={'#ECECEC'} mt={'10px'}></Box>
        <Box ml='18px'> 
          <Heading fontSize={{base:'l',sm:'2xl'}}>Discover</Heading>
          <Text w={{base:'100%', sm:'400px'}} my={{base:'10px',sm:'15px'}}fontSize={{base:'sm', sm:'md'}}>Discover new and impactful solar project opportunities across multiple industries.</Text>
          </Box>
       </Box>
       <Box display={'flex'} mt={'35px'}>
        <Box borderRadius={{base:'6px', sm:'12px'}} w={{base:'40px', sm:'50px'}} h={{base:'60px', sm:'50px'}} bg={'#ECECEC'} mt={'10px'}></Box>
        <Box ml='18px'> 
          <Heading fontSize={{base:'l',sm:'2xl'}}>Invest in Solar Cells</Heading>
          <Text w={{base:'100%', sm:'400px'}} my={{base:'10px',sm:'15px'}}fontSize={{base:'sm', sm:'md'}}>Purchase and lease out your solar cell and start earning from the sun. </Text>
          </Box>
       </Box>
      </div>

       <div>
       <Center mt={'100px'} mb={'50px'}><Heading fontSize={{base:'xl',sm:'3xl'}}>Featured Project</Heading></Center>
       <div className='featured'>
        {/* <Image  src={Panels} alt="Picture of the author" /> */}
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
      <Center mt={{base:'10px', sm:'50px'}}><Text fontWeight={'semibold'} fontSize={{base:'sm', sm:'3xl'}} textAlign={'center'}>We ensure your Solar Asset  is well  protected</Text></Center>
       <Center mt={'10px'} px={{base:'6px', sm:'85px'}} w={{base:'100%'}} textAlign={{base:'center'}} fontSize={{base:'sm', sm:'xl'}}>We follow a transparent and simplified structure that ensures solar asset
        ownership is managed and protected by our engineering, technical and institutional partners that include:
        </Center>
      </div>
      <div>
        <Box display= {{base:'block', sm:'flex'}} justifyContent={'center'} mt={{base:'30px', sm:'35px'}}>
          <Box mx={'5'} my={{base:'20px'}} px={{base:'10px', sm:'50px'}} py={{base:'18px', sm:'19px'}} variant='outline' border={'1px'} borderColor={'#05C3DD'} borderRadius={'11'}>
          <Text textAlign={'center'} fontWeight={'semibold'} fontSize={{base:'xs', sm:'2xl'}}>An SEC licensed trustee</Text>
          </Box>
          <Box mx={'5'} my={{base:'20px'}} px={{base:'10px', sm:'50px'}} py={{base:'18px', sm:'19px'}} variant='outline' border={'1px'} borderColor={'#05C3DD'} borderRadius={'12px'}>
          <Text textAlign={'center'} fontWeight={'semibold'} fontSize={{base:'xs', sm:'2xl'}}>Strong Technology Partners</Text>
          </Box>
        </Box>
        <Box display= {{base:'block', sm:'flex'}} justifyContent={'center'} mt={{base:'12px', sm:'-10px'}}>
          <Box mx={'5'} my={{base:'20px'}} px={{base:'10px', sm:'50px'}} py={{base:'18px', sm:'19px'}} variant='outline' border={'1px'} borderColor={'#05C3DD'} borderRadius={'11'}>
          <Text textAlign={'center'} fontWeight={'semibold'} fontSize={{base:'xs', sm:'2xl'}}>Experienced solar energy developers</Text>
          </Box>
          <Box mx={'5'} my={{base:'20px'}} px={{base:'10px', sm:'50px'}} py={{base:'18px', sm:'19px'}} variant='outline' border={'1px'} borderColor={'#05C3DD'} borderRadius={'12px'}>
          <Text textAlign={'center'} fontWeight={'semibold'} fontSize={{base:'xs', sm:'2xl'}}>A professional fund  manager</Text>
          </Box>
        </Box>
      </div>

      <div>
        <Box display= {{base:'block', sm:'flex'}} mt={{base:'100px', sm:'200px'}}>
          <Box w={{base:'100%', sm:'55%'}}>
          <Box mt={{base: '20px', sm:'-40px'}} display={{base:'block',sm:'none'}}>
            <Image  src={solarAsset} alt="Picture of the author" height={'400'} width={'1000'} />
          </Box>
          <Heading w={{base:'83%', sm:'85%'}} mb={'10px'} fontSize={{base:'l', sm:'3xl'}} pr={{base:'5', sm:'10'}}>We ensure your Solar Asset  is well  protected</Heading>
          <Text w={{base:'100%', sm:'80%'}} fontSize={{base:'sm', sm:'md'}}>We follow a transparent and simplified structure that ensures solar asset ownership is managed and protected by our engineering, 
            technical and institutional partners that include:</Text>
            <Button
              mt={'20px'}
              px='40px'
              borderRadius='12px'
              fontSize={{base:'xs', sm:'13px'}}
              fontWeight='semibold'
              bg='#01FFFF'
              color='#4b4f56'
              boxShadow='9px 23px 34px rgba(5, 195, 221, 0.31)'
              >Get Started</Button>
          </Box>
          <Box mt={{base: '20px', sm:'-120px'}} display={{base:'none', sm:'block'}}>
            <Image  src={solarAsset} alt="Picture of the author" height={'400'} width={'1000'} />
          </Box>
        </Box>
        <Box display={{base:'block', sm:'flex'}} mt={{base:'50px',sm:'200px'}}>
          <Box  mt={{base: '0', sm:'-70px'}}>
              <Image  src={Bankgrade} alt="Picture of the author" height={'400'} width={'1000'} />
          </Box>
          <Box mt={'20px'}>
          <Heading mb={'10px'} fontSize={{base:'l', sm:'3xl'}}>Bank-grade Security</Heading>
          <Text w={{base:'100%', sm:'392'}} fontSize={{base:'sm', sm:'md'}}>Our payment processors are PCI-DSS compliant to ensure the security
           of your data electronically. All cards and bank data are encrypted to prevent unauthorized 
           access to sensitive information.</Text>
            <Button
              mt={'20px'}
              px='40px'
              borderRadius='12px'
              fontSize={{base:'xs', sm:'13px'}}
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


HomePage.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}


export default HomePage

