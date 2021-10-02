function WeatherInfo({ data }) {
    if (data.cod !== 200) {
        return (
            <h3 className="text text--error">Город не найден</h3>
        );
    }

    localStorage.setItem('location', data.name);

    return (
        <div className="weather-info">
            <h1>{data.name}</h1>
            <div style={{ textAlign: "center" }}>
                <h1>{data.weather[0].main}</h1>
                <p>{data.weather[0].description}</p>
            </div>
            <h3 className="weather__temperature">Текущая температура: <span className="temperature">{Math.round(data.main.temp)}</span>&#8451;</h3>
            <p className="weather__text">Минимальная температура: {Math.round(data.main.temp_min)}&#8451;. Максимальная температура: {Math.round(data.main.temp_max)}&#8451;</p>
            <p>Видимость: {Number(data.visibility) / 100}%</p>
            <p>Широта: {Number(data.coord.lat)} Долгота: {Number(data.coord.lon)}</p>
            <p>Скорость ветра: {Number(data.wind.speed)} м/c</p>
        </div>
    )
}

export default WeatherInfo;