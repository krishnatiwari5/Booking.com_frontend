import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hotels' element = {<List/>} />
      <Route path='/hotels/:id' element = {<Hotel/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App