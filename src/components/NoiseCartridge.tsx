import * as React from "react"
import ".././Style/components/NoiseCartridge.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    Text,
    Grid,
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    GridItem
} from "@chakra-ui/react"

interface NoiseCartridgeProps {
    NoiseName: string;
    NoiseLogo: any;
    NoiseAudio?: any;
}

export const NoiseCartridge : React.FC<NoiseCartridgeProps> = ({ NoiseName, NoiseLogo, NoiseAudio }) => {
    var NoiseAudioNode = new Audio(NoiseAudio);
    NoiseAudioNode.loop = true;

    const playPause = (val: number) => {
        let volume = val;
        if(val === 0.0) {
            NoiseAudioNode.pause();
            NoiseAudioNode.currentTime = 0;
        } else {
            volume ? NoiseAudioNode.play() : NoiseAudioNode.pause();
            NoiseAudioNode.volume = val;
        }
    };

    return (
        <Box p={5} shadow='md' mt={5} borderWidth='1px' >
            <Grid
                templateAreas={`
                  "logo text"
                  "logo slider"
                `}
                gridTemplateColumns={'20% 80%'}
                gap='2'
                fontWeight='bold'>
                <GridItem area={'logo'}>
                    <FontAwesomeIcon icon={NoiseLogo} className="NoiseLogo" />
                </GridItem>
                <GridItem area={'text'}>
                    <Text textAlign={['left']} >{NoiseName}</Text>
                </GridItem>
                <GridItem area={'slider'}>
                    <Slider
                    aria-label='slider-ex-1'
                    defaultValue={0.0}
                    min={0.0}
                    max={1.0}
                    step={0.1}
                    onChangeEnd={(val) => playPause(val)} >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </GridItem>
            </Grid>
        </Box>
    )
}
