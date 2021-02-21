import { BarChart } from "../components";

import "./styles/AnalyticsSummary.css";

function AnalyticsSummary({ heading, children }) {
    return (
        <div className="analytics-summary-div">
            <div className="analytics-summary-card">
                <BarChart />
            </div>
        </div>
    );
}

export default AnalyticsSummary;
