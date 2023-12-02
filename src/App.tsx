import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/dashboard/"} element={<DashboardPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
