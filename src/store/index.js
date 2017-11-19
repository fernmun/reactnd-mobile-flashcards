import { createStore, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { autoRehydrate, persistStore } from 'redux-persist'
import reducers from '../reducers'

const store = createStore(
  reducers,
  {},
  compose(autoRehydrate())
)

persistStore(store, { storage: AsyncStorage })

export default store
