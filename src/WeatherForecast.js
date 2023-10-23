import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";



export default function WeatherForecast(props) {

    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "597c40c39084687093b091cd48b366f8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">THU</div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-max">19</span>
                        <span className="WeatherForecast-temperatures-min">5</span>
                    </div>
                </div>
            </div>
        </div>
    );
              
             
}