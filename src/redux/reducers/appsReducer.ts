import * as types from "../../types/appsActionTypes";
import { AppsAction } from "../../types/appsActionTypes";
import { AppsState } from "../../types/appsTypes";

const initialState: AppsState = {
  apps: [],
  app: {
    appName: null,
    logoUrl: null,
    category: null,
    appDescription: null
  }
}

const appsReduser = (state = initialState, action: AppsAction) => {
  switch (action.type) {
    case types.GET_ALL_APPS:
      return {
        ...state,
        apps: action.payload,
      }
    case types.ADD_APP:
      return {
        ...state,
      }
    default: 
      return state;
  }
}

export default appsReduser;