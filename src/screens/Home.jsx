import { fetchNews } from "./../helper/fetchApiHelper";
import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";

const Home = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["Home"],
    queryFn: () => fetchNews(),
    gcTime: 7200000,
    staleTime: 7200000,
  });

  if (isPending) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div>
      {data?.map((ele) => {
        return (
          <div className="p-1 md:px-7 ">
            <Card data={ele} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
