# Bharath Chand Morampudi

**Software Engineer | Java & Spring Boot | Backend & Full-Stack Development**

I'm a Software Engineer with 3 years of professional experience building backend and full-stack applications with Java, Spring Boot, React, REST APIs, and SQL. At ValueLabs and Darwinbox, I worked on API development, database optimization, authentication, automated testing, and CI/CD.

Based in Houston, TX · M.S. Computer Science, University of Houston–Clear Lake  
[Portfolio](https://bharath-morampudi-portfolio.onrender.com/) · [LinkedIn](https://www.linkedin.com/in/bharath-morampudi/) · [DevTrack live demo](https://devtrack-3upd.onrender.com)

## Professional experience

**ValueLabs — Software Engineer · Aug 2023–Jul 2024**  
Built and tested Java/Spring Boot REST APIs, optimized MySQL queries, and developed reusable React components for dashboards and administrative screens. Worked on validation, authentication, role-based access control, JUnit tests, defect resolution, and Agile releases with development and QA teams.

**Darwinbox — Software Engineer · Jun 2021–May 2023**  
Developed Java/Spring Boot and React business workflows using Spring MVC, JPA/Hibernate, MySQL, and PostgreSQL. Worked on API and query performance, reusable UI components, authentication and authorization, and production debugging. Supported biweekly releases with Git, Maven, Jenkins, and Docker alongside QA and DevOps.

## Selected projects

### [Multi-Tenant Approval Workflow API](https://github.com/bharath4980/multi-tenant-approval-api)

**Java 21 · Spring Boot 3.5 · PostgreSQL · Testcontainers · Docker**

A SaaS-style REST API where companies (tenants) set up multi-step approval flows, such as expense or discount approvals.

- Routes each request to the right approver by amount and role, with an append-only audit history of every action
- Tenant isolation with PostgreSQL row-level security and tenant-scoped JWT login
- Idempotency keys (`INSERT … ON CONFLICT`) to prevent duplicate requests, and `@Version` optimistic locking to catch conflicting updates
- 175 JUnit 5 and Testcontainers tests against real PostgreSQL, with 97.9% line coverage and an 80% JaCoCo gate in GitHub Actions
- Micrometer latency and error metrics on a Grafana dashboard, Swagger UI, and a Docker Compose stack for local runs

[Source & setup](https://github.com/bharath4980/multi-tenant-approval-api)

### [DevTrack — Job Application Tracker](https://github.com/bharath4980/devtrack)

**Java 21 · Spring Boot · React · TypeScript · PostgreSQL**

A deployed full-stack application for managing job applications, statuses, notes, and upcoming interviews.

- Spring Security sessions, BCrypt, CSRF protection, authentication throttling, and per-user data ownership
- Search, filtering, pagination, stable sorting, dashboard counts, and interview tracking
- Flyway migrations, structured API errors, and field-level validation feedback
- JUnit and PostgreSQL integration checks, plus Playwright workflows on desktop and mobile Chromium
- GitHub Actions verification and a multi-stage, non-root Docker deployment on Render

[Live demo](https://devtrack-3upd.onrender.com) · [Source & setup](https://github.com/bharath4980/devtrack) · [Engineering decisions](https://github.com/bharath4980/devtrack/blob/main/docs/engineering.md)

The demo may take a moment to wake up after inactivity.

### [MindMetrics — Stress Classification](https://github.com/bharath4980/MindMetrics-STREL)

**Python · PyTorch · scikit-learn · FastAPI · React**

A UHCL team capstone comparing stress-classification models on physiological data from the STREL dataset. **My contribution was the Logistic Regression workflow:**

- Implemented the model in PyTorch and preprocessing for missing values, numeric scaling, and categorical encoding
- Evaluated with 5-fold GroupKFold by participant, fitting preprocessing within each training fold
- Returned fold-level metrics and confusion matrices for the team's React/FastAPI comparison dashboard

The broader application and other model workflows were team contributions.

[Source & setup](https://github.com/bharath4980/MindMetrics-STREL) · [My Logistic Regression implementation](https://github.com/bharath4980/MindMetrics-STREL/blob/main/src/models/logreg_model.py)

## Technical skills

| Area | Technologies |
| --- | --- |
| Languages | Java, Python, JavaScript, TypeScript, SQL |
| Backend | Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, REST APIs, JWT, FastAPI |
| Frontend | React |
| Databases | PostgreSQL (including row-level security), MySQL, Flyway |
| Testing & delivery | JUnit 5, Testcontainers, JaCoCo, integration testing, Playwright, Postman, Docker, GitHub Actions, Jenkins, Git, Maven, CI/CD |
| Observability | Micrometer, Grafana |
| Applied ML | PyTorch, scikit-learn, pandas, GroupKFold cross-validation |

## Connect

I'm open to **Software Engineer, Backend Software Engineer, Java/Spring Boot, and Full-Stack Software Engineer** opportunities.

[Connect with me on LinkedIn](https://www.linkedin.com/in/bharath-morampudi/)
