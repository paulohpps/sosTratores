import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import { WHATSAPP_NUMBER } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="relative isolate bg-brand-dark px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-white">Fale Conosco</h2>
        <p className="mt-2 text-lg leading-8 text-gray-300">
          Estamos prontos para atender você. Entre em contato para cotações, dúvidas ou suporte técnico.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <div className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                
                {/* Bloco de Vendas */}
                <div>
                  <h3 className="text-base font-semibold leading-7 text-white">Vendas</h3>
                  <dl className="mt-2 space-y-4 text-base leading-7 text-gray-400">
                    <div>
                      <dt className="font-semibold text-white">Willian - Gerente de Vendas</dt>
                      <dd>
                        <a className="hover:text-white" href="tel:+5511951488776">(11) 95148-8776</a>
                      </dd>
                      <dd>
                        <a className="hover:text-white" href="mailto:williansospecaparatratores@gmail.com">
                          williansospecaparatratores@gmail.com
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-white">Fernando - Consultor de Vendas</dt>
                      <dd>
                        <a className="hover:text-white" href="tel:+5511957211127">(11) 95721-1127</a>
                      </dd>
                       <dd>
                        <a className="hover:text-white" href="mailto:sospecas.fernando@gmail.com">
                          sospecas.fernando@gmail.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Bloco Financeiro */}
                <div>
                  <h3 className="text-base font-semibold leading-7 text-white">Financeiro</h3>
                   <p className="mt-2 leading-7 text-gray-400">
                    Para questões sobre pagamentos e faturamento.
                  </p>
                  <dl className="mt-4 space-y-1 text-base leading-7 text-gray-400">
                    <div>
                      <dt className="sr-only">Email Financeiro</dt>
                      <dd>
                        <a className="hover:text-white" href="mailto:sospecasparatratores@gmail.com">
                          sospecasparatratores@gmail.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                
                {/* Bloco de WhatsApp */}
                <div>
                  <h3 className="text-base font-semibold leading-7 text-white">Atendimento Rápido</h3>
                  <p className="mt-2 leading-7 text-gray-400">
                    A forma mais rápida de falar com um especialista.
                  </p>
                  <p className="mt-4">
                    <WhatsAppButton text="Iniciar Conversa"/>
                  </p>
                </div>
                
                {/* Bloco de Endereço ATUALIZADO */}
                <div>
                  <h3 className="text-base font-semibold leading-7 text-white">Endereço</h3>
                  {/* A tag <address> é semanticamente correta para endereços */}
                  <address className="mt-2 not-italic leading-7 text-gray-400">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Av.+Giovanni+Gronchi,+1960+-+Morumbi,+S%C3%A3o+Paulo+-+SP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      Av. Giovanni Gronchi, 1960 - Sl. 01<br />
                      Morumbi, São Paulo - SP<br />
                      CEP: 05651-001
                    </a>
                  </address>
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;