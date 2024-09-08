import React from 'react'
import usePrayerTimes from "../../Context/prayerTimesContext"
import useFormattedTime from "../CustomHooks/HourFormat"
const Content = () => {
    const { prayerTimes } = usePrayerTimes()
    return (
        <>
            <section className="content py-5">
                <div className="container py-3">
                    <div className="row justify-content-center flex-row-reverse">
                        <div className="col-lg-4 col-md-6 col-12 p-2">
                            <div className="inner text-center">
                                <h3 className="name">الــضــهــر</h3>
                                <span className="time">{useFormattedTime(prayerTimes.Dhuhr)}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-2">
                            <div className="inner text-center">
                                <h3 className="name">الــعــصــر</h3>
                                <span className="time">{useFormattedTime(prayerTimes.Asr)}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-2">
                            <div className="inner text-center">
                                <h3 className="name">الـمــغــرب</h3>
                                <span className="time">{useFormattedTime(prayerTimes.Maghrib)}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-2">
                            <div className="inner text-center">
                                <h3 className="name">الــعــشــاء</h3>
                                <span className="time">{useFormattedTime(prayerTimes.Isha)}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-2">
                            <div className="inner text-center">
                                <h3 className="name">الــفــجــر</h3>
                                <span className="time">{useFormattedTime(prayerTimes.Fajr)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content