import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../constants';
import ProductCard from '../components/ProductCard';
import WhatsAppButton from '../components/WhatsAppButton';

const brands = [
  { name: 'Hyundai', logoUrl: '/imgs/Logos/Hyundai.png' },
  { name: 'JCB', logoUrl: '/imgs/Logos/JCB.jpg' },
  { name: 'New Holland', logoUrl: '/imgs/Logos/NewHolland.png' },
  { name: 'Volvo', logoUrl: '/imgs/Logos/Volvo.png' },
  { name: 'Doosan', logoUrl: '/imgs/Logos/Doosan.png' },
  { name: 'CAT', logoUrl: '/imgs/Logos/CAT.png' },
  { name: 'Case Construction', logoUrl: '/imgs/Logos/Case.jpg' },
];

const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="animate-fade-in">

      {/* --- INÍCIO DO CONTÊINER PAI COM A IMAGEM DE FUNDO --- */}
      {/* Este 'div' agora envolve as três seções: Hero, Marcas e Produtos. */}
      <div 
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/backgroud.jpg')" }}
      >
        {/* O overlay escuro cobre todo o contêiner pai */}
        <div className="absolute inset-0 bg-brand-dark/80"></div>

        {/* Este 'div' com 'relative' garante que todo o conteúdo fique acima do overlay */}
        <div className="relative">

          {/* --- SEÇÃO HERO (sem fundo próprio) --- */}
          <section className="isolate px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:px-8">
            <div 
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
              aria-hidden="true"
            >
              <div 
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
                style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
              ></div>
            </div>

            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Soluções Completas em Peças para Tratores
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Qualidade, durabilidade e o melhor atendimento para sua máquina não parar. Encontre a peça certa com a ajuda de nossos especialistas.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <WhatsAppButton text="Falar com um Vendedor" />
                <Link to="/produtos" className="text-sm font-semibold leading-6 text-white hover:text-gray-200">
                  Ver catálogo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* --- SEÇÃO DE MARCAS (sem fundo próprio) --- */}
          <section className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-3xl font-bold leading-8 text-white">
                Trabalhamos com as Principais Marcas
              </h2>
              <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-7">
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="col-span-1 flex items-center justify-center bg-white rounded-md aspect-square p-3 transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      className="max-h-16 w-full object-contain"
                      src={brand.logoUrl}
                      alt={brand.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- SEÇÃO DE PRODUTOS EM DESTAQUE (agora sem fundo próprio e dentro do contêiner) --- */}
          <section className="py-12 sm:py-16 pb-24 sm:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Produtos em Destaque
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-400">
                  Confira alguns dos nossos itens mais procurados.
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-16">
                <Link to="/produtos"
                  className="inline-block bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition-colors duration-300">
                  Ver Todos os Produtos
                </Link>
              </div>
            </div>
          </section>

        </div> {/* Fim do div.relative que agrupa o conteúdo */}
      </div> {/* --- FIM DO CONTÊINER PAI COM A IMAGEM DE FUNDO --- */}

      {/* 
        Qualquer outra seção que você adicionar aqui abaixo terá um fundo separado,
        pois está fora do contêiner da imagem.
      */}
    </div>
  );
};

export default HomePage;