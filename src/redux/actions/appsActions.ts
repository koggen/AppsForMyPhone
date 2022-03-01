import { ThunkAction } from "redux-thunk";
import * as types from "../../types/appsActionTypes";
import { AppsAction } from "../../types/appsActionTypes";
import { App } from "../../types/appsTypes";
import { db } from "../../services/firebase";
import { RootState } from "../rootReducer";

const allAppsLoadded = (apps: Array<object>): AppsAction => ({
  type: types.GET_ALL_APPS,
  payload: apps,
});

const appAdded = (): AppsAction => ({
  type: types.ADD_APP,
});

export const loadAllApps = (): ThunkAction<void, RootState, null, AppsAction> => {
  return async dispatch => {
    try {
      await db.child("apps").on("value", (snapshot) => {
        if(snapshot) {
          const data = snapshot.val();
          const apps = Object.keys(data).map((id) => {
            return {
              id: id,
              appName: data[id].appName,
              logoUrl: data[id].logoUrl,
              category: data[id].category,
              appDescription: data[id].appDescription,
            }
          })
          dispatch(allAppsLoadded(apps));
        } else {
          //dispatch(appAdded());
        }
      });
    }
    catch(error) {
      console.log(error);
    }
  }
}

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