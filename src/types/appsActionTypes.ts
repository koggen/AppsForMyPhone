import { App } from "./appsTypes";

export const GET_ALL_APPS = "GETS_ALL_APPS";
export const ADD_APP = "ADD_APP";
export const VIEW_APP = "VIEW_APP";

interface getAllApps {
  type: typeof GET_ALL_APPS;
  payload: Array<object>;
}

interface addApp {
  type: typeof ADD_APP;
}

interface viewApp {
  type: typeof VIEW_APP;
  payload: App;
}

export type AppsAction = getAllApps | addApp | viewApp;