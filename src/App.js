import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";

function App() {
  return (
    <div>
      <p>Hello</p>
      <Routes>
        <Route path="/testApi" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
