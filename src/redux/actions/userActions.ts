import { ThunkAction } from "redux-thunk";
import * as types from "../../types/actionTypes";
import { UserAction } from "../../types/actionTypes";
import { User, RegisterData, LoginData } from "../../types/userTypes";
import { auth } from "../../services/firebase";
import { RootState } from "../rootReducer";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const registerStart = (): UserAction => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user: User): UserAction => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFailure = (error: string | null): UserAction => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

const loginStart = (): UserAction => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user: User): UserAction => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = (error: string | null): UserAction => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

const logoutStart = (): UserAction => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = (): UserAction => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFailure = (error: string | null): UserAction => ({
  type: types.LOGOUT_FAILURE,
  payload: error,
});

const setUser = (user: User | null): UserAction => ({
  type: types.SET_USER,
  payload: user,
});

export const register = ({displayName, email, password} : RegisterData): ThunkAction<void, RootState, null, UserAction> => {
  return async dispatch => {
    dispatch(registerStart());
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      if(res.user) {
        await res.user.updateProfile({
          displayName
        });
        const user: User = {
          id: res.user.uid,
          displayName: displayName,
          email: email
        };
        dispatch(registerSuccess(user));
      }

    }
    catch(error) {
      dispatch(registerFailure((error as Error).message));
    }
  }
}

export const login = ({email, password} : LoginData): ThunkAction<void, RootState, null, UserAction> => {
  return async dispatch => {
    dispatch(loginStart());
    try {
      const res = await auth.signInWithEmailAndPassword(email, password)
      if(res.user) {
        const user: User = {
          id: res.user.uid,
          displayName: res.user.displayName,
          email: email
        };
        dispatch(loginSuccess(user));
      }
    }
    catch(error) {
      dispatch(loginFailure((error as Error).message));
    }
  }
}

export const logout = (): ThunkAction<void, RootState, null, UserAction> => {
  return async dispatch => {
    dispatch(logoutStart());
    try {
      await auth.signOut();
      dispatch(logoutSuccess());
    }
    catch(error) {
      dispatch(logoutFailure((error as Error).message));
    }
  }
}

export const verifyAuth = (): ThunkAction<void, RootState, null, UserAction> => {
  return async dispatch => {
    try {
      await onAuthStateChanged(getAuth(), (authUser) => {
        if(authUser) {
          console.log(authUser)
          const user: User = {
            id: authUser.uid,
            displayName: authUser.displayName,
            email: authUser.email
          };
          dispatch(setUser(user));
        } else {
          dispatch(setUser(null));
        }
      });
    }
    catch(error) {
      dispatch(setUser(null));
    }
  }
}