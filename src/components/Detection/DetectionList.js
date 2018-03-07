import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import DetectionIndicator from './DetectionIndicator'
import { Body, Card, CardItem, Text, Button, View } from 'native-base'

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: 150,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  cardItem: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingTop: 0,
    paddingBottom: 0,
    height: 30,
    alignSelf: null,
  },
  answerText: {
    color: 'black',
  },
  potato: {
    flex: 1,
    color: 'white',
    fontSize: 15,
  },
  no: {
    backgroundColor: '#D42B40',
    borderRadius: 15,
    padding: 0,
    height: 30,
    alignSelf: null,
    flex: 1,
  },
  noText: {
    fontSize: 8,
  },
  yes: {
    backgroundColor: '#6AB616',
    borderRadius: 15,
    padding: 0,
    height: 30,
    alignSelf: null,
    flex: 1,
  },
  yesText: {
    fontSize: 8,
  },
})

export default class DetectionList extends React.Component {
  render() {
    for (const data of this.props.tensorflowDatas) {
      if (data.answered == true) {
        setTimeout(() => {
          data.finished = true
          this.forceUpdate()
        }, 2000)
      }
    }
    return (
      <Fragment>
        {this.props.tensorflowDatas.map((data, key) => (
          <Fragment key={key}>
            <DetectionIndicator
              indicatorStyle={{
                top: data.y0 + (data.y1 - data.y0) / 2,
                left: data.x0 + (data.x1 - data.x0) / 2,
              }}
              label={data.label}
              probability={data.probability}
            />
            {data.probability < 0.9 && !data.finished ? (
              <Card
                style={[
                  styles.card,
                  {
                    top: data.y0 + (data.y1 - data.y0) / 2 + 50,
                    left: data.x0 + (data.x1 - data.x0) / 2 - 50,
                  },
                ]}
              >
                <CardItem style={styles.cardItem}>
                  {data.answered ? (
                    <Body style={styles.body}>
                      <Text style={styles.potato}>Got it,THANKS !</Text>
                    </Body>
                  ) : (
                    <Body style={styles.body}>
                      <Text style={styles.potato}>Is that a potato ?</Text>

                      {data.answer ? (
                        <View style={{ flexDirection: 'row' }}>
                          <Button
                            rounded
                            style={styles.yes}
                            onPress={() => {
                              data.answered = true
                              this.forceUpdate()
                            }}
                          >
                            <Text style={styles.yesText}>Yep !</Text>
                          </Button>
                          <Button
                            rounded
                            style={styles.no}
                            onPress={() => {
                              data.answered = true
                              this.forceUpdate()
                            }}
                          >
                            <Text style={styles.noText}>Nope !</Text>
                          </Button>
                        </View>
                      ) : (
                        <Button
                          style={styles.answer}
                          onPress={() => {
                            data.answer = true
                            this.forceUpdate()
                          }}
                        >
                          <Text style={styles.answerText}>Answer !</Text>
                        </Button>
                      )}
                    </Body>
                  )}
                </CardItem>
              </Card>
            ) : null}
          </Fragment>
        ))}
      </Fragment>
    )
  }
}

DetectionList.propTypes = {
  tensorflowDatas: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      probability: PropTypes.number,
      x0: PropTypes.number,
      x1: PropTypes.number,
      y0: PropTypes.number,
      y1: PropTypes.number,
    })
  ),
}
