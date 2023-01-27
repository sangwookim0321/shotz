//CSS
import "./App.css";
import "./assets/reset.css";

//모듈
import React from "react";
import { Routes, Route } from "react-router-dom";
// import app from './firebase.js'
import {AuthProvider} from "./models/ContextProvider"; // ContextProvider.js에서 user정보를 배포할 AuthProvider를 받아옴

//컴포넌트
import Navbar from "./views/Navbar.js";
import Banner from "./views/Banner.js";
import SignUpPage from './views/SignUpPage.js'
import Writing from "./views/Writing.js";
import WritingNote from "./views/WritingNote.js";
import Detail from "./views/Detail.js"
import Footer from "./views/Footer.js";
import Store from "./views/Store.js";
import About from "./views/About.js";
import Privacy from "./views/Privacy.js";
import ServiceCenter from "./views/ServiceCenter.js";
import Cart from "./views/Cart.js";
import Profile from "./views/Profile.js";
import Notice from "./views/Notice.js";
import NoteEdit from "./views/NoteEdit.js";
import WritingEdit from "./views/WritingEdit.js";

import ScrollToTop from "./models/ScrollToTop.js"

//메인
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/" element={<Detail />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writingnote" element={<WritingNote />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/service" element={<ServiceCenter />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/noteedit/:id" element={<NoteEdit />} />
        <Route path="/writingedit/:id" element={<WritingEdit />} />
      </Routes>
      <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
