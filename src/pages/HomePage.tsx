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
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="animate-fade-in">

      {/* --- INÍCIO DO CONTÊINER COM AS IMAGENS DE FUNDO RESPONSIVAS --- */}
      <div className="relative">
        {/* Camada da Imagem (com as duas versões) */}
        {/* Imagem para Desktop: visível em telas 'lg' (large) ou maiores */}
        <div 
          className="absolute inset-0 hidden lg:block bg-cover bg-center"
          style={{ backgroundImage: "url('/imgs/background.png')" }}
        ></div>
        {/* Imagem para Celular: visível em telas menores que 'lg' */}
        <div 
          className="absolute inset-0 lg:hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/imgs/background-mobile.png')" }}
        ></div>

        {/* Camada do Overlay Escuro (aplica-se sobre a imagem que estiver visível) */}
        <div className="absolute inset-0 bg-brand-dark/80"></div>

        {/* Camada do Conteúdo (fica acima de tudo) */}
        <div className="relative">

          {/* --- SEÇÃO HERO (com padding para não ficar atrás do header) --- */}
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

          {/* --- SEÇÃO DE MARCAS (ainda dentro do container da imagem de fundo) --- */}
          <section className="py-12 sm:py-16 pb-24 sm:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-3xl font-bold leading-8 text-white">
                Trabalhamos com as Principais Marcas
              </h2>
              <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-7">
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="col-span-1 flex h-full items-center justify-center rounded-md border border-white/30 p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <span className="font-semibold text-white text-lg">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div> {/* --- FIM DO CONTÊINER COM A IMAGEM DE FUNDO --- */}


      {/* --- SEÇÃO DE PRODUTOS EM DESTAQUE (AGORA SEPARADA E COM FUNDO PRÓPRIO) --- */}
      <section className="bg-brand-dark py-12 sm:py-16 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Produtos em Destaque
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-400">
              Confira alguns dos nossos itens mais procurados.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
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

    </div>
  );
};

export default HomePage;