import { ADD_DECK } from '../const/actions'
import decksData from '../data/decks'

export default function decks(state = decksData, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    default:
      return state
  }
}
