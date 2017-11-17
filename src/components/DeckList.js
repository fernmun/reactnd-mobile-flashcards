import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guid } from '../utils/helpers'

class DeckList extends Component {
  renderItem = ({ item }) => {
    return <Text>{item}</Text>
  }

  render() {
   console.log(this.props.decks)
   return (
     <FlatList
        data={this.props.decks}
        renderItem={this.renderItem}
        keyExtractor={guid}
     />
   )
  }
}

function mapStateToProps ({ decks }) {
  return {
    decks: decks
  }
}

DeckList.propTypes = {
  decks: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(DeckList)
