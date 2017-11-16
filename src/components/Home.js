import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import DeckList from './DeckList'

class Home extends Component {
  render() {
    return (
      <View>
        <Text>I'm Home View</Text>
        <TouchableOpacity onPress={() => { console.log('New Deck') }}>
          <Text>New Deck</Text>
        </TouchableOpacity>
        <DeckList />
      </View>
    )
  }
}

export default Home
