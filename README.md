# Emon Finance Ltd Website

A modern, responsive website for Emon Finance Ltd built with React, Vite, and Tailwind CSS.

## Features

- Modern and responsive design
- Secure authentication system
- Form validation and submission
- API integration
- SEO optimized
- Performance optimized

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shakilemon73/emon-finance-ltd.git
```

2. Install dependencies:
```bash
cd emon-finance-ltd
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=https://api.emonfinanceltd.com
VITE_APP_NAME=Emon Finance Ltd
VITE_VERSION=1.0.0
```

## Building for Production

```bash
npm run build
```

## Deployment

This project is configured for deployment on Vercel. Follow these steps:

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set up environment variables in Vercel dashboard:
   - Key: `VITE_API_URL`
   - Value: `https://api.emonfinanceltd.com`

## Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- Zod
- Crypto.js
- JWT

## License

MIT License
