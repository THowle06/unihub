# UniHub Backend

Backend API service for the UniHub academic management platform.

## Overview

The UniHub Backend provides:

- User authentication and authorisation
- Module management
- Assignment management
- Grade tracking
- Dashboard analytics
- Database access via Prisma ORM

The API is built using:

- TypeScript
- Node.js
- Express
- Prisma ORM
- PostgreSQL (Neon)
- Vitest
- Supertest

---

## Technology Stack

| Technology | Purpose                      |
| ---------- | ---------------------------- |
| Node.js    | Runtime                      |
| Express    | Web framework                |
| TypeScript | Type safety                  |
| Prisma     | Database ORM                 |
| PostgreSQL | Database                     |
| Neon       | Database hosting             |
| Vitest     | Unit and integration testing |
| Supertest  | API testing                  |
| ESLint     | Code quality                 |
| Prettier   | Code formatting              |

---

## Project Structure

```text
backend/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── utils/
│   │
│   ├── app.ts
│   └── server.ts
│
├── tests/
│   ├── integration/
│   └── unit/
│
├── dist/
│
├── vitest.config.ts
├── tsconfig.json
├── eslint.config.js
└── package.json
```

---

## Prerequisites

Install:

- Node.js 22 LTS
- npm 10+
- PostgreSQL (optional when using Neon)

Recommended:

```bash
node -v
npm -v
```

Expected:

```text
v22.x.x
10.x.x
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/THowle06/unihub.git
```

Navigate to backend:

```bash
cd unihub/backend
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create:

```text
.env
```

Example:

```env
PORT=3000

DATABASE_URL="postgresql://..."

BETTER_AUTH_SECRET="your-secret"

BETTER_AUTH_URL="http://localhost:3000"
```

Never commit `.env` files.

---

## Running the Application

Development mode:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Run compiled application:

```bash
npm start
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server using tsx.

---

### Build

```bash
npm run build
```

Compiles TypeScript into JavaScript.

---

### Start

```bash
npm start
```

Runs the compiled application.

---

### Lint

```bash
npm run lint
```

Runs ESLint.

---

### Type Check

```bash
npm run typecheck
```

Performs TypeScript type checking.

---

## Testing

### Run All Tests

```bash
npm test
```

Runs all unit and integration tests.

---

### Watch Mode

```bash
npm run test:watch
```

Runs tests continuously during development.

---

### Coverage

```bash
npm run test:coverage
```

Generates a coverage report.

---

## Current Test Coverage

Current automated tests include:

### Integration Tests

- Root endpoint
- Health endpoint

Future tests will include:

- Authentication
- Module CRUD
- Assignment CRUD
- Grade CRUD
- Authorisation middleware
- Error handling

---

## API Endpoints

### Root

```http
GET /api/v1
```

Example response:

```json
{
  "success": true,
  "data": {
    "message": "Hello from UniHub Backend!"
  }
}
```

---

### Health Check

```http
GET /api/v1/health
```

Example response:

```json
{
  "success": true,
  "data": {
    "status": "ok",
  }
}
```

---

## Database

The backend uses PostgreSQL hosted on Neon.

Prisma is used as the ORM layer.

### Generate Prisma Client

```bash
npx prisma generate
```

### Create Migration

```bash
npx prisma migrate dev --name migration-name
```

### Open Prisma Studio

```bash
npx prisma studio
```

---

## CI/CD

GitHub Actions automatically validates:

- Linting
- Type checking
- Testing
- Build verification

Pull requests must pass all checks before merging.

---

## Branching Strategy

Feature branch:

```text
feature/<feature-name>
```

Examples:

```text
feature/authentication
feature/module-management
```

Bug fix branch:

```text
fix/<issue-name>
```

Examples:

```text
fix/health-endpoint
fix/prisma-schema
```

---

## Coding Standards

The project follows:

- ESLint
- Prettier
- Strict TypeScript

Requirements:

- No TypeScript errors
- No ESLint violations
- All tests passing

---

## Future Development

Planned features:

- Better Auth integration
- User registration and login
- Module CRUD API
- Assignment CRUD API
- Grade management API
- Dashboard analytics
- OpenAPI documentation

---

## License

This project is licensed under the MIT License.

See the root [LICENSE](/LICENSE) file for details.
