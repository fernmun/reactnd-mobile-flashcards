import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
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
import { setLocalNotification } from './src/utils/helpers.js'
import { Constants } from 'expo'
import { white, red } from './src/utils/colors.js'

const NavigationOptions = {
  headerTintColor: white,
  headerTitleStyle: {
    fontSize: 24,
    marginBottom: 40
  },
  headerStyle: {
    backgroundColor: red,
    height: 10,
    paddingBottom: 20
  }
}

const Stack = StackNavigator({
  [VIEWS.HOME]: {
    screen: Home,
    navigationOptions: {
      ...NavigationOptions,
      title: 'Decks'
    }
  },
  [VIEWS.NEW_DECK]: {
    screen: NewDeck,
    navigationOptions: {
      ...NavigationOptions,
      title: 'New Deck'
    }
  },
  [VIEWS.DECK]: {
    screen: Deck,
    navigationOptions: {
      ...NavigationOptions,
      title: 'Deck'
    }
  },
  [VIEWS.NEW_QUESTION]: {
    screen: NewQuestion,
    navigationOptions: {
      ...NavigationOptions,
      title: 'New Card'
    }
  },
  [VIEWS.QUIZ]: {
    screen: Quiz,
    navigationOptions: {
      ...NavigationOptions,
      title: 'Quiz'
    }
  }
})

function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlashcardsStatusBar backgroundColor={red} barStyle="light-content" />
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
