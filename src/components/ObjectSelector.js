import React from 'react'
import { PanResponder, View, Text } from 'react-native'
import Svg, { Rect } from 'react-native-svg'

export default class ObjectSelector extends React.Component {
  constructor(props) {
    super(props)
    this._generatePanHandlers()
  }

  state = {
    test: 'start',
    rectangles: [],
    currentID: 0,
  }

  componentWillReceiveProps(nextProps) {
    this._generatePanHandlers()
  }
  _generatePanHandlers() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: this._startGesture,
      onPanResponderMove: this._onGestureMove,
      onPanResponderRelease: this._onGestureRelease,
    })
  }

  _startGesture = (event, gestureState) => {
    let newRectangles = this.state.rectangles
    let newId =
      newRectangles.length === 0
        ? 0
        : newRectangles[newRectangles.length - 1].id + 1

    newRectangles.push({
      id: this.state.currentID,
      x: gestureState.x0,
      y: gestureState.y0,
      width: '5',
      height: '5',
    })
    this.setState({ rectangles: newRectangles, currentID: newId })
  }

  _onGestureMove = (event, gestureState) => {
    let newRectangles = this.state.rectangles
    newRectangles[this.state.currentID].height = gestureState.dy
    newRectangles[this.state.currentID].width = gestureState.dx
    this.setState({ rectangles: newRectangles })
  }

  _onGestureRelease = (event, gestureState) => {}
  render() {
    return (
      <View style={{ flex: 1 }} {...this._panResponder.panHandlers}>
        <Svg style={{ flex: 1 }}>
          {this.state.rectangles.map(rect => (
            <Rect
              key={rect.id}
              x={rect.x}
              y={rect.y}
              width={rect.width}
              height={rect.height}
              stroke="red"
              strokeWidth="2"
              fill="yellow"
            />
          ))}
        </Svg>
        <Text>{this.state.test}</Text>
      </View>
    )
  }
}
