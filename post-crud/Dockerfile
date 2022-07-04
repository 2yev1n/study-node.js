FROM node:latest

WORKDIR /

COPY . .

RUN npm install
 
COPY . ./
EXPOSE 3000
CMD ["node", "app.js"]