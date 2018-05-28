// import * as api from "../services/api.js";

export const UPDATE_NONOGRAMS = "UPDATE_NONOGRAMS";

export const fetchNonograms = () => async (dispatch) => {
  const nonograms = await fetch('http://localhost:8001/nonograms').then(res => res.json());
  dispatch({
    type: UPDATE_NONOGRAMS,
    payload: nonograms
  });
};