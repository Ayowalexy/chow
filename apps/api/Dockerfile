FROM node:18.15.0-alpine3.17

WORKDIR /app

COPY ${DIR}/package*.json ${DIR}/yarn.lock ${DIR}/tsconfig.base.json ./

RUN yarn install

WORKDIR /app/apps/api

COPY ./apps/api .

WORKDIR /app/libs/shared

ADD ${DIR}/libs/shared .

WORKDIR /app

CMD ["yarn", "start-api"]
