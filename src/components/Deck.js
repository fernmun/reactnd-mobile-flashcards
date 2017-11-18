import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends Component {
  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View>
        <Text>{`I'm ${deck} View`}</Text>
      </View>
    )
  }
}

export default Deck;
