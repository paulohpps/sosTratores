import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-brand-dark py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* O título "POR QUE?" e o parágrafo foram atualizados com o texto da imagem. */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">POR QUE?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A SOS surgiu a dois anos, de uma maneira orgânica devido a minha
            experiência de 20 anos no mercado de máquinas e peças. Nesse período,
            pude estar próximo aos clientes e entender a demanda de cada um de
            maneira particular. As máquinas funcionam através de conjuntos
            mecânicos, tais quais, esses sistemas compõem sua funcionalidade, logo,
            a falta de entendimento sobre a peça adequada ao problema, pode
            acarretar diversos outros impasses. Hoje, o mercado tem o foco apenas
            em “vendas”, então, optei por criar minha empresa, para ajudar de fato
            meu cliente de perto, sanar seu problema e fidelizar relações.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg space-y-10">
              {/* A seção de Missão, lista e etc. foi substituída por Visão, Missão e Valores da imagem. */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">VISÃO</h3>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Ser referência no mercado, como uma empresa inovadora que oferece um processo de negócio diferenciado.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">MISSÃO</h3>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Proporcionar qualidade, eficiência e inovação, através de processos simples e dinâmicos para promover um estilo de negócio mais sustentável e prático.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">VALORES</h3>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Ser uma empresa humanizada, comprometida com a necessidade do cliente, ter ética e integridade acima de tudo.
                </p>
              </div>
            </div>
          </div>
          {/* A imagem placeholder foi mantida conforme o código original. */}
          <img src="/imgs/AboutImg.jpg" alt="Oficina de peças" className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[48rem] md:-ml-4 lg:-ml-0" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;