import { Container, StyleProvider } from 'native-base'
import React from 'react'
import * as tensorflow from './services/tensorflow'
import theme from './theme'
import ObjectSelector from './components/ObjectSelector'

tensorflow.imageclassifier()

const App = () => (
  <StyleProvider style={theme}>
    <Container>
      <ObjectSelector />
    </Container>
  </StyleProvider>
)

export default App
