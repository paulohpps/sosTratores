# Etapa de build
FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npx vite build

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
