# Stage 1: Build the React app with Vite
FROM node:23-alpine as build

# Create app directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build your Vite React project
RUN npm run build


# Stage 2: Serve the built app
FROM node:16-alpine as production

# Create a new directory for the served app
WORKDIR /app

# Install serve to serve static files
RUN npm install -g serve

# Copy the build artifacts from the 'build' stage
COPY --from=build /app/dist ./dist

# Expose the port on which the app will run
EXPOSE 7654

# Use serve to host the production build
CMD ["serve", "-s", "dist", "-l", "7654"]
