import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout';
import BookOfTheDay from './components/BookOfTheDay';
import SearchBooks from './components/SearchBooks';
import Favorites from './components/Favorites';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  <BaseLayout>
    <Routes>
      <Route path='/' element={<BookOfTheDay />} />
      <Route path='/search' element={<SearchBooks />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
  </BaseLayout>
 </Router>
);


