import axios from "axios";

// const domain = process.env.VUE_APP_BASE_API_URL

export default axios.create({
  baseURL: 'http://localhost:8080/api'
});
