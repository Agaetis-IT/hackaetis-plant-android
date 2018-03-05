import {
  Body,
  Container,
  Header,
  Left,
  Right,
  StyleProvider,
  Title
} from "native-base";
import React from "react";
import theme from "./theme";

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
);

export default App;
