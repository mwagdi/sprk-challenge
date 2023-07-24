# SPRK Frontend Coding Challenge

## Requirements

- Node v18.x.x

## Running locally

```shell
npm install
npm run dev:server
```

## Building for production

```shell
npm run build
```

## Docker

To build the Docker image and run the container you can use the following script
```shell
npm run docker
```

## GraphQL API

In this project, [graphql-yoga](https://github.com/dotansimha/graphql-yoga) is used to create an API route. The API can be tested via the GraphiQL interface, which can be seen at http://localhost:3000/graphql.