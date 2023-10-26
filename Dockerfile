FROM node:lts as dependencies
WORKDIR /knocking-website
COPY package.json package-lock.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /knocking-website
COPY . .
COPY --from=dependencies /knocking-website/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /knocking-website
ENV NODE_ENV production

COPY --from=builder /knocking-website/public ./public
COPY --from=builder /knocking-website/package.json ./package.json
COPY --from=builder /knocking-website/.next ./.next
COPY --from=builder /knocking-website/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]