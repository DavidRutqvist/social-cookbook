FROM node:6.9.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
ENTRYPOINT [ "npm", "start", "--" ]
CMD [ "-a", "http://dev.api.fra1.cookbook.ltu.se", "-f", "328176260897246" ]
