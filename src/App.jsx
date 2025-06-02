import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PostsPage from "./pages/PostsPage";
import DefaultLayout from "./layouts/DefaultLayout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/posts" element={<PostsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
