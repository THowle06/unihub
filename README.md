# UniHub

![GitHub last commit](https://img.shields.io/github/last-commit/THowle06/unihub)
![GitHub repo size](https://img.shields.io/github/repo-size/THowle06/unihub)
![GitHub issues](https://img.shields.io/github/issues/THowle06/unihub)
![GitHub License](https://img.shields.io/github/license/THowle06/unihub)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)

---

## Overview

UniHub is a full-stack web application designed to help university students manage their academic life in a single platform.

The application aims to provide tools for:

- Module management
- Assignment tracking
- Grade monitoring
- Academic progress analytics
- Dashboard visualisation
- Personal academic organisation

This project is being developed as a portfolio project to demonstrate modern software engineering practices, including requirements engineering, system design, full-stack development, testing, CI/CD, and cloud deployment.

---

## Project Status

🚧 **Currently in active development**

Current phase:

- [x] Project planning
- [x] Requirements specification
- [x] System architecture
- [x] Database design
- [ ] Initial project setup
- [ ] Authentication
- [ ] Core academic features
- [ ] Dashboard implementation
- [ ] Production deployment

---

## Features

### Planned Features

#### Authentication

- User registration
- User login
- Session management
- Protected routes

#### Academic Management

- Module management
- Assignment tracking
- Grade recording
- Progress monitoring

#### Dashboard

- Upcoming deadlines
- Assignment statistics
- Academic performance overview
- Module summaries

#### Infrastructure

- Automated CI/CD
- Automated testing
- Cloud deployment
- PostgreSQL persistence

---

## Architecture

UniHub follows a three-tier architecture:

```text
Frontend (React)
        │
        ▼
Backend API (Express)
        │
        ▼
PostgreSQL Database
```

Key architectural documents can be found in:

```text
docs/
├── project-scope.md
├── software-requirements-specification.md
├── database-design.md
├── system-architecture.md
├── api-specification.md
└── devops.md
```

---

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack Query

### Backend

- Node.js
- Express
- TypeScript

### Authentication

- Better Auth

### Database

- PostgreSQL
- Prisma ORM

### Infrastructure

- GitHub Actions
- Vercel
- Render
- Neon PostgreSQL

---

## Development Workflow

This project follows a structured development process:

```text
Requirements
      ↓
Architecture
      ↓
Implementation
      ↓
Testing
      ↓
Deployment
```

Development is tracked using:

- GitHub Issues
- GitHub Milestones
- GitHub Projects
- Pull Requests

---

## Documentation

Project documentation is available in the `docs/` directory.

| Document                            | Purpose                                    |
| ----------------------------------- | ------------------------------------------ |
| Project Scope                       | Defines project objectives and boundaries  |
| Software Requirements Specification | Functional and non-functional requirements |
| Database Design                     | Data model and entity relationships        |
| System Architecture                 | System structure and communication         |
| API Specification                   | REST API contract                          |
| DevOps                              | CI/CD and deployment processes             |

---

## Repository Structure

```text
.
├── docs
│   ├── api-specification.md
│   ├── database-design.md
│   ├── devops.md
│   ├── diagrams/
│   ├── project-scope.md
│   ├── software-requirements-specification.md
│   └── system-architecture.md
└── README.md
```

---

## Roadmap

### Version 1.0

- Authentication
- Module management
- Assignment management
- Grade management
- Dashboard
- Cloud deployment

### Future Enhancements

- Calendar integration
- Revision planning
- Study session tracking
- Notifications
- Mobile application
- Analytics improvements

---

## Contributing

This is currently a personal portfolio project.

Contributions, suggestions, and feedback are welcome through GitHub Issues.

---

## License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.

---

## Author

Developed by **Tyler Howle**

University of Nottingham
BSc Computer Science

---

## Acknowledgements

This project was inspired by the challenges students face when managing assignments, modules, deadlines, and academic performance across multiple university systems.
