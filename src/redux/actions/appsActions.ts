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

const appLoaded = (app: App): AppsAction => ({
  type: types.VIEW_APP,
  payload: app,
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

export const viewApp = (id: string | undefined): ThunkAction<void, RootState, null, AppsAction> => {
  return async dispatch => {
    try {
      const snapshot = await db.child(`apps/${id}`).get();
      if(snapshot.exists()) {
        const data = snapshot.val();
        const app = {
          appName: data.appName,
          logoUrl: data.logoUrl,
          category: data.category,
          appDescription: data.appDescription,
        }
        dispatch(appLoaded(app));
      } else {
        
      }
    }
    catch(error) {
      console.log(error);
    }
  }
}