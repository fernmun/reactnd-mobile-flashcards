import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './src/store'
import VIEWS from './src/const/views'
import Home from './src/components/Home'
import NewDeck from './src/components/NewDeck'
import Deck from './src/components/Deck'
import NewQuestion from './src/components/NewQuestion'
import Question from './src/components/Question'
import Quiz from './src/components/Quiz'
import QuizResult from './src/components/QuizResult'

const Stack = StackNavigator({
  [VIEWS.HOME]: {
    screen: Home
  },
  [VIEWS.NEW_DECK]: {
    screen: NewDeck
  },
  [VIEWS.DECK]: {
    screen: Deck
  },
  [VIEWS.NEW_QUESTION]: {
    screen: NewQuestion
  },
  [VIEWS.QUESTION]: {
    screen: Question
  },
  [VIEWS.QUIZ]: {
    screen: Quiz
  },
  [VIEWS.QUIZ_RESULT]: {
    screen: QuizResult
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
