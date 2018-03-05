import { Container, StyleProvider } from 'native-base'
import React from 'react'
import * as tensorflow from './services/tensorflow'
import theme from './theme'
import Camera from './components/Camera'
import DetectionSquare from './components/DetectionSquare'

tensorflow.imageclassifier()

const App = () => (
  <StyleProvider style={theme}>
    <Container>
      <Camera />
      <DetectionSquare top={100} left={200} height={80} width={120} />
    </Container>
  </StyleProvider>
)

export default App
