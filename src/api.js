import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: "S7cfzHI1fWvjxm-NKorhGpbqZqwcLfGV_w_TQtyUTRE",
  per_page: 12,
  orientation: "landscape",
};
export const requestProducts = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos?query=${query}&page=${page}`
  );

  return data.results;
};
