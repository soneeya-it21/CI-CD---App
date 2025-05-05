FROM node:18

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./ 

# Ensure devDependencies like react-scripts are installed
ENV NODE_ENV=development
RUN npm install --unsafe-perm

# Copy full source code
COPY . .

# Set permissions for node_modules
RUN chmod -R 755 node_modules

# Build the React app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose the port for serve
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
