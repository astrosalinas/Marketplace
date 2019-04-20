FROM node:10-alpine

# Create app directory
WORKDIR /usr/src
COPY package*.json .
RUN yarn install
# Bundle app source
COPY . .
EXPOSE 5000
CMD [ "yarn", "start" ]
