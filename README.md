# City Weather

## Introduction

This project was completed as part of a technical assessment. It is a simple weather app that displays the current weather of a provided city.

This project is using the metric system, meaning temperature readings are in Celsius.

## Tech stack

This project makes use of tanstack's react-query to handle client side data fetching and handling. This supplies robust error and loading state handling without requiring the boilerplate of building it from scratch.

This project also leverages NextJS's API routes. This adds a layer of security to API usage. Client side requests will communicate with the NextJS server API, which itself will communicate with the OpenWeather API. This added layer means users cannot see environment variables (e.g. API keys) nor the true API request.

## View deployment

This project can be viewed at [https://city-weather-svb.vercel.app/](https://city-weather-svb.vercel.app/)

## How to run this project

Make sure you've installed node dependencies:

```bash
npm run install
```

Run the project in dev mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
