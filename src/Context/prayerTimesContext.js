import { createContext, useContext } from "react";

export const PrayerTimesContext = createContext();
const usePrayerTimes = () => useContext(PrayerTimesContext);

export default usePrayerTimes;


