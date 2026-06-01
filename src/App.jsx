import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Order from './pages/Order';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') return <Home setCurrentPage={setCurrentPage} />;
    if (currentPage === 'menu') return <Menu />;
    if (currentPage === 'about') return <About />;
    if (currentPage === 'Order') return <Order />;
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}