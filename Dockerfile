FROM node:21-alpine

COPY index.js /app/
COPY package.json /app/

WORKDIR /app

RUN npm install

CMD ["node","index.js"]