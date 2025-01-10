import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
            {/* Contenu des pages selon les routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/generate" element={<Home />} />
            </Routes>
    </Router>
  );
};

export default App;
