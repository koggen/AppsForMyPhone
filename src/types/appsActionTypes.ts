import { App } from "./appsTypes";

export const GET_ALL_APPS = "GETS_ALL_APPS";
export const ADD_APP = "ADD_APP";

interface getAllApps {
  type: typeof GET_ALL_APPS;
  payload: Array<object>;
}

interface addApp {
  type: typeof ADD_APP;
}

export type AppsAction = getAllApps | addApp;