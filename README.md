# Node Docker - Express TypeScript Starter with Prisma and Knex

![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)
![Express](https://img.shields.io/badge/Express-4.x-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg)
![Prisma](https://img.shields.io/badge/Prisma-2.x-orange.svg)
![Knex](https://img.shields.io/badge/Knex-0.x-blue.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13.x-blue.svg)
![Docker](https://img.shields.io/badge/Docker-20.x-blue.svg)

This is a starter template for building a Node.js application with Express, TypeScript, Prisma (for ORM), Knex (for database migrations), and PostgreSQL as the database. The project also includes Docker support for containerization.

## Table of Contents

- [Why this project](#whythisproject)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Docker Support](#docker-support)

## Why This Project

As a passionate tech enthusiast, I constantly seek opportunities to experiment with new technologies, uncover their strengths and weaknesses, and ultimately, share my findings with the community. This project represents an exciting journey into the world of modern web development, combining a selection of powerful technologies to create a robust foundation for web applications. Here's why this project is significant:

- **Technology Exploration:** This project serves as a platform for exploring and evaluating the capabilities of various cutting-edge technologies. From Express and TypeScript to Prisma and Knex, each component has been carefully chosen to showcase its unique strengths and advantages.

- **Knowledge Sharing:** One of the core motivations behind this project is to share knowledge and insights gained from working with these technologies. The accompanying documentation and codebase aim to provide clarity and guidance for developers interested in building similar applications.

- **Community Contribution:** By open-sourcing this repository, I hope to contribute to the developer community. Whether you're a beginner looking to learn or an experienced developer seeking a solid starting point, this project is designed to assist and inspire.

## Vision

The vision for this project extends beyond its current state. It serves as a dynamic boilerplate, ready to evolve and adapt to future endeavors. Here's the core vision:

- **Boilerplate for Future Projects:** This repository is not static; it's a living template that will continually evolve. It's designed to be the foundation for future projects, allowing for rapid development and experimentation with additional tools and technologies.

- **Innovation Hub:** As new technologies emerge and gain popularity, this project will integrate and showcase them. The vision includes expanding the toolkit, incorporating new features, and experimenting with innovative solutions to meet evolving industry demands.

- **Community Collaboration:** Beyond personal use, I encourage collaboration with the developer community. Contributions, ideas, and feedback from fellow enthusiasts are welcomed and will play a vital role in shaping the project's direction.

By continually building upon and refining this project, the goal is to create a versatile and forward-looking resource for developers, fostering creativity and exploration in the ever-evolving landscape of web development.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. You should have Node.js version 14.x or higher installed. You can download it from [the official website](https://nodejs.org/).

- **Expressjs**: is a popular Node.js web application framework that simplifies the development of web applications. It provides a robust set of features for building APIs and web applications, making it an excellent choice for building RESTful services. You can read more about it from [the official website](https://expressjs.com)

- **Prisma**: is a modern database toolkit for Node.js and TypeScript. It simplifies database access by providing a type-safe and auto-generated query builder for your application. Prisma supports various databases, including PostgreSQL, MySQL, and SQLite. You can read more about it from [the official website](https://www.prisma.io/)

- **Knex**: is a SQL query builder for Node.js that allows you to interact with relational databases using JavaScript. It provides a fluent, chainable API for creating and executing database queries. Knex is often used for managing database migrations. You can read more about it from [the official website](https://knexjs.org/)

- **Postgres**: PostgreSQL is a powerful open-source relational database management system. It is known for its extensibility, performance, and robust support for complex data types and queries. PostgreSQL is commonly used in web applications to store and manage data. You can read more about it from [the official website](https://www.postgresql.org/)

- **Docker**: Docker is a containerization platform that enables you to package and run applications in isolated containers. You should have Docker version 20.x or higher installed. You can download it from [the official website](https://www.docker.com/). 

- **Package Manager**: You can use either `yarn` ,`npm` or `pnpm` as your package manager. In this README, we recommend using `npm`.

## Getting Started

- **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/node-docker.git
    ```
- **Install the necessary dependencies**:
    ```bash
        npm install
    ```

## Docker Support
- **Run the container**:

    ```bash
        docker compose up
    ```
