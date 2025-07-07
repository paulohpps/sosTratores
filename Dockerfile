# Etapa de build com Vite
FROM node:20-alpine as build
WORKDIR /app

# Copia arquivos do projeto
COPY . .

# Instala dependências e compila
RUN npm install
RUN npm run build

# Etapa de produção com 'serve'
FROM node:20-alpine
WORKDIR /app

# Instala o servidor estático
RUN npm install -g serve

# Copia a build do estágio anterior
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
