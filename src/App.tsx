import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home, LookBook } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lookbook" element={<LookBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
