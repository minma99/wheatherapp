import React, { useState ,useParams } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Searchbar from './components/searchbar/Searchbar'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/searchbar' element={ <Searchbar/> }/>
      </Routes>
    </>
  )
}

export default App;







// https://api.openweathermap.org/data/2.5/
    // 995b9b166a8821d8e97b3cccc32a0e13