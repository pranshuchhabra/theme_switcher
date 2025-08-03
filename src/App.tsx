import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Routes/Pages/Layout";
import Home from "./components/Routes/Pages/Home";
import About from "./components/Routes/Pages/About";
import Contact from "./components/Routes/Pages/Contacts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
