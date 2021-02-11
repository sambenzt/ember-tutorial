FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install -g ember-cli

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]