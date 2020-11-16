import {
  USER_LIST_REQUEST,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from '../constants/userConstants'
export const UserListReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, user: [] }
    case USER_LIST_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// export const UserDetailsReducer = (
//   state = { USER: { reviews: [] } },
//   action
// ) => {
//   switch (action.type) {
//     case USER_DETAILS_REQUEST:
//       return { loading: true, ...state }
//     case USER_DETAILS_SUCCESS:
//       return { loading: false, user: action.payload }
//     case USER_DETAILS_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }
