import { Tick, ScrollableCalendar } from "../components";

import { ArrowNarrowUp } from "tabler-icons-react";

import { days, start_hour, sales_by_hour } from "../data/constants";

function SalesBreakdown() {
    let day_index = 0;

    return (
        <>
            <div className="sales-and-calender-container-div">
                <h2 className="heavy-font dashboard-section-heading">
                    Sales Breakdown
                </h2>
                <ScrollableCalendar />
                <div className="sales-breakdown-div">
                    <p style={{ textAlign: "right", marginBottom: 20 }}>
                        Sales breakdown by the week
                    </p>
                    {/* <div
                style={{
                    width: "80%",
                    height: 1,
                    backgroundColor: "#DDDDDD",
                    position: "absolute",
                    top: 160,
                    zIndex: 500,
                }}
            ></div> */}
                    <div
                        style={{
                            width: "100%",
                            height: 50,
                            clear: "both",
                        }}
                    >
                        {days.map((day) => {
                            let day_elem = "";

                            if (
                                days.indexOf(day) > 0 &&
                                new Date().getDay() === days.indexOf(day)
                            ) {
                                day_elem = (
                                    <div className="day-heading-div" key={day}>
                                        <p>{day}</p>
                                    </div>
                                );
                            } else if (days.indexOf(day) > 0) {
                                day_elem = (
                                    <div className="day-heading-div" key={day}>
                                        <p>{day}</p>
                                    </div>
                                );
                            }

                            return day_elem;
                        })}
                    </div>
                    <div style={{ clear: "both", zIndex: 200, width: "100%" }}>
                        {sales_by_hour.map((item, id) => {
                            if (item.hour === start_hour) {
                                day_index += 1;
                            }

                            let day = days[day_index];

                            return (
                                <Tick
                                    value={item.sale}
                                    key={id.toString()}
                                    hour={item.hour}
                                    day={day}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SalesBreakdown;
