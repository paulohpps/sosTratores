
import React from 'react';
import { Product } from '../../types';
import { WHATSAPP_MESSAGE_BASE } from '../../constants';
import WhatsAppButton from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const message = encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento para o produto: *${product.name}*`
  );
  const whatsappUrl = `${WHATSAPP_MESSAGE_BASE}${message}`;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-brand-yellow/20">
      <img
        className="h-56 w-full object-cover"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="mb-2 text- xl font-bold tracking-tight text-white">
          {product.name}
        </h5>
        <div className="mt-auto">
          <WhatsAppButton
            text="Solicitar Orçamento"
            link={whatsappUrl}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
