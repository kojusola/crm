import { days, start_hour, sales_by_hour } from "../data/constants";

function Tick({ value, hour, day }) {
    let offset = (days.indexOf(day) - 1) * 20;
    // offset = offset + 1.8;
    if (offset == 0) {
        offset = "calc(" + offset.toString() + "% + 30px)";
    } else {
        offset = "calc(" + offset.toString() + "% + 18px)";
    }

    return (
        <>
            <div className="tick-div">
                <div
                    style={{
                        width: 5,
                        height: 150,
                        backgroundColor: "#ddd",
                        borderRadius: 20,
                    }}
                ></div>
                <div
                    style={{
                        width: 5,
                        height: value,
                        position: "absolute",
                        bottom: 0,
                        backgroundColor: "#222",
                        borderRadius: 20,
                        cursor: "pointer",
                    }}
                    title={value}
                ></div>
                {hour % 3 === 0 && (
                    <span
                        style={{
                            position: "absolute",
                            bottom: -40,
                            borderRadius: 20,
                        }}
                    >
                        {hour < 10 && <>0{hour}:00</>}
                        {hour > 10 && <>{hour}:00</>}
                    </span>
                )}
            </div>

            {new Date().getDay() === days.indexOf(day) && (
                <div
                    style={{
                        width: "calc(20% - 24px)",
                        height: 160,
                        backgroundColor: "#f0f0ee",
                        position: "absolute",
                        top: 110,
                        left: offset,
                        zIndex: 200,
                    }}
                ></div>
            )}
        </>
    );
}

export default Tick;
