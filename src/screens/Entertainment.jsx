import Card from "../components/Card";
import { fetchNews } from "./../helper/fetchApiHelper";
import { useQuery } from "@tanstack/react-query";

const Entertainment = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["entertainment"],
    queryFn: () => fetchNews("entertainment"),
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
          <div className="p-1 px-7 ">
            <Card data={ele} />
          </div>
        );
      })}
    </div>
  );
};

export default Entertainment;
