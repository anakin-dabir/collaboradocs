# Use the official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Copy the .env file if it exists
COPY .env ./

# Expose port
EXPOSE 5000

# Start the application
CMD ["yarn", "run", "dev"]
