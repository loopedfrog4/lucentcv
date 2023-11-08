FROM node:20-alpine

COPY package.json /app/backend/
COPY . /app/backend/

WORKDIR /app/backend

RUN npm install

CMD ["node", "server.js"]
