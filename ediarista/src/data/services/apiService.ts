import axios from "axios";

const URL = "https://ediarista-workshop.herokuapp.com/api/";

export const ApiService = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
