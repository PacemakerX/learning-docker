FROM node

COPY . .

RUN npm install

EXPOSE 3000-3020
CMD [ "node","index.js" ]