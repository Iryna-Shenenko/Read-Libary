import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import { lazy } from "react";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage.jsx";
import ReadingPage from "./pages/ReadingPage/ReadingPage.jsx";


const RegisterPage = lazy (() => import ('./pages/RegisterPage/RegisterPage.jsx'));


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
    <Route path="/recommended" element={<RecommendedPage />} />
    <Route path="/library" element={<MyLibraryPage />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/reading" element={<ReadingPage />} />
  </Routes>
  );
}
export default App
