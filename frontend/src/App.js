import React, { useEffect } from 'react';
import './App.css';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { BudgetSimulator } from './components/BudgetSimulator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App min-h-screen">
      <Toaster position="top-right" theme="dark" richColors />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <BudgetSimulator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;