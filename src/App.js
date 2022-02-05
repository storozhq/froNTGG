import Header from "./components/Header/Header";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Main from "./components/Pages/Main";
import Ads from "./components/Pages/Ads";
import Navigation from './components/Navigation/Navigation'
const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="flex w-full mx-32">
        <Navigation />
        <Routes> 
          <Route path='/ads' element={<Ads />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

