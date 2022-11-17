import '../styles/globals.css'
import Layout from '../components/layout'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <Layout className='Layout'>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  )
}

export default MyApp
