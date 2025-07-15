import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from './icons/LogoIcon';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import WhatsAppButton from './WhatsAppButton';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 rounded md:p-0 transition-colors duration-200 ${
      isActive
        ? 'bg-brand-yellow text-brand-dark md:bg-transparent md:text-brand-yellow md:font-bold'
        : 'text-gray-200 hover:bg-gray-700 hover:text-white md:bg-transparent md:hover:text-brand-yellow'
    }`;

  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <LogoIcon className="h-8 w-8 text-brand-yellow" />
          <span className="hidden md:inline self-center text-2xl font-semibold whitespace-nowrap text-white">
            SOS Peças para Tratores
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="hidden md:block">
            <WhatsAppButton text="Fale Conosco" />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Abrir menu principal</span>
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink to="/" className={navLinkClass} end>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/produtos" className={navLinkClass}>
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" className={navLinkClass}>
                Sobre Nós
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" className={navLinkClass}>
                Contato
              </NavLink>
            </li>
             <li className="md:hidden mt-4">
                 <WhatsAppButton text="Fale Conosco no WhatsApp" fullWidth={true} />
             </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;