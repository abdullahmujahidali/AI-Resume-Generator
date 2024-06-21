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

const GetUserResumes = (userEmail?: string) =>
  axiosClient.get("/user-resumes?filters[email][$eq]=" + userEmail);

const UpdateResumeDetail = (id: string, data: unknown) =>
  axiosClient.put("/user-resumes/" + id, data);

const GetResumeById = (id: string) =>
  axiosClient.get("/user-resumes/" + id + "?populate=*");

const DeleteResumeById = (id: string) =>
  axiosClient.delete("/user-resumes/" + id);

export default {
  createNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};
