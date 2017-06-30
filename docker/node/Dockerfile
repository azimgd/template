FROM node:boron

RUN npm install -g webpack

# Create app directory
RUN mkdir -p /usr/src/app && chown node /usr/src/app
WORKDIR /usr/src/app

USER node

# Bundle app source
RUN npm install

EXPOSE 8080
ENV PORT 8080

CMD ["npm", "start"]
