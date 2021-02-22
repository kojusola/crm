import { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tour from "reactour";

import { UpArrowAlt } from "@styled-icons/boxicons-regular/UpArrowAlt";

import { Header, MetricsAndSummary } from "../components/";

import { metrics } from "../data/constants";
import { dashboard_steps } from "./steps";

import "./styles/Dashboard.css";

import {
    isDashboardTourOpen,
    setIsDashboardTourOpen,
} from "../features/app/appSlice";

function ScoreDiv({ title, score, percent_change }) {
    return (
        <div className="score-div">
            <div className="score-card">
                <div className="score-heading">
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
                </div>
                {/* <LineChart thumbnail={true} /> */}
            </div>
        </div>
    );
}

function ScoresComponent() {
    return (
        <>
            <div className="scores-component-div">
                <h2 className="heavy-font dashboard-section-heading">
                    Metric Summary
                </h2>
                {metrics.map((metric) => {
                    return (
                        <ScoreDiv
                            title={metric.title}
                            score={metric.score}
                            percent_change={metric.percent_change}
                            key={metric.title}
                        />
                    );
                })}
            </div>
        </>
    );
}

class Toggler extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputChange(event) {
        this.props.handleInputChange(event);
    }

    handleClick(event) {
        const target = event.target;

        if (target.id === "label1") {
            this.inputElement1.click();
        } else if (target.id === "label2") {
            this.inputElement2.click();
        } else {
            this.inputElement3.click();
        }
    }

    render() {
        const { showMetricCharts, showScoresComponent } = this.props;

        return (
            <div
                className="show-check-items-container-div"
                style={{ width: "auto", float: "right" }}
            >
                <div className="form-check show-check-items">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={showMetricCharts}
                        name="showMetricCharts"
                        id="defaultCheck1"
                        onChange={this.handleInputChange}
                        ref={(input) => (this.inputElement1 = input)}
                    />
                    <label
                        className="form-check-label show-check-labels"
                        htmlFor="exampleCheck1"
                        id="label1"
                        onClick={this.handleClick}
                    >
                        Metric Charts
                    </label>
                </div>

                <div className="form-check show-check-items">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={showScoresComponent}
                        name="showScoresComponent"
                        id="defaultCheck1"
                        onChange={this.handleInputChange}
                        ref={(input) => (this.inputElement3 = input)}
                    />
                    <label
                        className="form-check-label show-check-labels"
                        htmlFor="exampleCheck1"
                        id="label3"
                        onClick={this.handleClick}
                    >
                        Metric Summary
                    </label>
                </div>
            </div>
        );
    }
}

function Dashboard() {
    const [showMetricCharts, setShowMetricCharts] = useState(true);
    // const [showSalesBreakdown, setShowSalesBreakdown] = useState(true);
    const [showScoresComponent, setShowScoresComponent] = useState(true);

    const dashboardTourState = useSelector(isDashboardTourOpen);
    const dispatch = useDispatch();

    // const [incrementAmount, setIncrementAmount] = useState("2");

    function handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        if (name === "showMetricCharts") {
            setShowMetricCharts(value);
        } else if (name === "showScoresComponent") {
            setShowScoresComponent(value);
        }
    }

    return (
        <div className="dashboard-div">
            <Header heading="Dashboard">
                <div>
                    <p style={{ width: "350px", float: "left" }}>
                        Get valuable insights about your business here.
                    </p>
                    <Toggler
                        showMetricCharts={showMetricCharts}
                        showScoresComponent={showScoresComponent}
                        handleInputChange={handleInputChange}
                    />
                </div>
            </Header>
            <Tour
                steps={dashboard_steps}
                isOpen={dashboardTourState}
                accentColor="#0e9168"
                rounded={8}
                // closeWithMask={false}
                nextButton={
                    <button type="button" className="btn btn-primary">
                        Next step
                    </button>
                }
                lastStepNextButton={
                    <button type="button" className="btn btn-primary">
                        Close
                    </button>
                }
                // onBeforeClose={() => dispatch(setIsTourOpen())}
                onRequestClose={() => dispatch(setIsDashboardTourOpen())}
            />
            {showScoresComponent && <ScoresComponent />}
            {showMetricCharts && <MetricsAndSummary />}

            {/* {showSalesBreakdown && <SalesBreakdown />} */}
        </div>
    );
}

export default Dashboard;
