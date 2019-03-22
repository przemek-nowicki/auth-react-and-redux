# Backend
FROM node:11.12.0

WORKDIR /app/server

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
