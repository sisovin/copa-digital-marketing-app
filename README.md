# Copa Digital Marketing App

## Project Description
Copa Digital Marketing App is a comprehensive platform designed to streamline and enhance digital marketing efforts. It provides tools and features for managing agencies, services, and client interactions, all within a unified interface.

## Infrastructure Setup
1. Initialize Nx workspace: `npx create-nx-workspace@latest`
2. Configure root `package.json` with base scripts
3. Set up `nx.json` with task runners
4. Configure `tsconfig.base.json` with paths
5. Add shared ESLint/Prettier configs
6. Set up global `.env` template

## Shared Libraries
### `libs/shared/interfaces`
1. Create base Agency interface
2. Create Service interface
3. Create API response/request DTOs
4. Export all types via `index.ts`

### `libs/shared/data-access`
1. Implement API service client
2. Configure axios interceptors
3. Create API response handlers

### `libs/shared/ui`
1. Setup Storybook integration
2. Create base Button component
3. Create Card component
4. Create Rating component

## Backend (NestJS)
### Core Setup
1. Generate NestJS app: `nx g @nrwl/nest:app backend`
2. Configure TypeORM connection
3. Set up database migrations
4. Implement global exception filter

### Agency Module
1. Generate agency resource: `nx g @nrwl/nest:res agency`
2. Implement CRUD endpoints
3. Add search/filter service
4. Create seed data script

### Services Module
1. Generate services resource
2. Implement service catalog endpoints
3. Add service-agency relationship

## Frontend (Next.js)
### Core Setup
1. Generate Next.js app: `nx g @nrwl/next:app frontend`
2. Configure Tailwind CSS
3. Set up API proxy to backend
4. Implement auth context

## Usage Instructions

### Backend
1. Navigate to the backend directory: `cd apps/backend`
2. Start the NestJS server: `nx serve backend`
3. The server will be running at `http://localhost:3333`

### Frontend
1. Navigate to the frontend directory: `cd apps/frontend`
2. Start the Next.js app: `nx serve frontend`
3. The app will be running at `http://localhost:4200`

## Contribution Guidelines
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request
