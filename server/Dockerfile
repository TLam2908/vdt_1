FROM node:22-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

RUN npx prisma generate

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
