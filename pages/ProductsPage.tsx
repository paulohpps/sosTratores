
import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-brand-dark py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nosso Catálogo de Produtos
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Explore nossa vasta seleção de peças de alta qualidade. Não encontrou o que procura? Fale conosco!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
