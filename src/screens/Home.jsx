import { fetchNews } from "./../helper/fetchApiHelper";
import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";

const Home = () => {
  // let [newsData, setNewsData] = useState();

  // useEffect(() => {
  //   fetchNews();
  // }, []);

  const { data } = useQuery({
    queryKey: ["Home"],
    queryFn: () => fetchNews(),
    gcTime: 7200000,
    staleTime: 7200000,
  });

  // async function fetchNews() {
  //   try {
  //     let data = await axios.get(
  //       `https://gnews.io/api/v4/top-headlines?lang=hi&country=in&max=10&apikey=ca77a13df23d97b9c6a7219f3671acd7`
  //     );
  //     setNewsData(data.data.articles);

  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <div>
      {data?.map((ele) => {
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
