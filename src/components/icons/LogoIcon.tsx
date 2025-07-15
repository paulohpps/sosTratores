import React from 'react';

const LogoIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src="/imgs/Logo.png"
    alt="Logo"
    style={{ width: '120px', height: 'auto' }} // ajuste aqui o tamanho desejado
    {...props}
  />
);

export default LogoIcon;
