FROM node:18.0 as build 

WORKDIR /react-app

COPY package*.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn run build

FROM nginx:1.19

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /react-app/build /usr/share/nginx/html