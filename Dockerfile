FROM node:18
WORKDIR /usr/src/app
COPY app.js .
RUN npm install express
EXPOSE 8080
CMD ["node", "app.js"]
