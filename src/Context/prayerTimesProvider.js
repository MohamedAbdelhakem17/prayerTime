import { useEffect, useState } from "react";
import { PrayerTimesContext } from "./prayerTimesContext";
import axios from "axios";

const PrayerTimesProvider = ({ children }) => {
  const [prayerTimes, setPrayerTimes] = useState({});

  const getPrayerTimes = async (city) => {
    try {
      const url = "https://api.aladhan.com/v1/timingsByCity";
      const parameter = { country: "eg", city: city };
      const queryString = new URLSearchParams(parameter).toString();
      const { data } = await axios.get(`${url}?${queryString}`);
      const { timings } = data.data;

      setPrayerTimes({
        Fajr: timings.Fajr,
        Dhuhr: timings.Dhuhr,
        Asr: timings.Asr,
        Maghrib: timings.Maghrib,
        Isha: timings.Isha,
        day: data.data.date.hijri.weekday.ar,
        date: data.data.date.gregorian.date,
      });
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
  };

  useEffect(() => {
    getPrayerTimes("Al Qāhirah");
  }, []);

  return (
    <PrayerTimesContext.Provider value={{ prayerTimes, getPrayerTimes }}>
      {children}
    </PrayerTimesContext.Provider>
  );
};

export default PrayerTimesProvider;
