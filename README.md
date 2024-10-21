# Typescript-Express Boilerplate

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

A robust boilerplate for building scalable and maintainable web applications using TypeScript and Express.js, with Prisma ORM and PostgreSQL database.

## 🚀 Features
- **Database**: PostgreSQL & Redis
- **ORM**: Prisma
- **Logging**: Winston & Morgan
- **Testing**: Jest

### 🛠 Implemented Functionalities

#### Interceptor-like Feature
- Inspired by NestJS interceptors, but adapted for Express.js
- Allows insertion of additional data before sending the response
  - Intercepts `res.send` for when successful responses

#### Logging
- Configured Winston and Morgan for comprehensive logging
- Log level specification and situational logging implemented

#### Exception Filters
- HTTP Exception Filter
- Not Found Exception Filter
- Unhandled Exception Filter

#### Testing
- Unit tests for all exception filters
- Both success and failure scenarios covered
- Unit testing (Service), Integration testing (Router, Repository)

#### Util
- Load dependencies required for applications (/src/utils/loaders/)
- Wrapping middleware function for async handling (/src/utils/async-wrap.util.ts)
- Bcrypt Module for encrying values
- TokenManager Module for handling JWT

## 🏗 Project Structure

```
├── README.md
├── package-lock.json
├── package.json
├── prisma
│   └── schema.prisma
├── src
│   ├── configs
│   │   ├── env.config.ts
│   │   └── logger.config.ts
│   ├── filters
│   │   ├── http-exception.filter.ts
│   │   ├── not-found-exception.filter.ts
│   │   ├── test
│   │   │   ├── http-exception.filter.spec.ts
│   │   │   ├── not-found-exception.filter.spec.ts
│   │   │   └── unhandled-exception.filter.spec.ts
│   │   └── unhandled-exception.filter.ts
│   ├── interceptors
│   │   └── response.interceptor.ts
│   ├── interfaces
│   │   ├── error.type.ts
│   │   ├── repsonse.interface.ts
│   │   └── token-payload.interface.ts
│   ├── middlewares
│   │   └── validation.middleware.ts
│   ├── routes
│   │   └── test.router.ts
│   ├── server.ts
│   ├── services
│   │   ├── prisma.service.ts
│   │   └── test.service.ts
│   ├── types
│   │   └── Express.d.ts
│   └── utils
│       ├── async-wrap.util.ts
│       ├── bcrypt.util.ts
│       ├── custom-error.util.ts
│       ├── dependency-manager.util.ts
│       ├── http-status.util.ts
│       ├── loaders
│       │   ├── exception-filter.loader.ts
│       │   ├── global-middleware.loader.ts
│       │   ├── interceptor.loader.ts
│       │   └── route-middleware.loader.ts
│       └── token-manager.util.ts
├── test
└── tsconfig.json
```

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your PostgreSQL database
4. Configure your `.env` file
5. Start the server: `npm run start:dev`

## 🧪 Running Tests

```bash
npm run test
```

---

~~⭐️ If you find this boilerplate helpful, please consider giving it a star on GitHub!~~