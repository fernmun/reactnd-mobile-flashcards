import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guid } from '../utils/helpers'

class DeckList extends Component {
  renderRow = (deck) => {
    return (
      <ListItem
        key={guid}
        title={deck.title}
        badge={{value: deck.questions.length}}
      />
    )
  }

  render() {
    return (
      <List>
        {this.props.decks.map(this.renderRow)}
      </List>
    )
  }
}

function mapStateToProps ({ decks, questions }) {
  return {
    decks: decks.map(title => ({
      title,
      questions: questions.filter(question => question.deck === title)
    }))
  }
}

DeckList.propTypes = {
  decks: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(DeckList)
