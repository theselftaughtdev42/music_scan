FROM node:24-alpine AS builder

ARG REACT_APP_GANDER_API_URL
ENV REACT_APP_GANDER_API_URL=$REACT_APP_GANDER_API_URL

ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
