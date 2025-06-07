FROM node:18
WORKDIR /app

# Install dependencies
COPY client/package*.json ./
RUN npm install

# Copy the rest and start dev server
COPY client/ ./
EXPOSE 3000
CMD ["npm", "run", "dev"]
