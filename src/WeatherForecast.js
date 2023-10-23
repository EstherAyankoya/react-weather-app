import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";



export default function WeatherForecast() {
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