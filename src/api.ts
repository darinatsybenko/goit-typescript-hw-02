import axios from "axios";
import { Images } from "./components/types";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: "S7cfzHI1fWvjxm-NKorhGpbqZqwcLfGV_w_TQtyUTRE",
  per_page: 12,
  orientation: "landscape",
};

interface UnsplashResponse {
  results: Images[];
  total_pages: number;
}
export const requestProducts = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const { data } = await axios.get<UnsplashResponse>(
    `/search/photos?query=${query}&page=${page}`
  );

  return data;
};
