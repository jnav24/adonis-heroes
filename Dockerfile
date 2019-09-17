FROM node:10-jessie
WORKDIR /app
COPY package.json /app
RUN rm -rf node_modules
RUN npm install
