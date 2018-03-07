import React from 'react'
import { Container, Button, Text, Content } from 'native-base'
import PropTypes from 'prop-types'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Content>
          <Button onPress={() => navigate('Detection')}>
            <Text>Go to Detection</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
}
