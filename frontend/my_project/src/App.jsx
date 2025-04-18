import React, { useEffect } from 'react'
import Home from './home/home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import { Toaster } from 'react-hot-toast'
import { SignupPage } from './SignUp/SignupPage'
import { Contact } from './component/Contact'
import { useAuth } from './context/AuthProvider';
import About from './component/About'

const App = () => {
  const [authUser, setAuthUser] = useAuth();

  useEffect(() => {
    console.log("AuthUser:", authUser);
  }, [authUser]);

  return (
    <>
      <div className='dark:bg-slate-950 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Course' element={authUser ? <Courses /> : <Navigate to="/SignUp" />} />
          <Route path='/SignUp' element={<SignupPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/About' element={<About/>} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App
