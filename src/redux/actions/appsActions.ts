import { ThunkAction } from "redux-thunk";
import * as types from "../../types/appsActionTypes";
import { AppsAction } from "../../types/appsActionTypes";
import { App } from "../../types/appsTypes";
import { db } from "../../services/firebase";
import { RootState } from "../rootReducer";

const appAdded = (): AppsAction => ({
  type: types.ADD_APP,
});

export const addApp = (appData : App): ThunkAction<void, RootState, null, AppsAction> => {
  return async dispatch => {
    try {
      await db.child("apps").push(appData, (error) => {
        if(error) {
          console.log(error)
        } else {
          dispatch(appAdded());
        }
      });
    }
    catch(error) {
      console.log(error);
    }
  }
}