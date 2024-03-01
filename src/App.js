import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Notes from './pages/Notes.jsx'
import Practical from './pages/Practical.jsx'
import Hackathon from './pages/Hackathon.jsx';
import Anime from './pages/Anime.jsx'
import Photography from './pages/Photography.jsx'
import Login from './pages/Login.jsx'
import Latest from './pages/Latest.jsx'
 import { GoogleLogin } from '@react-oauth/google';
 import { jwtDecode } from "jwt-decode";
 


function App() {
  return (
   <div>
    <GoogleLogin
  onSuccess={credentialResponse => {
    var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>; 
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Notes' element={<Notes/>}></Route>
    <Route path='/Practical' element={<Practical/>}></Route>
    <Route path='/Hackathoon' element={<Hackathon/>}></Route>
    <Route path='/Anime' element={<Anime/>}></Route>
    <Route path='/Photography' element={<Photography/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Latest' element={<Latest/>}></Route>

    
   </Routes>
   </BrowserRouter>
    
   </div>
  );
}

export default App;
