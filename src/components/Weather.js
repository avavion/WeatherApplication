import { useEffect, useState } from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";

const URL = 'https://api.weatherapi.com/v1';
const API_KEY = "dedd2b41ffdb4854a5e203900210210";

function Weather() {
    let LOCATION = "Москва";

    if (localStorage.getItem("location") !== null) LOCATION = localStorage.getItem("location");

    const [searchValue, setSearchValue] = useState(LOCATION);
    const [weather, setWeather] = useState([]);

    console.log(searchValue);

    useEffect(() => {
        fetch(`${URL}/current.json?q=${searchValue}&key=${API_KEY}&lang=ru`, { mode: "cors", method: "GET" })
            .then(r => r.json())
            .then(d => setWeather(d))
            .catch(e => console.error(e))
            .finally(() => console.log("Запрос успешно завершён"));
    }, [searchValue]);

    console.log(weather);

    return (
        <section className="section">
            <div className='container'>
                <Search setValue={setSearchValue} value={searchValue} />
                <div className="weather">
                    <WeatherInfo data={weather} />
                </div>
            </div>
        </section>
    )
};

export default Weather;