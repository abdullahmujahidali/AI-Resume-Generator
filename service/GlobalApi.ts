import { default as axios } from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const baseURL = import.meta.env.VITE_STRAPI_APP_API_URL;

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const createNewResume = (data: unknown) =>
  axiosClient.post("/user-resumes", data);

export default { createNewResume };
