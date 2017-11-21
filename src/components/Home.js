import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import DeckList from './DeckList'
import VIEWS from '../const/views'
import { red, black } from '../utils/colors'

const Home = (props) => {
  const { navigate } = props.navigation

  return (
    <View style={styles.container}>
      <DeckList navigate={navigate} />
      <Button
        large
        borderRadius={10}
        backgroundColor={red}
        icon={{ name: 'playlist-add' }}
        title="Add New Deck"
        style={styles.button}
        onPress={() => navigate(VIEWS.NEW_DECK)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20
  },
  button: {
    marginTop: 10
  }
})

export default Home
