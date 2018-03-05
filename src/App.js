import {
  Body,
  Container,
  Header,
  Left,
  Right,
  StyleProvider,
  Title,
} from 'native-base'
import React from 'react'
import * as tensorflow from './services/tensorflow'
import theme from './theme'

tensorflow.imageclassifier()

const App = () => (
  <StyleProvider style={theme}>
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Hackaetis</Title>
        </Body>
        <Right />
      </Header>
    </Container>
  </StyleProvider>
)

export default App
