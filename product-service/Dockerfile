# Use Node.js 14 LTS base image
FROM node:14

# Set working directory in the container
WORKDIR /usr/src/product-service

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source code to the container
COPY . .

# Expose port 3002
EXPOSE 3002

# Command to run the Product Service
CMD ["npm", "start"]
