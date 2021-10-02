function WeatherInfo({ data }) {
    if (data.length === 0) {
        return false;
    }

    if (data.error) {
        return (
            <h2 className="text">{data.error.message}</h2>
        );
    }

    const location = data.location;
    const weather = data.current;

    localStorage.setItem('location', location.name);

    return (
        <div className="weather-info">
            <img width={64} height={64} src={weather.condition.icon} alt={weather.condition.text} />
            <h4 className='weather__location'>{location.country}, {location.name} ({location.lat}, {location.lon})</h4>
            <h2 className="weather__temperature">{Math.round(weather.temp_c)}&#176;</h2>
            <p className="text text--grey">Ощущается как: {Math.round(weather.feelslike_c)}&#176;</p>
            <p className="text text--grey">Скорость ветра: {weather.wind_kph} км/ч</p>
            <p className="text text--grey text--small">Влажность воздуха: {weather.humidity}%</p>
            <p className="text text--grey text--small">Ультрафиолетовый индекс: {weather.uv} из 10</p>
        </div>
    )
}

export default WeatherInfo;