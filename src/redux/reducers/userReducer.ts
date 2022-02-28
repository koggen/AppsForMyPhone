import * as types from "../../types/userActionTypes";
import { UserAction } from "../../types/userActionTypes";
import { AuthState} from "../../types/userTypes";

const initialState: AuthState = {
  loading: false,
  currentUser: null,
  error: null,
}

const userReduser = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      }
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.SET_USER:
      return {
        loading: false,
        currentUser: action.payload,
        error: null,
      }
    case types.LOGOUT_SUCCESS:
      return {
        loading: false,
        currentUser: null,
        error: null,
      }
    case types.REGISTER_FAILURE:
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loading:false,
        error: action.payload,
      }
    default: 
      return state;
  }
}

export default userReduser;