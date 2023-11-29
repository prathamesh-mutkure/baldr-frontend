import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
