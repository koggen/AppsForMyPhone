import { App } from "./appsTypes";

export const ADD_APP = "ADD_APP";

interface addApp {
  type: typeof ADD_APP;
}

export type AppsAction = addApp;