import Home from "./Pages/Home/index";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/index";
import Register from "./Pages/Register/index";
import GlobalStyle from "./GlobalStyle";
import PageNotFound from "./components/PageNotFound/index";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/"
          element={
            <Login
              setLoading={setLoading}
              loading={loading}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/register"
          element={<Register setLoading={setLoading} loading={loading} />}
        />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>

      <GlobalStyle />
    </>
  );
}

export default App;
