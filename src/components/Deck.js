import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import VIEWS from '../const/views'

class Deck extends Component {
  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View>
        <Text>{`${deck}`}</Text>
        <Text>{`${this.props.questions.length} cards`}</Text>
        <Button
          large
          title="Add New Question"
          style={{marginTop: 10}}
          onPress={() => this.props.navigation.navigate(VIEWS.NEW_QUESTION, { deck })}
        />
      </View>
    )
  }
}

function mapStateToProps({ questions }, props) {
  const { deck } = props.navigation.state.params

  return {
    questions: questions.filter(question => question.deck === deck)
  }
}

export default connect(mapStateToProps)(Deck)
