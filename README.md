# News Aggregator

News Aggregator is a ReactJS application built with TypeScript and ViteJS. It allows users to aggregate and display news articles efficiently.

## Features

- Fast and optimized frontend using ViteJS
- TypeScript for better development experience
- Uses pnpm as the package manager
- Containerized with Docker for easy deployment

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/)

### Clone the repository

```sh
git clone https://github.com/matheus-omena/news-aggregator.git
cd news-aggregator
```

### Install dependencies

```sh
pnpm install
```

### Start the development server

```sh
pnpm run dev
```

The application will be available at `http://localhost:5173`.

## Running with Docker

### Build the Docker image

```sh
docker build -t news-aggregator .
```

### Run the container

```sh
docker run -p 3000:80 news-aggregator
```

The application will be accessible at `http://localhost:3000`.

### Using Docker Compose

```sh
docker-compose up -d
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
