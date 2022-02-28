import * as types from "../../types/appsActionTypes";
import { AppsAction } from "../../types/appsActionTypes";
import { AppsState } from "../../types/appsTypes";

const initialState: AppsState = {
  app: {
    appName: null,
    logoUrl: null,
    category: null,
    appDescription: null
  }
}

const appsReduser = (state = initialState, action: AppsAction) => {
  switch (action.type) {
    case types.ADD_APP:
      return {
        ...state,
      }
    default: 
      return state;
  }
}

export default appsReduser;