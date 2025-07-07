
import React from 'react';
import { WHATSAPP_MESSAGE_BASE } from '../constants';
import WhatsAppIcon from './icons/WhatsAppIcon';

const FloatingWhatsAppButton: React.FC = () => {
  const message = encodeURIComponent('Olá! Visitei o site e gostaria de mais informações.');
  const whatsappUrl = `${WHATSAPP_MESSAGE_BASE}${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;
