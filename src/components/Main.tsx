import * as React from "react"
import { Box,useColorModeValue } from "@chakra-ui/react"
import { NoiseGenerator } from "./NoiseGenerator"

export const Main = () => (
    <Box textAlign="center" bg={useColorModeValue('light.100','dark.100')} borderRadius='20px' pt={10} fontSize="xl">
      <NoiseGenerator/>
    </Box>
);