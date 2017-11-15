import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers'

const store = createStore(
  reducers,
  {},
  compose(autoRehydrate())
)

persistStore(store, { storage: AsyncStorage })

export default store
