import { MetricCharts, AnalyticsSummary } from "./";

import "./styles/MetricsAndSummary.css";

function MetricsAndSummary() {
    return (
        <div className="metrics-and-summary-div">
            <h2 className="heavy-font dashboard-section-heading">
                Metric Charts
            </h2>
            <p style={{ fontSize: "0.8rem" }}>
                <em>
                    Click a legend item to show/hide its corresponding chart.
                </em>
            </p>
            <MetricCharts />
            <AnalyticsSummary />
        </div>
    );
}

export default MetricsAndSummary;
