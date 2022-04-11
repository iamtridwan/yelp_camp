import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./routes/Landing";
import Layouts from "./Layouts";
import CampGround from "./routes/CampGround";
import { Button } from "@chakra-ui/react";


export const App = () => {
  const navigate = useNavigate();
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
        <Route
          path="*"
          element={
            <Button
              onClick={() => navigate("/")}
              sx={{ bgColor: "black", color: "bg" }}
            >
              Back to Home
            </Button>
          }
        />
      </Route>
    </Routes>
  );
};

