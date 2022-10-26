import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Ali-Guliyev/portfolio-db",
  //
  withCredentials: false,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProjects() {
    return apiClient.get("/projects");
  },
  getSkills() {
    return apiClient.get("/skills");
  },
  getText() {
    return apiClient.get("/about");
  },
  getSocial() {
    return apiClient.get("/social");
  },
};
