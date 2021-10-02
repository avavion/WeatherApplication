function WeatherInfo({ data }) {

    if (data.cod !== 200) {
        return (
            <h3>Город не найден</h3>
        );
    }

    return (
        <div className="weather">
            <div>
                <h1>{data.weather[0].main}</h1>
                <p>{data.weather[0].description}</p>
            </div>
            <h3 className="weather__temperature"><span className="temperature">{Math.round(data.main.temp)}</span>&#8451;</h3>
            <p className="weather__text">Min: {Math.round(data.main.temp_min)}. Max: {Math.round(data.main.temp_max)}</p>
        </div>
    )
}

export default WeatherInfo;