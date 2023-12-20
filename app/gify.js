// giphy.js
import axios from "axios";

const API_KEY = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
const BASE_URL = "https://api.giphy.com/v1/gifs";

export const searchGifs = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        api_key: API_KEY,
        q: query,
        limit: 20, // Adjust as needed
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("GIPHY API Error:", error);
    return [];
  }
};
