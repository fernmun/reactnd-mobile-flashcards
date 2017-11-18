import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
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

class NewQuestion extends Component {
  renderField = ({ input, meta: { touched, error }, ...props }) => {
    const { label, ...inputProps } = props;
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
      <View style={{ flex: 1 }}>
        <Field
          key={ guid() }
          name="question"
          component={this.renderField}
          label="Question"
          placeholder="Please write a question..."
        />
        <Field
          key={ guid() }
          name="answer"
          component={this.renderField}
          label="Answer"
          placeholder="Please write an answer..."
        />
        <Button
          title="Create New Card"
          onPress={this.props.handleSubmit(this.handleSubmit)}
        />
      </View>
    )
  }
}

function validate(values, props) {
  const error = {}

  if (!values.question)
    error.question = 'Question should not be empty!'

  if (!values.answer)
    error.question = 'Answer should not be empty!'

  return error
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps, { addQuestion })(
  reduxForm({
    validate,
    form: 'NewQuestion'
  })(NewQuestion)
)
