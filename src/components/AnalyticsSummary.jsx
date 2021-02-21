import "./styles/AnalyticsSummary.css";

function AnalyticsSummary({ heading, children }) {
    return (
        <div className="analytics-summary-div">
            <div className="analytics-summary-card">
                {/* <p>{headingIcon}</p> */}
                <h3>{heading}</h3>
                {children}
            </div>
        </div>
    );
}

export default AnalyticsSummary;
