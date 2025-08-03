import { useAppSelector } from "../../../store/hook";

const Contact = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const isTheme2 = theme === "theme2";

  return (
    <div>
      <h1
        className={`text-3xl font-bold mb-3${
          isTheme2 ? "text-white" : "text-grey-800"
        }`}
      >
        Contact Us
      </h1>
      <p className="mb-6">
        Have questions? Feel free to reach out and we will be happy to help.
      </p>
      <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
        Send Message
      </button>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white dark:bg-gray-800 shadow p-5 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Support</h3>
          <p className="text-gray-600 dark:text-gray-300">
            support@example.com
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow p-5 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Sales</h3>
          <p className="text-gray-600 dark:text-gray-300">sales@example.com</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow p-5 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Partnerships</h3>
          <p className="text-gray-600 dark:text-gray-300">
            partners@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
