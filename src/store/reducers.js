import defaultState from "./defaultState.js";
import { UPDATE_NONOGRAMS } from "./actions.js";

export default (state, action) => {
  if (!state) {
    state = defaultState;
  }

  switch (action.type) {
    case UPDATE_NONOGRAMS: {
      return {
        ...state,
        nonograms: action.payload
      }
    }
    default:
      return state;
  }

}