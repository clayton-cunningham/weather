
export type WeatherReportStructure = {
    name: string,
    number: number,
    shortForecast: string,
    temperature: number,
}

// TODO: Improve parsing - maybe with split commands?
// Retrieve the corresponding image for a weather description
export const getIcon = (descrip: string) => {
    if (descrip == "Sunny") return "sunny.png";
    if (descrip == "Mostly Sunny" || descrip == "Partly Sunny") return "mostlySunny.png";
    if (descrip == "Mostly Cloudy" || descrip == "Partly Cloudy") return "partlyCloudy.png";
    if (descrip == "Cloudy") return "cloudy.png";
    if (descrip.includes("Thunder")) return "thunderstorms.png";
    if (descrip.includes("Rain")) return "rainy.png";
    if (descrip.includes("Snow")) return "snow.png";
    if (descrip.includes("Fog")) return "foggy.png";
    if (descrip.includes("Cloudy")) return "cloudy.png";
    if (descrip.includes("Drizzle")) return "rainy.png";
    if (descrip.includes("Sunny")) return "sunny.png";
    // TODO: get a better template image
    else return "001.png";
}

// Retrieve a shorter description for the weather
export const getDescription = (descrip: string) => {
    if (descrip == "Sunny") return "Sunny";
    if (descrip == "Mostly Sunny" || descrip == "Partly Sunny") return "Mostly Sunny";
    if (descrip == "Mostly Cloudy" || descrip == "Partly Cloudy") return "Mostly Cloudy";
    if (descrip == "Cloudy") return "Cloudy";
    if (descrip.includes("Thunder")) return "Thunder";
    if (descrip.includes("Rain")) return "Rainy";
    if (descrip.includes("Snow")) return "Snow";
    if (descrip.includes("Fog")) return "Foggy";
    if (descrip.includes("Cloudy")) return "Cloudy";
    if (descrip.includes("Drizzle")) return "Rainy";
    if (descrip.includes("Sunny")) return "Sunny";
    else return descrip;
}

// Retrieve a style tag for the weather
export const getStyleTag = (descrip: string) => {
    if (descrip == "Sunny") return "sunny";
    if (descrip == "Mostly Sunny" || descrip == "Partly Sunny") return "sunny";
    if (descrip == "Mostly Cloudy" || descrip == "Partly Cloudy") return "cloudy";
    if (descrip == "Cloudy") return "cloudy";
    if (descrip.includes("Thunder")) return "rain";
    if (descrip.includes("Rain")) return "rain";
    if (descrip.includes("Snow")) return "cloudy";
    if (descrip.includes("Fog")) return "cloudy";
    if (descrip.includes("Cloudy")) return "cloudy";
    if (descrip.includes("Drizzle")) return "rain";
    if (descrip.includes("Sunny")) return "sunny";
    else return descrip;
}

export const weatherLocationSamples = [
    {latitude: 40.798, longitude: -74.484},
    {latitude: 39.499, longitude: -75.004},
    {latitude: 45.955, longitude: -119.565},
    {latitude: 39.533, longitude: -105.293},
    {latitude: 39.812, longitude: -83.306},
    {latitude: 35.752, longitude: -115.610},
    {latitude: 44.911, longitude: -108.433},
    {latitude: 47.052, longitude: -75.117},
    {latitude: 30.481, longitude: -97.894},
    {latitude: 34.742, longitude: -83.518},
    {latitude: 39.111, longitude: -90.717},
]
