import { month_dates } from "../data/constants";

function CalendarDiv(props) {
    return (
        <div className="calendar-div">
            <div className="calendar-card">
                <h3>{props.heading}</h3>
                <p>
                    {props.start_day} - {props.end_day}
                </p>
            </div>
        </div>
    );
}

function ScrollableCalendar() {
    return (
        <div className="scrollable-calendar-div">
            {month_dates.map((item, id) => {
                return (
                    <CalendarDiv
                        heading={item.month}
                        start_day={item.start_day}
                        end_day={item.end_day}
                        key={id}
                    />
                );
            })}
        </div>
    );
}

export default ScrollableCalendar;
