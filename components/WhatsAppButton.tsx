
import React from 'react';
import { WHATSAPP_MESSAGE_BASE } from '../constants';
import WhatsAppIcon from './icons/WhatsAppIcon';

interface WhatsAppButtonProps {
  text: string;
  link?: string;
  fullWidth?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, link, fullWidth = false }) => {
  const defaultMessage = encodeURIComponent('Olá! Gostaria de mais informações.');
  const defaultLink = `${WHATSAPP_MESSAGE_BASE}${defaultMessage}`;

  const buttonClass = `
    inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-brand-dark bg-brand-yellow rounded-lg
    hover:bg-amber-400 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900
    transition-all duration-300 transform hover:scale-105
    ${fullWidth ? 'w-full' : ''}
  `;

  return (
    <a
      href={link || defaultLink}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
    >
      <WhatsAppIcon className="w-5 h-5 mr-2 -ml-1" />
      {text}
    </a>
  );
};

export default WhatsAppButton;
