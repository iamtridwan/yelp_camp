import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing";
import Layouts from "./Layouts";
import CampGround from "./routes/CampGround";
import SignIn from "./components/SignIn";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Landing />} />
        <Route path="camps" element={<CampGround />} />
        <Route
          path="camps/:name"
          element={
            <div style={{ color: "black" }}>
              This is a particular camp ground
            </div>
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/signup"
          element={
            <div style={{ color: "blue.900" }}>Hello to SignUp page</div>
          }
        />
        <Route path="*" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

