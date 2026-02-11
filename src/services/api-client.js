import axios from "axios";

export default axios.create({
  baseURL: "https://phimart-three.vercel.app/api/v1",
});