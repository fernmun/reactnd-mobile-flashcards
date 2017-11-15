import { ADD_QUESTION } from '../const/actions'

export default function questions(state = [], action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        ...action.question
      }
    default:
      return state
  }
}
