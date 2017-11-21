import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import PropTypes from 'prop-types'
import AnimateNumber from 'react-native-animate-number'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers.js'
import { black, pureRed, green, gray } from '../utils/colors'

const QuizResult = ({ correct, total }) => {
  const result = correct * 100 / total

  clearLocalNotification()
    .then(setLocalNotification)

  return (
    <View style={styles.result}>
      <Text h4 style={styles.grayText}>Result</Text>
      <Text h1 style={styles.blackText}>
        <AnimateNumber
          value={result}
          interval={5}
          formatter={(score) => `${score.toFixed(2)} %`}
        />
      </Text>
      <Text h4 style={styles.greenText}>Correct: {correct}</Text>
      <Text h4 style={styles.redText}>Incorrect: {total - correct}</Text>
    </View>
  )
}

QuizResult.propTypes = {
  correct: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  result: {
    marginTop: 80,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  blackText: {
    color: `${black}`
  },
  redText: {
    color: `${pureRed}`
  },
  greenText: {
    color: `${green}`
  },
  grayText: {
    color: `${gray}`
  }
})

export default QuizResult
