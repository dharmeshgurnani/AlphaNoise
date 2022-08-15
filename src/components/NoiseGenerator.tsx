import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from "@chakra-ui/react"

// Import your audio file
const rainPath = require('../assets/audio/rain.mp3');

class NoiseGenerator extends Component {
  // Create state
  state = {
    audio: new Audio(rainPath),
    isPlaying: false,
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;
    isPlaying ? this.state.audio.pause() : this.state.audio.play();
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
        <IconButton
          size="md"
          fontSize="lg"
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={this.playPause}
          icon={<FontAwesomeIcon icon={this.state.isPlaying ? faPause : faPlay} />}
          aria-label={`Switch to mode`}
        />
    );
  }
}

export default NoiseGenerator;