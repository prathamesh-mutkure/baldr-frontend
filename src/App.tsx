import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import DiscordDashboardPage from "./pages/_dashboard";
import SearchPage from "./pages/search";
import { Toaster } from "@/components/ui/toaster";
import TxDetailsPage from "./pages/tx-details";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/dashboard/"} element={<DashboardPage />} />
          <Route path={"/discord/"} element={<DiscordDashboardPage />} />
          <Route path={"/search/"} element={<SearchPage />} />
          <Route path={"/:txId"} element={<TxDetailsPage />} />
        </Routes>
        <Toaster />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
