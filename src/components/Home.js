import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Home extends Component {
  render() {
    return (
      <View>
        <Text>I'm Home View</Text>
        <TouchableOpacity onPress={() => { console.log('New Deck') }}>
          <Text>New Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Home
