import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Join, Chat, AlertMessage } from "./components";

const App = () => {
  const [alert, setAlert] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAlert("");
    }, 5000);
  }, [alert]);

  return (
    <BrowserRouter>
      {alert && <AlertMessage message={alert} setAlert={setAlert} />}
      <Routes>
        <Route path="/" exact element={<Join />} />
        <Route path="/chat" element={<Chat setAlert={setAlert} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
