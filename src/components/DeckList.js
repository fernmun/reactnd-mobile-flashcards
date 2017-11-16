import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { List, ItemList } from 'react-native-elements'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class DeckList extends Component {
   render() {
     console.log(this.props.decks)
     return (
       <View>
        <Text>I'm DeckList component</Text>
       </View>
     )
   }
}

function mapStateToProps ({ decks }) {
  console.log('state')
  return {
    decks: decks
  }
}

DeckList.propTypes = {
  decks: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(DeckList)
