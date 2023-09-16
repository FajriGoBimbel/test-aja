# Stage 1: Build the Next.js app
FROM node:lts AS build
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
RUN npm run build

# Stage 2: Create a smaller production image
FROM node:lts-alpine
WORKDIR /app
COPY --from=build /app/package.json /app/package-lock.json /app/
RUN npm install --production
COPY --from=build /app/.next /app/.next
EXPOSE 8084
CMD ["npm", "start"]