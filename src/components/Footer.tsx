import { Box, Grid, GridItem, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaSatelliteDish, FaToolbox, FaInfo } from "react-icons/fa"

export default function Footer() {
  return (
    <Box position="fixed" bottom={0} zIndex={100} w={'100vw'}>
      <Grid
        bg={useColorModeValue('light.300', 'dark.200')}
        templateColumns='repeat(3, 1fr)'
        padding={'10px'}
        justifyItems={'center'}>
        <GridItem w={'100%'}>
          <IconButton
            fontSize="1.7rem"
            variant="ghost"
            w={'100%'}
            color={useColorModeValue("light.400", "")}
            onClick={() => { }}
            icon={<FaSatelliteDish/>}
            aria-label={`Dashboard`}
          />
        </GridItem>
        <GridItem w={'100%'}>
          <IconButton
            fontSize="1.7rem"
            variant="ghost"
            w={'100%'}
            color={useColorModeValue("light.400", "")}
            onClick={() => { }}
            icon={<FaToolbox/>}
            aria-label={`Settings`}
          />
        </GridItem>
        <GridItem w={'100%'}>
          <IconButton
            fontSize="1.7rem"
            variant="ghost"
            w={'100%'}
            color={useColorModeValue("light.400", "")}
            onClick={() => { }}
            icon={<FaInfo/>}
            aria-label={`About`}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}