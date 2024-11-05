import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const product = useLoaderData();
  return (
    <div>
      <div className="bg-[#9538e2] text-center p-4 md:p-8 lg:p-8 space-y-3 w-full">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white px-1">
          Statistics
        </h1>
        <p className="text-white/70 text-sm md:text-base md:w-8/12 mx-auto px-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-8 lg:my-12">
          Statistics
        </h2>
        <div className="md:h-[60vh] h-[40vh]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={product} barSize={29}>
              <Bar dataKey="price" fill="#8884d8" />
              <XAxis className="text-xs" dataKey="product_title" />
              <YAxis className="text-xs " />
              <Legend />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
