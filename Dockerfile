# rag-backend/Dockerfile
FROM node:20.10.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY .env ./

COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]
