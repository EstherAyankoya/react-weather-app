import React from "react";
import "./Weather.css";

export default function Weather() {
    return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input
                        type="search"
                        placeholder="Enter a city.."
                        className="form-control"
                    autofocus="on"/>
                </div>
                <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
                </form>
        <h1>London</h1>
        <ul>
            <li>Sunday 18:00</li>
            <li>Clear</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAVVJREFUaN7tmckNgzAQRV1CSqAEl+ASKIFjjpTgEiiBElICJeTKjXRAB5MZyUgOyoKNx8hkLL1LNv6D8RoFAKpklAiIgAiIgAiIwMsLGxs8rjXSI3cE3nB379cqYdstgIEsMn8I/Qn6vD1UAAMYZAoMvoa+r7ML4EWbncHXNNkEGMLvkggSYAy/ULMJ4I9XEZ0VIjp3xSVwYw6/cEsu4EYcyIhOLdBnFuhTC3DXPs3SgzeLD3TdcRw1Yj10sABz+VBgsxrpLgSG7RB4Qxcq0DKGp6AtMnsBB3e34QttiIBlEjAuPEQwhQh0HHff1fgcKQBHCtCA0GCIKja8/yToKeYsoaXuzYY6D6HL1YlpWGwSBvfR3MPo7rr/geWeyHonYJkw3EsJqxjafyzmil9On2JDU/yW8hSb+lMcq5ziYCvB0eJ0+NFiMYe78v+ACIiACIiACJTEEyDCTi8sMWUSAAAAAElFTkSuQmCC"
                        alt="sunny"
                        className="float-left" />
                    <div className="float-left">
               <span className="temperature">14</span> <span className="unit">°C</span>
                    </div>
                </div>
                </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 4%</li>
                    <li>Humidity: 61%</li>
                    <li>Wind: 5mph </li>
                </ul>
            </div>
        </div>
        </div>);

}