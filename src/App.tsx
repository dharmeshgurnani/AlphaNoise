import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Heading,
  GridItem
} from "@chakra-ui/react"
import theme from "./Style/theme"
import Footer from "./components/Footer"
import { NoiseCartridge } from "./components/NoiseCartridge"
import NoiseGenerator from "./components/NoiseGenerator"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {
  faCloudShowersHeavy,
  faThunderstorm,
  faWind,
  faDove
} from '@fortawesome/free-solid-svg-icons'

// Audio Assets
const rainPath = require('../src/assets/audio/rain.mp3');
const stormPath = require('../src/assets/audio/storm.mp3');
const windPath = require('../src/assets/audio/wind.mp3');
const birdsPath = require('../src/assets/audio/birds.mp3')

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box  textAlign="center" borderRadius='20px' fontSize="xl">
      <Grid templateColumns='repeat(3, 1fr)'>
        <GridItem justifySelf="flex-start">
          <NoiseGenerator />
        </GridItem>
        <GridItem w='60vw' justifySelf="flex-center">
          <Heading fontSize={'4vh'} textAlign={['center']} mt={2}>Alpha Noise</Heading>
        </GridItem>
        <GridItem justifySelf="flex-end">
          <ColorModeSwitcher justifySelf="flex-end" />
        </GridItem>
      </Grid>
      <Grid p={3} justifyContent="center" borderRadius='20px'>
        <VStack shadow='md' borderWidth='1px' borderRadius='20px' spacing={8} maxW={720}>
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
