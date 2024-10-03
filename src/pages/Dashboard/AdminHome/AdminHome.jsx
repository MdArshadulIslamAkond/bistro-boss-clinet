import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoWallet } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaTruck } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  Legend,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-sats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // coustom shap for the  bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // coustom shap for the pie chart

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map(data => {
    return {
      name: data.category,
      value: data.revenue,
    };
  });
  return (
    <div className="ms-6 me-12">
      <h2 className="text-3xl">
        <span>Hi, Welcome</span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <section>
        <div>
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="border rounded-md flex gap-3 justify-center items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white">
              <div className="stat-figure text-primary">
                <IoWallet className="text-3xl text-white" />
              </div>
              <div>
                <div className="text-3xl">
                  {stats?.revenue ? stats.revenue.toFixed(2) : "0.00"}
                </div>
                <div className="text-2xl">Revenu</div>
              </div>
            </div>
            <div className="border rounded-md flex gap-3 justify-center items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white">
              <div className="stat-figure text-primary">
                <HiUserGroup className="text-3xl text-white" />
              </div>
              <div>
                <div className="text-3xl">{stats.users}</div>
                <div className="text-2xl">Customers</div>
              </div>
            </div>
            <div className="border rounded-md flex gap-3 justify-center items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white">
              <div className="stat-figure text-primary">
                <GiCook className="text-3xl text-white" />
              </div>
              <div>
                <div className="text-3xl">{stats.menuItems}</div>
                <div className="text-2xl">Products</div>
              </div>
            </div>
            <div className="border rounded-md flex gap-3 justify-center items-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white">
              <div className="stat-figure text-primary">
                <FaTruck className="text-3xl text-white" />
              </div>
              <div>
                <div className="text-3xl">{stats.orders}</div>
                <div className="text-2xl">Orders</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="w-1/2">
            <PieChart width={400} height={400}>
            
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend verticalAlign="top" height={36}></Legend>
            </PieChart>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
