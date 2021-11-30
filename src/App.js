import React from 'react';


//components are import here]
import AllUsers from './Components/AllRegUsers';
import AddUser from './Components/AddNewUser';
import EditUser from './Components/EditExistUser';
import NavBar from './Components/NavBar';
import NotFound from './Components/DataNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path="/all" element={<AllUsers />} />  

        <Route path="/add" element={<AddUser />} />

        <Route path="/edit/:id" element={<EditUser />} />

        <Route element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
