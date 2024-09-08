import React, { useEffect, useState } from 'react';
import usePrayerTimes from "../../Context/prayerTimesContext"
const Header = () => {
    const [currentCity, setCurrentCity] = useState("القاهرة");
    const [time, setTime] = useState('');
    const { prayerTimes, getPrayerTimes } = usePrayerTimes()

    const cities = [
        { cityName: "القاهرة", iso: "Al Qāhirah" },
        { cityName: "الجيزه", iso: "Al Jīzah" },
        { cityName: "الاقصر", iso: "Al Uqşur" },
        { cityName: "بور سعيد", iso: "Būr Sa‘īd" },
        { cityName: "القليوبية", iso: "Al Qalyūbīyah" },
        { cityName: "أسوان", iso: "As Suways" },
        { cityName: "دمياط", iso: "Dumyāţ" },
    ];

    const options = cities.map(city => (
        <option key={city.iso} value={city.iso} data-city-name={city.cityName}>
            {city.cityName}
        </option>
    ));

    const handleChangeCity = (event) => {
        const selectedCityName = event.target.options[event.target.selectedIndex].getAttribute('data-city-name');
        setCurrentCity(selectedCityName);
        getPrayerTimes(selectedCityName);
    };

    const updateTime = () => {
        const now = new Date();
        const options = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        setTime(now.toLocaleString("en-US", options));
    };

    useEffect(() => {
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="header" className="head mt-5 pt-5">
            <div className="data-time text-center py-4 mt-5 m-md-0">
                <h2>{currentCity}</h2>
                <p>{prayerTimes.day}</p>
                <p>{prayerTimes.date}</p>
            </div>
            <div className="option bottom-0 w-100 row py-1 justify-content-center flex-column align-items-center">
                <div className="time col-5 text-center p-1">
                    <h3>الــوقــت الــحــالى</h3>
                    <p id="timeNow">{time}</p>
                </div>
                <select
                    title="city"
                    id="city"
                    className="form-select-lg text-center w-50 mx-auto city"
                    onChange={handleChangeCity}
                    value={cities.find(city => city.cityName === currentCity)?.iso || ''}
                >
                    {options}
                </select>
            </div>
        </section>
    );
};

export default Header;
