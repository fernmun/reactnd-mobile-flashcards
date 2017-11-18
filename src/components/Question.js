import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const Question = ({ question, answer, number }) => {
  return (
    <View>
      <Text>{`Question number ${number}`}</Text>
      <Text>{question}</Text>
      <Text>{answer}</Text>
      <TouchableOpacity>
        <Text>View Answer</Text>
      </TouchableOpacity>
    </View>
  )
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

export default Question;
