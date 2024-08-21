import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import { Outlet } from 'react-router-dom';
import CourseDetails from './pages/Course/CourseDetails';
import Login from "./Components/Login/Login";

function App() {
  return (
    <Routes>
      <Route element={
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      }>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;