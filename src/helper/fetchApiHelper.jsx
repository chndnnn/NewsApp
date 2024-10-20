import axios from "axios";
// import data from "./test.json";

export async function fetchNews(category) {
  try {
    if (!category) {
      let data = await axios.get(
        `https://gnews.io/api/v4/top-headlines?lang=hi&country=in&max=10&apikey=ca77a13df23d97b9c6a7219f3671acd7`
      );
      return data.data.articles;
    } else {
      let data = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=hi&country=in&max=10&apikey=ca77a13df23d97b9c6a7219f3671acd7`
      );
      return data.data.articles;
    }
  } catch (err) {
    console.log(err);
  }
}
