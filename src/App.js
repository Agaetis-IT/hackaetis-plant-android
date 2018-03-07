import React from 'react'
import * as tensorflow from './services/tensorflow'
import { StackNavigator } from 'react-navigation'
import { StyleProvider } from 'native-base'
import theme from './theme'

import Detection from './components/Detection/Detection'
import Home from './components/Home/Home'

tensorflow.imageclassifier()

const RootStack = StackNavigator(
  {
    Home: { screen: Home },
    Detection: { screen: Detection },
  },
  {
    initialRouteName: 'Home',
  }
)

const App = () => (
  <StyleProvider style={theme}>
    <RootStack />
  </StyleProvider>
)

export default App
