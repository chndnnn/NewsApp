import axios from "axios";
// import data from "./test.json";

export async function fetchNews(category) {
  const Api_key = import.meta.env.VITE_API_KEY;
  try {
    if (!category) {
      let data = await axios.get(
        `https://gnews.io/api/v4/top-headlines?lang=hi&country=in&max=10&apikey=${Api_key}`
      );
      return data.data.articles;
    } else {
      let data = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=hi&country=in&max=10&apikey=${Api_key}`
      );
      return data.data.articles;
    }
  } catch (err) {
    console.log(err);
  }
}
