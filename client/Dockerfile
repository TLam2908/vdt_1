FROM node:20

WORKDIR /app

# Copy package files
COPY package*.json ./

# Cài mà không lấy optional deps (đặc biệt là native rollup bindings)
RUN npm install --omit=optional

# Copy toàn bộ source
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
