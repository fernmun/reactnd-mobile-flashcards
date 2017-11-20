import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import AnimateNumber from 'react-native-animate-number'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers.js'

const QuizResult = ({ correct, total }) => {
  const result = correct * 100 / total

  clearLocalNotification()
    .then(setLocalNotification)

  return (
    <View>
      <Text>
        Result:
        <AnimateNumber
          value={result}
          interval={5}
          formatter={(score) => `${score.toFixed(2)} %`}
        />
      </Text>
    </View>
  )
}

QuizResult.propTypes = {
  correct: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default QuizResult
