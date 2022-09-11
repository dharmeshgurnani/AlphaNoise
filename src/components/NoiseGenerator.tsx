import React from "react";
import { Box, VStack, Grid, Heading, useColorModeValue } from "@chakra-ui/react"
import { NoiseCartridge } from "./NoiseCartridge"
import { faCloudShowersHeavy, faThunderstorm, faWind, faDove } from '@fortawesome/free-solid-svg-icons'

// Audio Assets
const rainPath = require('../../src/assets/audio/rain.mp3');
const stormPath = require('../../src/assets/audio/storm.mp3');
const windPath = require('../../src/assets/audio/wind.mp3');
const birdsPath = require('../../src/assets/audio/birds.mp3')

export const NoiseGenerator = () => (
  <Grid justifyContent="center" >
    <VStack spacing={8} maxW={720} m={2} px={5} py={10}>
      {/* NATURE */}
      <Box
        p={5}
        pt={"4rem"}
        mt={5}
        shadow='md'
        bg={useColorModeValue('light.300', 'dark.200')}
        borderWidth='0px'
        borderRadius='20px'
        position="relative"
      >
        <Box bg={useColorModeValue("light.200", "")}
          position="absolute"
          w={"100%"}
          top={0}
          left={0}
          borderTopLeftRadius={"20px"}
          borderTopRightRadius={"20px"}
        >
          <Heading
            color={useColorModeValue("light.400", "")}
            textAlign={['left']}
            pt={5} pl={5}
            borderBottom={"2px"}
          >
            NATURE
          </Heading>
        </Box>
        <NoiseCartridge NoiseName='Rain' NoiseLogo={faCloudShowersHeavy} NoiseAudio={rainPath} />
        <NoiseCartridge NoiseName='Storm' NoiseLogo={faThunderstorm} NoiseAudio={stormPath} />
        <NoiseCartridge NoiseName='Wind' NoiseLogo={faWind} NoiseAudio={windPath} />
        <NoiseCartridge NoiseName='Birds' NoiseLogo={faDove} NoiseAudio={birdsPath} />
      </Box>
    </VStack>
  </Grid>
);