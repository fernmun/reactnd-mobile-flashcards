import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import DeckList from './DeckList'
import VIEWS from '../const/views'

//Delete
import NewDeck from './NewDeck'

const Home = (props) => {
  const { navigate } = props.navigation

  return (
    <View>
      <Text>Decks</Text>
      <DeckList navigate={navigate} />
      <Button
        large
        title="Add New Deck"
        style={{marginTop: 10}}
        onPress={() => navigate(VIEWS.NEW_DECK)}
      />
    </View>
  )
}

export default Home
