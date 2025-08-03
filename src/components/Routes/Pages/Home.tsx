import { useAppSelector } from "../../../store/hook";

const Home = () => {
  const { data, loading, error } = useAppSelector((state) => state.products);

  const { theme } = useAppSelector((state) => state.theme);

  if (loading)
    return <p className="text-gray-500 dark:text-gray-200">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const isTheme1 = theme === "theme1";
  const isTheme2 = theme === "theme2";

  const headerBg = isTheme1
    ? "bg-gray-100 text-black"
    : isTheme2
    ? "bg-gray-900 text-white"
    : "bg-pink-300 text-black";

  const tableBorder = isTheme1
    ? "border-gray-300"
    : isTheme2
    ? "border-gray-600"
    : "border-pink-400";

  const titleColor = isTheme1
    ? "text-gray-800"
    : isTheme2
    ? "text-white"
    : "text-gray-800";

  return (
    <div>
      <h1 className={`text-2xl font-bold mb-4 ${titleColor}`}>Product List</h1>
      <div className="overflow-x-auto">
        <table
          className={`min-w-[600px] table-auto border-collapse border w-full ${tableBorder}`}
        >
          <thead className={headerBg}>
            <tr>
              <th className={`border px-4 py-2 ${tableBorder}`}>Title</th>
              <th className={`border px-4 py-2 ${tableBorder}`}>Category</th>
              <th className={`border px-4 py-2 ${tableBorder}`}>Description</th>
              <th className={`border px-4 py-2 ${tableBorder}`}>Price</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td className={`border px-4 py-2 ${tableBorder}`}>
                  {item?.title}
                </td>
                <td className={`border px-4 py-2 ${tableBorder}`}>
                  {item?.category}
                </td>
                <td className={`border px-4 py-2 ${tableBorder}`}>
                  {item?.description}
                </td>
                <td className={`border px-4 py-2 ${tableBorder}`}>
                  {item?.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
