import * as React from "react"
import { ChakraProvider} from "@chakra-ui/react"
import theme from "./Style/theme"
import Header from "./components/Header"
import { Main } from "./components/Main"
//import Footer from "./components/Footer"

export const App = () => (
  <ChakraProvider theme={theme} maxH={'100vh'}>
    <Header />
    <Main/>
    {/* <Footer/> */}
  </ChakraProvider>
  );
