import React, { Component } from 'react';
import { View } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from 'react-native-elements';
import { connect } from 'react-redux';
import { reduxForm, Field, reset, untouch } from 'redux-form';
import { addDeck } from '../actions';
import VIEWS from '../const/views';

class NewDeck extends Component {
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
    );
  };

  handleSubmit = values => {
    this.props.addDeck(values.deck);
    this.props.navigation.navigate(VIEWS.HOME);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Field
          name="deck"
          component={this.renderField}
          label="Deck Title"
          placeholder="Please enter a Deck Title..."
        />
        <Button
          title="Create New Deck"
          onPress={this.props.handleSubmit(this.handleSubmit)}
        />
      </View>
    );
  }
}

function validate(values, props) {
  const error = {};

  if (!values.deck)
    error.deck = 'Title should not be empty!'
  else if (props.decks.find(deck => deck === values.deck))
    error.deck = `"${values.deck}" already exists!`

  return error;
}

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps, { addDeck })(
  reduxForm({
    validate,
    form: 'NewDeck'
  })(NewDeck)
)
