import { useEffect, useState } from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = "98e39dcaa2ef7a250e8acb75ffbffe83";

function Weather() {
    const [searchValue, setSearchValue] = useState("");
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("location") !== null) setSearchValue(localStorage.getItem("location"));
    }, []);

    useEffect(() => {
        fetch(`${URL}?q=${searchValue}&appid=${API_KEY}&units=metric&lang=ru`)
            .then(r => r.json())
            .then(d => setWeather(d))
            .catch(e => console.error(e))
            .finally(() => console.log("Запрос успешно завершён"));
    }, [searchValue]);
    
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