import Reactotron from 'reactotron-react-native'

if (__DEV__) {
  Reactotron.configure()
    .useReactNative()
    .connect()

  Reactotron.clear()
  // eslint-disable-next-line no-console
  console.tron = Reactotron
} else {
  // eslint-disable-next-line no-console
  console.tron = {
    log: () => false,
    warn: () => false,
    error: () => false,
    display: () => false,
    image: () => false,
  }
}
