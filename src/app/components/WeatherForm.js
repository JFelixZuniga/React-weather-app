import React from "react";
import WeatherInfo from "./WeatherInfo";

const WeatherForm = (props) => {
  return (
    <div className="card card-body">
      <form onSubmit={props.getWeather}>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="El nombre de tu ciudad"
            className="form-control"
            autoFocus
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="El nombre de tu país"
            className="form-control"
            autoFocus
          />
        </div>
        <button className="btn btn-success btn-block">Obtener Clima</button>
      </form>
    </div>
  );
};

export default WeatherForm;
