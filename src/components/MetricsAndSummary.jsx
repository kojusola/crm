import { MetricCharts, AnalyticsSummary } from "./";

import "./styles/MetricsAndSummary.css";

function MetricsAndSummary() {
    return (
        <div className="metrics-and-summary-div">
            <h2 className="heavy-font dashboard-section-heading">
                Metric Charts
            </h2>
            <MetricCharts />
            <AnalyticsSummary />
        </div>
    );
}

export default MetricsAndSummary;
