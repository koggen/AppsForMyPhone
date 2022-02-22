import { User } from "./userTypes";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

interface registerStart {
  type: typeof REGISTER_START;
}

interface registerSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: User;
}

interface registerFailure {
  type: typeof REGISTER_FAILURE;
  payload: string | null;
}

interface loginStart {
  type: typeof LOGIN_START;
}

interface loginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

interface loginFailure {
  type: typeof LOGIN_FAILURE;
  payload: string | null;
}

export type UserAction = registerStart | registerSuccess | registerFailure | loginStart | loginSuccess | loginFailure