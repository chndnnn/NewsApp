import { fetchNews } from "./../helper/fetchApiHelper";
import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";

const Sports = () => {
  const { data } = useQuery({
    queryKey: ["sports"],
    queryFn: () => fetchNews("sports"),
    gcTime: 7200000,
    staleTime: 7200000,
  });

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

export default Sports;
