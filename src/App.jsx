import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      {/* Toaster global pour les notifications */}
      <Toaster />

      {/* Contenu des pages selon les routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
