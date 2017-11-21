import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from 'react-native-elements'
import {
  reduxForm,
  Field,
  reset,
  untouch
} from 'redux-form'
import { NavigationActions } from 'react-navigation'
import { addQuestion } from '../actions'
import VIEWS from '../const/views'
import { guid } from '../utils/helpers'
import { green } from '../utils/colors'

const InputWithLabel = ({ input, meta: { touched, error }, ...props }) => {
  const { label, ...inputProps } = props

  return (
    <View>
      <FormLabel>
        {label}
      </FormLabel>
      <FormInput
        onChangeText={input.onChange}
        {...input}
        {...inputProps}
      />
      <FormValidationMessage>
        {touched && error ? error : null}
      </FormValidationMessage>
    </View>
  )
}

class NewQuestion extends Component {
  handleSubmit = values => {
    const { deck } = this.props.navigation.state.params

    const question = {
      question: values.question,
      answer: values.answer,
      deck: deck
    }

    this.props.addQuestion(question)
    this.props.navigation.dispatch(NavigationActions.back())
    this.props.dispatch(untouch('NewQuestion'))
    this.props.dispatch(reset('NewQuestion'))
  }

  render() {
    return (
      <View style={styles.container}>
        <Field
          name="question"
          component={InputWithLabel}
          label="Question"
          placeholder="Please write a question..."
        />
        <Field
          name="answer"
          component={InputWithLabel}
          label="Answer"
          placeholder="Please write an answer..."
        />
        <Button
          borderRadius={10}
          backgroundColor={green}
          icon={{ name: 'credit-card' }}
          title="Create New Card"
          onPress={this.props.handleSubmit(this.handleSubmit)}
        />
      </View>
    )
  }
}

function validate(values, props) {
  const errors = {}

  if (!values.question)
    errors.question = 'Question should not be empty!'

  if (!values.answer)
    errors.question = 'Answer should not be empty!'

  return errors
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default connect(null, { addQuestion })(
  reduxForm({
    validate,
    form: 'NewQuestion'
  })(NewQuestion)
)
