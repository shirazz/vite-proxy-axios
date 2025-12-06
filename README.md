# Campaign Dashboard

A React application built with Vite.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.x or higher recommended)
- npm (comes with Node.js)

## Local Environment Setup

Follow these steps to set up the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/shirazz/vite-proxy-axios.git
cd vite-proxy-axios
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory by copying the example file:

```bash
cp .env.example .env
```

Then edit the `.env` file and add your configuration values:

```
VITE_API_BASE_URL=your_api_base_url_here
VITE_CFAppSession=your_cf_app_session_value_here
VITE_CFAuthorization=your_cf_authorization_value_here
```

Replace the placeholder values with your actual credentials.

## Running the Application

### Development Mode

To start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is already in use).

### Production Build

To create a production-ready build:

```bash
npm run build
```

The build output will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Technology Stack

- **React** (v19.2.0) - UI library
- **Vite** (v7.2.4) - Build tool and dev server
- **Axios** (v1.13.2) - HTTP client
- **ESLint** - Code linting and quality checks

## Development Notes

This project uses:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) with Babel for Fast Refresh
- ESLint for code quality enforcement
