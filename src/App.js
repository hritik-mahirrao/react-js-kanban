import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Board from './components/Board/Board';

import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <Board />
      <Footer />
    </div>
  );
}
