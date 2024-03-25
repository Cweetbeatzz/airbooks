# Stage 1: Build the React application
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . ./

# Build your app
RUN npm run build

# Stage 2: Serve the React application from Nginx
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access it 
# from the outside.
EXPOSE 3000

# The default command runs Nginx in the foreground.
CMD ["nginx", "-g", "daemon off;"]
