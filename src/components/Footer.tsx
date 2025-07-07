
import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from './icons/LogoIcon';
import { WHATSAPP_NUMBER } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <LogoIcon className="h-8 w-8 me-3 text-brand-yellow" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                SOS Peças
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Sua fonte confiável de peças para tratores e máquinas pesadas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Navegação
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/sobre" className="hover:underline">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link to="/produtos" className="hover:underline">
                    Produtos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Suporte
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/contato" className="hover:underline">
                    Contato
                  </Link>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Contato
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:underline">
                    (11) 95148-8776
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@sospecas.com.br" className="hover:underline">
                    contato@sospecas.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{' '}
            <Link to="/" className="hover:underline">
              SOS Peças para Tratores™
            </Link>
            . Todos os Direitos Reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
