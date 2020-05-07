# build env
FROM node:14 as react-build
WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
RUN npm ci

COPY . .
RUN npm run build

# runtime env
FROM nginx:alpine
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]