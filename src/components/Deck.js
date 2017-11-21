import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import VIEWS from '../const/views'
import { red, black } from '../utils/colors'

class Deck extends Component {
  render() {
    const { deck } = this.props.navigation.state.params
    const { questions } = this.props

    return (
      <View>
        <View style={styles.title}>
          <Text h2>{`${deck}`}</Text>
          <Text h5>{`${questions.length} cards`}</Text>
        </View>
        <Button
          large
          title="Add New Card"
          borderRadius={10}
          backgroundColor={red}
          icon={{ name: 'add-circle' }}
          style={styles.button}
          onPress={() => this.props.navigation.navigate(VIEWS.NEW_QUESTION, { deck })}
        />
        {questions.length > 0 && (
          <Button
            large
            title="Start Quiz"
            borderRadius={10}
            backgroundColor={black}
            icon={{ name: 'play-circle-filled' }}
            style={styles.button}
            onPress={() => this.props.navigation.navigate(VIEWS.QUIZ, { deck })}
          />
        )}
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
  title: {
    alignItems: 'center'
  },
  button: {
    marginTop: 10
  }
})

export default connect(mapStateToProps)(Deck)
