import React, { Component } from 'react'
import { View, Text } from  'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import Question from './Question'
import QuizResult from './QuizResult'

class Quiz extends Component {
  state = {
    remainingQuestions: this.props.questions.length,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0
  }

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
          title="Correct"
          style={{marginTop: 10}}
          onPress={() => { this.handleAnswer('correct') }}
        />
        <Button
          large
          title="Incorrect"
          style={{marginTop: 10}}
          onPress={() => { this.handleAnswer() }}
        />
      </View>
    )
  }

  renderResult = () => {
    return (
      <QuizResult correct={this.state.correct} total={this.props.questions.length} />
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

export default connect(mapStateToProps)(Quiz)
