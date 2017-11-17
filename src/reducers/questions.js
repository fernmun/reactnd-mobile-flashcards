import { ADD_QUESTION } from '../const/actions'
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
