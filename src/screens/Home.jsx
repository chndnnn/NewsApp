import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const apiKey = "0a11b709d5434cb48d2c9b6a68b7da2c";

  let [newsData, setNewsData] = useState();

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      let data = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      );
      setNewsData(data.data.articles);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      {newsData?.map((ele) => {
        return (
          <div className="p-1 px-7 ">
            <Card data={ele} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
