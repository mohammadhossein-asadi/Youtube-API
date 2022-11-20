import axios from "axios";

const KEY = 'AIzaSyCI4supI3s-VhosWMSRqWXKj9IZRnES-qs'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
