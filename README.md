# Super App

A React + Vite entertainment dashboard that lets users register, choose categories, and browse movies, news, weather, timers, and notes.

## Features

- Registration form with validation
- Category selection and personalized movie browsing
- Weather widget using OpenWeather API
- News widget using NewsAPI
- Notes widget with localStorage persistence
- Zustand global state management
- Responsive Tailwind CSS layout

## Requirements

- Node.js 18+ recommended
- npm installed

## Setup

1. Install dependencies:

   ```bash
   git clone https://github.com/sasankkona/super-app.git
   cd super-app
   npm install
   ```

2. Create an environment file:

   - Create a `.env` file in the project root (same level as `vite.config.js`).
   - Add your API keys:

   ```env
   VITE_WEATHER_API_KEY=your_openweather_api_key
   VITE_NEWS_API_KEY=your_newsapi_api_key
   VITE_OMDB_API_KEY=your_omdb_api_key
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:

   - `http://localhost:5173`


## Build

Run:

```bash
npm run build
```

## Notes


- The app uses default exports for service functions and the Zustand store.
- Registration page layout supports smaller screens with scrollable form content.
- The project expects Tailwind CSS integration via Vite.
