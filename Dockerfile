FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NEXT_PUBLIC_STRAPI_API_URL="http://hw_backend:1337"
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built files from builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json ./

# Set environment variable for production
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Run the Next.js production server
CMD ["npm", "run", "start"]
