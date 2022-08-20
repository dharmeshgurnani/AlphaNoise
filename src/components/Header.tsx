import {Box,Grid,GridItem,useColorModeValue,Heading} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../ColorModeSwitcher"

export default function Header() {
    return (
        <Box position="fixed" top={0}>
            <Grid display={'none'}>TODO: add status bar</Grid>
            <Grid
                bg={useColorModeValue('gray', 'dark.200')}
                position={'sticky'}
                top={0}
                templateColumns='repeat(2, 1fr)'>
                <GridItem w='60vw' justifySelf="flex-start">
                    <Heading
                        fontSize={'1.7rem'}
                        textAlign={['left']}
                        pl={2}>
                        Alpha Noise
                    </Heading>
                </GridItem>
                <GridItem justifySelf="flex-end">
                    <ColorModeSwitcher justifySelf="flex-end" />
                </GridItem>
            </Grid>
        </Box>
    );
}