ARG NODE_VERSION=26.3.0

FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /malhi_sukhpreet_final_site

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /malhi_sukhpreet_final_site/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]