import React, { Component } from 'react'
import { View, StyleSheet } from  'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import Question from './Question'
import QuizResult from './QuizResult'
import { green, pureRed, black } from '../utils/colors'

class Quiz extends Component {
  initialState = {
    remainingQuestions: this.props.questions.length,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0
  }

  state = this.initialState

  handleAnswer = (answer) => {
    answer === 'correct' ?
    this.setState((state) => ({
      correct: state.correct + 1,
      currentQuestion: state.currentQuestion + 1,
      remainingQuestions: state.remainingQuestions - 1
    })) :
    this.setState((state) => ({
      incorrect: state.incorrect + 1,
      currentQuestion: state.currentQuestion + 1,
      remainingQuestions: state.remainingQuestions - 1
    }))
  }

  renderQuestion = () => {
    return (
      <View>
        <Question
          question={this.props.questions[this.state.currentQuestion].question}
          answer={this.props.questions[this.state.currentQuestion].answer}
          number={`${this.state.currentQuestion + 1}/${this.props.questions.length}`}
        />
        <Button
          large
          borderRadius={10}
          backgroundColor={green}
          icon={{ name: 'check-circle' }}
          title="Correct"
          style={styles.button}
          onPress={() => { this.handleAnswer('correct') }}
        />
        <Button
          large
          borderRadius={10}
          backgroundColor={pureRed}
          icon={{ name: 'cancel' }}
          title="Incorrect"
          style={styles.button}
          onPress={() => { this.handleAnswer() }}
        />
      </View>
    )
  }

  renderResult = () => {
    return (
      <View>
        <QuizResult correct={this.state.correct} total={this.props.questions.length} />
        <Button
          large
          title="Restart Quiz"
          borderRadius={10}
          backgroundColor={black}
          icon={{ name: 'play-circle-filled' }}
          style={styles.button}
          onPress={() => this.setState(() => (this.initialState))}
        />
      </View>
    )
  }

  render() {
    const component = this.state.remainingQuestions === 0 ?
      this.renderResult() :
      this.renderQuestion()

    return (
      <View>
        {component}
      </View>
    )
  }
}

function mapStateToProps({ questions }, props) {
  const { deck } = props.navigation.state.params

  return {
    questions: questions.filter(question => question.deck === deck)
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  }
})

export default connect(mapStateToProps)(Quiz)
