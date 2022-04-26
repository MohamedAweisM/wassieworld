import { Routes, Route, HashRouter } from "react-router-dom";

import { Home, LookBook, Maintenance } from "./pages";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Maintenance />} />
        <Route path="/lookbook" element={<LookBook />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
