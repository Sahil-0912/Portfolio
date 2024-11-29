import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Header from './Layouts/Header'
import './assets/css/style.css'
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage'
import SkillPage from './Pages/SkillPage'
import ProjectPage from './Pages/ProjectPage'
const App = () => {
  return (
    <div>
      <Routers>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/aboutpage' element={<AboutPage />}></Route>
          <Route path='/skillpage' element={<SkillPage />}></Route>
          <Route path='/skillpage' element={<ProjectPage />}></Route>
        </Routes>
      </Routers>
    </div>
  )
}

export default App
