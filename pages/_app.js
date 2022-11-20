import '../styles/globals.css'
import Layout from '../components/layout'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
  // return(
  //   <ChakraProvider>
  //     <Layout>
  //       <Component {...pageProps} />
  //     </Layout>
  //  </ChakraProvider>
  // )
}

export default MyApp
