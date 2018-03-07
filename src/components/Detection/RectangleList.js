import React, { Fragment } from 'react'
import DetectionRectangle from './DetectionRectangle'
import PropTypes from 'prop-types'

const RectangleList = ({ tensorflowDatas }) => (
  <Fragment>
    {tensorflowDatas.map((data, key) => (
      <DetectionRectangle
        key={key}
        rectangleStyle={{
          top: data.y0,
          left: data.x0,
          height: data.y1 - data.y0,
          width: data.x1 - data.x0,
        }}
        label={data.label}
        probability={data.probability}
      />
    ))}
  </Fragment>
)

RectangleList.propTypes = {
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

export default RectangleList
