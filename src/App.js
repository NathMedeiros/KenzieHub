import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./Pages/Login/index";
import Register from "./Pages/Register/index";
import GlobalStyle from "./GlobalStyle";
import PageNotFound from "./components/PageNotFound/index";

import Home from "./Pages/Home";
import { TechProvider } from "./Contexts/TechContext";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <TechProvider>
              <Home />
            </TechProvider>
          }
        />
      </Routes>

      <GlobalStyle />
    </AnimatePresence>
  );
}

export default App;
