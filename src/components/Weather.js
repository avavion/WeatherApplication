import { useEffect, useState } from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";

const API_KEY = "98e39dcaa2ef7a250e8acb75ffbffe83";

function Weather() {
    const [searchValue, setSearchValue] = useState("");
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&units=metric`)
            .then(r => r.json())
            .then(d => setWeather(d))
            .catch(e => console.error(e))
            .finally(() => console.log("Запрос успешно завершён"));
    }, [searchValue]);

    return (
        <section className="section">
            <div className='container'>
                <Search setValue={setSearchValue} value={searchValue} />
                <WeatherInfo data={weather} />
            </div>
        </section>
    )
};

export default Weather;