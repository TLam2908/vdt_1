
# 1. Use Debian-based Node 22 so that Rollup’s “-gnu” binary is correct
FROM node:22-slim

# 2. Create app directory
WORKDIR /app

# 3. Copy package.json and lockfile first, install dependencies here
COPY package*.json ./
RUN npm install

# 4. Copy the rest of your source code
COPY . .

# 5. Expose whatever port your app listens on
EXPOSE 5173

# 6. Default command (adjust if you have a custom start script)
CMD ["npm", "run", "dev"]
