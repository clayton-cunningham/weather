import { Column } from "../../generic/Column";
import { Row } from "../../generic/Row";
import "./Weather.less";
import { WeatherReportStructure, getDescription, getIcon } from "./helpers";

/**
 * A list of weather report details over the course of the next few days.
 * @param props 
 *              weatherReport   - response from the weather API
 */
export const WeatherList = (props: {weatherReport: WeatherReportStructure[]}) => {

    return (
        <Row>
            <div className="weather-list">
                {props.weatherReport.map(element => {
                    
                    return (
                        <div key={element.name + "_div"} style={{ height: "200px"}}>
                            <Column key={element.name + "_column"} className={`fade-up delay-${Math.floor(element.number / 2)}`}>
                                <p>{element.name}</p>
                                <img className="icon-img" alt={`${element.name} image or data not available`} src={"weather-widget/" + getIcon(element.shortForecast)} />
                                <p>{element.temperature}&deg;</p>
                                <p>{getDescription(element.shortForecast)}</p>
                            </Column>
                        </div>
                    );
                })}
            </div>
        </Row>
    )
}