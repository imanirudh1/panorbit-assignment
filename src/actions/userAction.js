import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../constants/userConstants'
import axios from 'axios'

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    })
    const { data } = await axios.get('https://panorbit.in/api/users.json')
    const user = data['users']
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: user,
    })
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
