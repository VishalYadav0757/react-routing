import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import './app.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
