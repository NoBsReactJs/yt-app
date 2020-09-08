import axios from "axios";

const KEY = "AIzaSyB6qLSZ_QGVJBkwAPfDIqggu2Wu_BAio3A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY,
  },
});
