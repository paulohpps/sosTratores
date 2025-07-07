# Etapa de build
FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
