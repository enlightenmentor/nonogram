import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8001"
});

export function fetchNonograms() {
  return api.get("/nonograms").then(resp => resp.data());
}