import { LineChart } from "../components/";

import { metrics_data } from "../data/constants";

import "./styles/MetricCharts.css";

function MetricChart({ title, score, percent_change }) {
    return (
        <div className="metric-chart-card">
            <LineChart />
            {/* <div className="metric-chart-heading">
                    <h2 className="score-title">{title}</h2>
                </div>
                <div className="score-body">
                    <h1 className="score">{score}</h1>
                </div>
                <div className="score-change">
                    {percent_change && (
                        <>
                            <span className="score-change-value">
                                {percent_change}%
                            </span>
                            <span className="up-icon">
                                <UpArrowAlt size={24} />
                            </span>
                        </>
                    )}
                </div> */}
        </div>
    );
}

function MetricCharts() {
    return (
        <>
            <div className="metric-chart-div">
                {/* <p>
                    <em>
                        Click a legend item to hide its corresponding chart.
                    </em>
                </p> */}
                <div style={{ clear: "both" }}>
                    {metrics_data.map((metric) => {
                        return <MetricChart key={metric} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default MetricCharts;
