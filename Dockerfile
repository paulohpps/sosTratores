# ---- 1ª Etapa: Build da Aplicação React ----
FROM node:20-alpine AS build-stage

# Define o diretório de trabalho dentro do container
WORKDIR /app

# 1. Copia PRIMEIRO os arquivos de dependência
# Isso aproveita o cache do Docker. Se esses arquivos não mudarem,
# o Docker não vai rodar "npm install" de novo, acelerando builds.
COPY package.json package-lock.json ./

# 2. Instala as dependências
RUN npm install

# 3. AGORA, copia todo o resto do código-fonte
# Isso inclui src/, public/, vite.config.ts, etc.
COPY . .

# 4. Roda o script de build para gerar a pasta "dist"
RUN npm run build
# Neste ponto, dentro do container, teremos /app/dist/ com tudo dentro.


# ---- 2ª Etapa: Servidor de Produção ----
FROM node:20-alpine AS production-stage

WORKDIR /app

# Instala apenas o "serve", que é necessário para rodar a aplicação
RUN npm install -g serve

# Copia APENAS a pasta "dist" gerada na etapa anterior.
# Isso torna a imagem final muito menor e mais segura, pois não
# contém código-fonte, node_modules, etc.
COPY --from=build-stage /app/dist .

# Expõe a porta que o "serve" vai usar
EXPOSE 3000

# Comando para iniciar o servidor.
# "serve -s ." serve o conteúdo da pasta atual (.) como uma Single Page App.
CMD ["serve", "-s", ".", "-l", "3000"]