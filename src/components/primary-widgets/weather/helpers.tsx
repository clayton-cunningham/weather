
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
    if (descrip.includes("Fog")) return "foggy.png";
    if (descrip.includes("Cloudy")) return "cloudy.png";
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
    if (descrip.includes("Fog")) return "Foggy";
    if (descrip.includes("Cloudy")) return "Cloudy";
    else return descrip;
}

export const weatherLocationSamples = [
    {latitude: 40.798, longitude: -74.484},
    {latitude: 39.499, longitude: -75.004},
    {latitude: 39.838, longitude: -74.452},
    {latitude: 40.270, longitude: -74.332},
    {latitude: 40.493, longitude: -74.840},
    {latitude: 40.718, longitude: -74.409},
    {latitude: 40.848, longitude: -74.809},
    {latitude: 41.050, longitude: -74.397},
    {latitude: 40.769, longitude: -73.991},
    {latitude: 40.572, longitude: -75.465},
    {latitude: 41.041, longitude: -75.117},
    {latitude: 41.215, longitude: -74.695},
    {latitude: 41.381, longitude: -73.675},
]
