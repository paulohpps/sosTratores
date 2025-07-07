# Etapa de build com Vite
FROM node:20-alpine as build
WORKDIR /app

# Copia arquivos de configuração de dependências primeiro para cachear
COPY package.json package-lock.json ./

# Instala dependências
RUN npm install

# Copia o resto dos arquivos do projeto
COPY . .

# Compila usando o script do package.json
RUN npm run build

# Etapa de produção com 'serve'
FROM node:20-alpine
WORKDIR /app

# Copia a build do estágio anterior
COPY --from=build /app/dist .

# Instala o servidor estático e expõe a porta
# O 'dist' será o diretório raiz servido
RUN npm install -g serve
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["serve", "-s", ".", "-l", "3000"]