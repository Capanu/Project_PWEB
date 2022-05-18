FROM node:16.10-slim
COPY . /app
WORKDIR /app

RUN npm i react-scripts
RUN npm run build

EXPOSE 3000
ENTRYPOINT REACT_APP_IP=$REACT_APP_IP REACT_APP_PORT=$REACT_APP_PORT npm start
