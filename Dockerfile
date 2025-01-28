# Use the official Node.js image.
FROM node:22.12.0-alpine

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files.
COPY package.json yarn.lock ./

# Install dependencies using Yarn.
RUN yarn install --frozen-lockfile

# Copy the rest of the source files into the image.
COPY . .

# Change ownership of node_modules to the node user.
RUN chown -R node:node /usr/src/app/node_modules

# Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 5000

# Run the application.
CMD yarn dev