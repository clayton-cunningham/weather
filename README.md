# Weather App

The Weather App allows users to view weather information for a semi-random location, based within the United States. Built with TypeScript, this app pulls real-time data from a weather API, providing users with the current conditions, temperature, and forecast.

## 🚀 Features
- **Random Location**: The app automatically selects a semi-random location and fetches its weather data.
- **Real-Time Weather Data**: Displays temperature, humidity, wind speed, and weather conditions (sunny, rainy, etc.).
- **Intuitive UI**: Simple and clean interface for a smooth user experience.

## 🛠 Tech Stack
- **Frontend**: TypeScript, HTML, CSS
- **API**: National Weather Service
- **UI Framework**: None (pure HTML/CSS for simplicity)

## 📦 Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (v14 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/clayton-cunningham/weather.git
cd weather
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
npm run dev
```

The app should now be running at http://localhost:5173.

## 🧑‍💻 How it Works

1. **Random Location**: Upon loading, the app fetches a random location from a predefined list of cities.
2. **Weather Data Fetching**: It makes an API request to the National Weather Service to get the current weather data for that location.
3. **Displaying Data**: The app shows real-time weather details like temperature and weather conditions in an easy-to-read format.
4. **UI Updates**: The UI automatically updates every time a new random location is selected.