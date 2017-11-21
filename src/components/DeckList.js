import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guid } from '../utils/helpers'
import VIEWS from '../const/views'
import { white, black } from '../utils/colors'

class DeckList extends Component {
  renderRow = (deck) => {
    return (
      <ListItem
        key={guid()}
        title={deck.title}
        badge={{
          value: deck.questions.length,
          containerStyle: styles.item,
          textStyle: styles.textList
        }}
        onPress={() => this.props.navigate(VIEWS.DECK, { deck: deck.title })}
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

const styles = StyleSheet.create({
  item: {
    backgroundColor: black,
    marginRight: 10
  },
  textList: {
    color: `${white}`
  }
})

export default connect(mapStateToProps)(DeckList)
