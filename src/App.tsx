import * as React from "react"
import { ChakraProvider,Box,VStack,Grid,Heading,useColorModeValue } from "@chakra-ui/react"
import theme from "./Style/theme"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { NoiseCartridge } from "./components/NoiseCartridge"
import { faCloudShowersHeavy,faThunderstorm,faWind,faDove } from '@fortawesome/free-solid-svg-icons'

// Audio Assets
const rainPath = require('../src/assets/audio/rain.mp3');
const stormPath = require('../src/assets/audio/storm.mp3');
const windPath = require('../src/assets/audio/wind.mp3');
const birdsPath = require('../src/assets/audio/birds.mp3')

export const App = () => (
  <ChakraProvider theme={theme} maxH={'100vh'}>
    below
    <Box textAlign="center" bg={useColorModeValue('dark','light')} borderRadius='20px' pt={10} fontSize="xl">
      <Header />
      <Grid p={3} justifyContent="center" borderRadius='20px'>
        <VStack spacing={8} maxW={720}>
          {/* NATURE */}
          <Box p={5} shadow='md' borderWidth='1px' borderRadius='20px'>
            <Heading textAlign={['left']} mt={4} >NATURE</Heading>
            <NoiseCartridge NoiseName='Rain' NoiseLogo={faCloudShowersHeavy} NoiseAudio={rainPath} />
            <NoiseCartridge NoiseName='Storm' NoiseLogo={faThunderstorm} NoiseAudio={stormPath} />
            <NoiseCartridge NoiseName='Wind' NoiseLogo={faWind} NoiseAudio={windPath} />
            <NoiseCartridge NoiseName='Birds' NoiseLogo={faDove} NoiseAudio={birdsPath} />
          </Box>
        </VStack>
      </Grid>
    </Box>
    <Footer/>
  </ChakraProvider>
)
