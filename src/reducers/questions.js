import { ADD_QUESTION } from '../actions/types'
import questionsData from '../data/questions'

export default function questions(state = questionsData, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return [
        ...state,
        action.question
      ]
    default:
      return state
  }
}
