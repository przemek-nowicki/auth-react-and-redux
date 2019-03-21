# base image
FROM node:11.12.0

# set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY . .

# start app
CMD ["npm", "start"]
