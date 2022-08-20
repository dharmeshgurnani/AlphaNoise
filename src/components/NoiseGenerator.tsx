import React from "react";
import {Box,VStack,Grid,Heading,useColorModeValue } from "@chakra-ui/react"
import { NoiseCartridge } from "./NoiseCartridge"
import { faCloudShowersHeavy,faThunderstorm,faWind,faDove } from '@fortawesome/free-solid-svg-icons'

// Audio Assets
const rainPath = require('../../src/assets/audio/rain.mp3');
const stormPath = require('../../src/assets/audio/storm.mp3');
const windPath = require('../../src/assets/audio/wind.mp3');
const birdsPath = require('../../src/assets/audio/birds.mp3')

export const NoiseGenerator = () => (
      <Grid p={3} justifyContent="center" borderRadius='20px'>
        <VStack spacing={8} maxW={720}>
          {/* NATURE */}
          <Box p={5} shadow='md' bg={useColorModeValue('gray','dark.200')} borderWidth='0px' borderRadius='20px'>
            <Heading textAlign={['left']} mt={4} >NATURE</Heading>
            <NoiseCartridge NoiseName='Rain' NoiseLogo={faCloudShowersHeavy} NoiseAudio={rainPath} />
            <NoiseCartridge NoiseName='Storm' NoiseLogo={faThunderstorm} NoiseAudio={stormPath} />
            <NoiseCartridge NoiseName='Wind' NoiseLogo={faWind} NoiseAudio={windPath} />
            <NoiseCartridge NoiseName='Birds' NoiseLogo={faDove} NoiseAudio={birdsPath} />
          </Box>
        </VStack>
      </Grid>
);