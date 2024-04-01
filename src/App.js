import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './pages/Home'
import EventScreen from './pages/Event'
import GalleryScreen from './pages/Gallery'
import Header from './components/Header/Header.jsx';
import Loader from './components/Loader/Loader.jsx'

function App() {
  const [loading, setLoading ] = useState(false)

  if (loading) {
    return (
      <div className="app">
          <BrowserRouter>
  
          {loading && 
          (
            <Routes>
            <Route element={
              <HomeScreen />
              } path="/" />
            <Route path='/event/:id' element={<EventScreen />} />
            <Route path='/gallery' element={<GalleryScreen/>} />
          </Routes>
          )
          }
        
        </BrowserRouter>
  
      </div>
    );
  }else {
    return (
      <Loader setStarted={setLoading} started={loading} />
    )
  }
  
}

export default App;
