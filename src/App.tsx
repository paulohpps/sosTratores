
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-brand-dark min-h-screen text-gray-200 font-sans">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
