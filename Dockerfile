
FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS production-stage

WORKDIR /app

RUN npm install -g serve

COPY --from=build-stage /app/dist .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]