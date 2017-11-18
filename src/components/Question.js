import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

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

export default Question;
