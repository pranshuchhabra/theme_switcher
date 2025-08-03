import { useAppSelector } from "../../../store/hook";

const About = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const isTheme2 = theme === "theme2";

  const cards = [
    {
      title: "Our Mission",
      desc: "Deliver high-quality products at affordable prices.",
    },
    { title: "Our Vision", desc: "Be the most trusted brand in e-commerce." },
    {
      title: "Our Values",
      desc: "Customer satisfaction, innovation, and integrity.",
    },
  ];

  return (
    <div>
      <h1
        className={`text-3xl font-bold mb-3${
          isTheme2 ? "text-white" : "text-gray-800"
        }`}
      >
        About Us
      </h1>
      <p className="mb-6">
        We are committed to creating a shopping experience that is easy,
        affordable, and enjoyable.
      </p>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mb-6 cursor-pointer">
        Learn More
      </button>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow p-5 rounded-md"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
