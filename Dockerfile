FROM node:argon
RUN npm install webpack -g
WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
ENV MONGODB_URI=mongodb://127.0.0.1:27017/mean-app
ENV PORT=3000
CMD npm start
EXPOSE $PORT