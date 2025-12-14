import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx"
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage.jsx"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout.jsx"
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage.jsx"
import ReadingPage from "./pages/ReadingPage/ReadingPage.jsx"





function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
    <Route path="/recommended" element={<RecommendedPage />} />
    <Route path="/library" element={<MyLibraryPage />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    Route path="/reading" element={<ReadingPage />}
  </Routes>
  )
}
export default App
