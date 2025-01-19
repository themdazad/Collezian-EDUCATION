import { Routes, Route } from "react-router-dom";
import Engineering from "./pages/Engineering/index.jsx";
import { Events } from "./pages/Events/index.jsx";

// Adminentication 
import { Login } from "./pages/Admin/Authentication/Login/index.jsx";
import { Signup } from "./pages/Admin/Authentication/Signup/index.jsx";

// Bihar
import { BEU_Syllabus } from "./pages/Engineering/Bihar/BEU_Patna/Syllabus.jsx";
import { BEU_Notes } from "./pages/Engineering/Bihar/BEU_Patna/Notes.jsx";
import { BEU_PYQS } from "./pages/Engineering/Bihar/BEU_Patna/QuestionBank.jsx";
import Layout from "./layout.jsx";
import { About } from "./pages/AboutPage/index.jsx";
import { Recursive_Coder } from "./pages/RecursiveCoderPage/index.jsx";

export default function Path() {

  return (
    <Routes>
      <Route path="" element={<Layout />} />
      {/* User Adminentication  */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />


      {/* Adding pages in outlet portion of Layout */}
      <Route path="/Events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/recursive_coder" element={<Recursive_Coder />} />

      {/* Bihar  */}

      <Route path="/Engineering" >
        <Route path="" element={<Engineering />} />
        <Route path="BEU_Syllabus" element={<BEU_Syllabus />} />
        <Route path="BEU_Notes" element={<BEU_Notes />} />
        <Route path="BEU_PYQs" element={<BEU_PYQS />} />
      </Route>
    </Routes>
  );
}
