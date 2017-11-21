import React, { Component } from 'react'
import { View, StyleSheet, Switch } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import { gray } from '../utils/colors'

class Question extends Component {
  state = {
    showAnswer: false
  }

  handleToggleAnswer = () => {
    this.setState((state) => ({
      showAnswer: !state.showAnswer
    }))
  }

  render() {
    const { number, question, answer } = this.props
    const { showAnswer } = this.state

    return (
      <Card>
        <View style={styles.showAnswer}>
          <Switch
            value={showAnswer}
            onValueChange={this.handleToggleAnswer}
          />
          <Text style={styles.text} h6>Show Answer</Text>
        </View>
        <Text h6 style={styles.text}>{`Question: ${number}`}</Text>
        <Text h3 style={styles.text}>{question}</Text>
        {showAnswer && (
          <Text h4 style={styles.answer}>{answer}</Text>
        )}
      </Card>
    )
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  },
  showAnswer: {
    flexDirection: 'row-reverse'
  },
  text: {
    marginTop: 5,
    marginRight: 5
  },
  answer: {
    marginTop: 5,
    color: `${gray}`
  }
})

export default Question;
