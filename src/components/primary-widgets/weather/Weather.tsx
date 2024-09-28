import { Column } from "../../generic/Column";
import { PageSection } from "../../generic/PageSection";
import { WeatherList } from "./WeatherList";
import axios from "axios";
import axiosRetry from 'axios-retry';
import "./Weather.less";
import { useEffect, useState } from "react";
import { WeatherReportStructure, getDescription, getIcon, weatherLocationSamples } from "./helpers";
// @ts-ignore
import randomLocation from "random-location";
import { TriangleSlide, TriangleSlideDirection } from "../../generic/TriangleSlide";

axiosRetry(axios, { retries: 3 });

/**
 * Primary weather widget
 * @returns a component with weather details for a given area.
 *      Queries data from public API's to retrieve weather details.
 */
export const Weather = () => {

    const [latLongData, setLLData] = useState<any>(null);
    const [weatherData, setWData] = useState<any>(null);
    const [weatherReport, setWeatherReport] = useState<WeatherReportStructure[]>([]);
    const [location, setLocation] = useState<string>("");

    // Flags to control animation / disabling
    const [disable,         setDisabled         ] = useState(false);    // Tells widget to be disabled (cover the screen, disable the button)
    const [retrievingFlag,  setRetrievingFlag   ] = useState(false);    // Flags when the API is retrieving - to know when we can reveal the results
    const [coverAnimation,  setCoverAnimation   ] = useState(true);     // Flags when the cover animation is playing - to know when we can transition to the next animation (distinct from "disable")
    const [revealAnimation, setRevealAnimation  ] = useState(false);    // Controls when the reveal animation should exist
    const [resetUIData,     setResetUIData      ] = useState(false);    // Destroys and re-initializes the weather UI data, so its animation can play
    const [showError,       setShowError        ] = useState(false);    // Show an error message

    const handleError = (e:any) => {
        console.log("Error getting weather....");
        console.log(e);
        setRetrievingFlag(false);
        setWData(null);
        setLLData(null);
        setWeatherReport([]);
        setLocation("");
        setShowError(true);
        // setDisabled(false);
        // TODO: add something that happens just in case...
        // TODO: handle animation in case of error
    }

    // const requestComplete = () => {
    //     // Sync together animation and API retrieval
    //     if (animationPlaying || retrievingFlag) return;
    //     if (weatherData == null || latLongData == null) return;

    //     // Only retrieve reports starting on each mornings
    //     // TODO: maybe add aggregation across the day?
    //     setWeatherReport(weatherData.periods.filter((p:{startTime:string}) => p.startTime.split("T")[1].split("-")[0] == "06:00:00"));
    //     setLocation(latLongData.relativeLocation.properties.city + ", " + latLongData.relativeLocation.properties.state);
    //     setDisabled(false);
    // }

    useEffect(() => {
        // Sync together animation and API retrieval
        if (coverAnimation || retrievingFlag) return;
        // if (weatherData == null || latLongData == null) return;
        setResetUIData(true);
        setRevealAnimation(true);
        new Promise(() => setTimeout(() => {setRevealAnimation(false);}, 2000));

        // Only retrieve reports starting on each mornings
        // TODO: maybe add aggregation across the day?
        setWeatherReport(weatherData?.periods.filter((p:{startTime:string}) => p.startTime.split("T")[1].split("-")[0] == "06:00:00").slice(0,6));
        setLocation(latLongData?.relativeLocation.properties.city + ", " + latLongData?.relativeLocation.properties.state);
        setDisabled(false);
        new Promise(() => setTimeout(() => {setResetUIData(false);}, 500));
    }, [coverAnimation, weatherData, latLongData])

    const findWeather = async () => {
        setRetrievingFlag(true);
        setCoverAnimation(true);
        setDisabled(true);
        new Promise(() => setTimeout(() => {setCoverAnimation(false);}, 2000));
        setShowError(false);

        try {
            const rand = Math.floor(Math.random() * weatherLocationSamples.length);

            // TODO: condense these calls

            // Choose a random location
            const randomPoint = randomLocation.randomCirclePoint(weatherLocationSamples[rand], 30000);
            // First get the lat/lon coordinates, then the weather
            axios.get("https://api.weather.gov/points/" + randomPoint.latitude.toFixed(3) + "," + randomPoint.longitude.toFixed(3))
                .then(res_LatLon => {
                    if (res_LatLon.status != 200) {
                        throw new Error("Status code from Lat Long API was " + res_LatLon.status);
                    }
    
                    // Retrieve the weather info
                    axios.get(res_LatLon.data.properties.forecast)
                        .then(async res => {
                            if (res.status != 200) {
                                throw new Error("Status code from Weather API was " + res_LatLon.status);
                            }
    
                            // await new Promise(f => setTimeout(f, 500));
                            // await new Promise(f => setTimeout(f, 1000));
                            setWData(res.data.properties);
                            setLLData(res_LatLon.data.properties);
                            // console.log(res);
                            setRetrievingFlag(false);
                        })
                        .catch(e => {
                            handleError(e);
                        })
                })
                .catch(e => {
                    handleError(e);
                })
        } catch (e) {
            handleError(e);
        }
    }

    return (
        <div className="weather-container">
            <PageSection>
                <h1 id="title">Weather</h1>
                <h3>Find weather in a random location!</h3>
                <button onClick={() => findWeather()} disabled={disable}>Find some weather!</button>
                {weatherReport?.length > 0 ? (
                    <div style={{ minHeight: "400px"}}>
                        {
                            !resetUIData && (
                                <div className="row">
                                    <Column className="fade-up">
                                        <h2>{location}</h2>
                                        <img className="icon-img" alt={"Image not available; " + weatherReport[0]?.shortForecast} src={"weather-widget/" + getIcon(weatherReport[0]?.shortForecast)} />
                                        <h3>{weatherReport[0]?.temperature}&deg;</h3>
                                        <h3>{getDescription(weatherReport[0]?.shortForecast)}</h3>
                                    </Column>
                                    <WeatherList 
                                        weatherReport={weatherReport}
                                    />
                                    {/* <img className="background-image" src="thunderBg.png" /> */}
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <img src="weather-widget/weatherBackground.jpg" />
                )}
                {disable && (
                    <div>
                        <div className="slide" id="slide-right" />
                        <TriangleSlide direction={TriangleSlideDirection.InUpLeft} />
                        <div className="slide" id="slide-up" />
                    </div>
                )}
                {revealAnimation && (
                    <div>
                        <TriangleSlide direction={TriangleSlideDirection.OutDownLeft} />
                    </div>
                )}
                {showError && (
                    <p style={{"color":"red"}}>Error Occurred</p>
                )}
            </PageSection>
        </div>
    )
}