FROM node:20-alpine

COPY package.json /app/frontend/
COPY . /app/frontend

WORKDIR /app/frontend

RUN npm install

CMD ["npm", "start"]