import { ADD_DECK, ADD_QUESTION } from '../const/actions'

export function addDeck(deck) {
  return {
    TYPE: ADD_DECK,
    deck
  }
}

export function addQuestion(question) {
  return {
    TYPE: ADD_QUESTION,
    question
  }
}
