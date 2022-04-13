import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing";
import Layouts from "./Layouts";
import CampGround from "./routes/CampGround";
import SignIn from "./components/SignIn";
import { useRecoilState } from "recoil";
import { isLoggedIn } from "./atom";
import SignUp from "./components/SignUp";
import CampDetail from "./routes/CampDetail";

export const App = () => {
  const [login, setLogin] = useRecoilState(isLoggedIn);
  

  useEffect(() => {
    const loginAs = sessionStorage.getItem("loginAs");
    if (loginAs) {
      setLogin(!login);
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Landing />} />
        <Route path="camps" element={<CampGround />} />
        {login ? (
          <Route path="camps/:name" element={<CampDetail />} />
        ) : (
          <Route path="/login" element={<SignIn />} />
        )}

        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Landing />} />
      </Route>
    </Routes>
  );
};

