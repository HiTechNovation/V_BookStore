import React from 'react'
import Home from './home/home'

import { Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'

import { SignupPage } from './SignUp/SignupPage'
import { Contact } from './component/Contact'

const App = () => {
  return (
  
  <>
  <div className='dark:bg-slate-950 dark:text-white'>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Course' element={<Courses  />}/>
    <Route path='/SignUp' element={<SignupPage />}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </div>
  </>

  )
}

export default App

