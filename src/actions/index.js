import { ADD_DECK, ADD_QUESTION } from '../const/actions'

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}
