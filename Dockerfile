FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install --dev

COPY . .

EXPOSE 3000