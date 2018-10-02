FROM node:9.11.2-alpine
LABEL authors="Rus Jr"

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Angular CLI
RUN npm i npm@latest -g
RUN npm install -g @angular/cli

# create directory
RUN mkdir app
WORKDIR /app

# install dependencies
ADD package.json .
ADD package-lock.json .
ADD angular.json .
RUN npm update

# build
ADD /src src
ADD /tsconfig.json .
RUN ng build --prod --build-optimizer

# Run (upade nginx static files)
CMD rm -rf /usr/share/nginx/html/* && cp -r /app/dist/frontend/* /usr/share/nginx/html
