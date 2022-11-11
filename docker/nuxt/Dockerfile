FROM node:18-alpine
RUN npm i -g pnpm

WORKDIR /var/www/html

COPY ./src/package.json ./src/pnpm-lock.yaml ./
RUN pnpm install --shamefully-hoist

COPY ./src .

RUN pnpm build
# RUN pnpm prune --prod

ENV HOST 0.0.0.0
