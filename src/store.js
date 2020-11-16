import { createStore, combineReducers, applyMiddleware } from 'redux'
import { UserListReducer } from './reducers/userReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const reducer = combineReducers({
  userList: UserListReducer,
})
const initialState = {}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
