import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './atom';
import Cookies from 'js-cookie';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import CreatePlace from './pages/CreatePlace';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Admin from './pages/admin';
import Free from './pages/free';
import Unusual from './pages/unusual';
import BigGame from './pages/BigGame';
import Kiss from './pages/kiss';
import HistoryOf from './pages/HistoryOf';
import ZodiacPosts from './pages/ZodiacPosts';
import Articles from './pages/articles';
import Footer from './components/Footer';

export default function App() {
  const [user] = useAtom(userAtom);
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    const token = Cookies.get('token');
    const id = Cookies.get('id');

    if (token) {
      setUser({
        id: id,
        isLoggedIn: true,
        token: token,
      });
    }
  }, []);

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/createplace" element={<CreatePlace />} />
        <Route path="/free" element={<Free />} />
        <Route path="/unusual" element={<Unusual />} />
        <Route path="/biggame" element={<BigGame />} />
        <Route path="/kiss" element={<Kiss />} />
        <Route path="/historyof" element={<HistoryOf />} />
        <Route path="/zodiacposts" element={<ZodiacPosts />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}
