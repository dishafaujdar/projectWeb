import { Routes, Route } from "react-router-dom";
import HomePage from "./components/page/Home"; 
import PaginationPage from "./components/page/PaginationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pagination" element={<PaginationPage />} />
    </Routes>
  );
}

export default App;
