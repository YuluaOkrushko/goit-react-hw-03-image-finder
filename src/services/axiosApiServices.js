import axios from "axios";

const axiosApiServices = (searchQuery, page = 1) => {
    const apiKey = "17221091-0955a767c62ae6619bb38d11b";
  return axios.get(`https://pixabay.com/api/`, {
    params: {
      q: searchQuery,
      page: page,
      key: apiKey,
      per_page: 12,
      image_type: "photo",
      orientation: "horizontal",
    },
  });
}

export default axiosApiServices;