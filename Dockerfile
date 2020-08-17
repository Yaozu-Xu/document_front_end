# Dockerfile
FROM node:12.18.3-alpine3.11

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

COPY package*.json ./

RUN npm install --production

# copy the app, note .dockerignore
COPY . .
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]