import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import DeckList from './DeckList'
import VIEWS from '../const/views'

//Delete
import NewDeck from './NewDeck'

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Decks</Text>
        <DeckList />
        <Button
          large
          title="Add New Deck"
          onPress={() => navigate(VIEWS.NEW_DECK)}
        />
      </View>
    )
  }
}

export default Home
