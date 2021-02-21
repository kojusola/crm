import { Component } from "react";

import Tour from "reactour";

import { Header, MetricsAndSummary, Step } from "../components/";

import { UpArrowAlt } from "@styled-icons/boxicons-regular/UpArrowAlt";

import { metrics } from "../data/constants";
import "./styles/Dashboard.css";

const steps = [
    {
        selector: ".first-step",
        content: (
            <Step
                heading="Welcome"
                body={[
                    `Welcome to Paperwork CRM. Let's give you a quick tour of the
        environment!`,
                ]}
            />
        ),
    },
    {
        selector: ".dashboard-div",
        content: (
            <Step
                heading="Dashboard"
                body={[
                    `Here's your dashboard. We catch you up on all the action here.`,
                ]}
            />
        ),
        // position: [1210, 420],
        position: [650, 13],
    },
    {
        selector: ".nav-bar",
        content: (
            <Step
                heading="Navigation"
                body={[
                    `This is your navigation menu, from which you can switch views.`,
                    `Click the 'Contacts' icon (the little address book) to go to your contacts view.`,
                ]}
            />
        ),
        stepInteraction: true,
    },
];

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

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMetricCharts: true,
            showSalesBreakdown: true,
            showScoresComponent: true,
            isTourOpen: true,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setIsTourOpen = this.setIsTourOpen.bind(this);
    }

    setIsTourOpen() {
        this.setState({
            isTourOpen: false,
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
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
        const {
            showMetricCharts,
            showScoresComponent,
            isTourOpen,
        } = this.state;

        const { setIsTourOpen, handleClick, handleInputChange } = this;

        return (
            <div className="dashboard-div">
                <Header heading="Dashboard">
                    <div>
                        <p style={{ width: "350px", float: "left" }}>
                            Get valuable insights about your business here.
                        </p>
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
                                    onChange={handleInputChange}
                                    ref={(input) =>
                                        (this.inputElement1 = input)
                                    }
                                />
                                <label
                                    className="form-check-label show-check-labels"
                                    htmlFor="exampleCheck1"
                                    id="label1"
                                    onClick={handleClick}
                                >
                                    Metric Charts
                                </label>
                            </div>

                            {/* <div
                                className="form-check"
                                className="show-check-items"
                            >
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={showSalesBreakdown}
                                    name="showSalesBreakdown"
                                    id="defaultCheck1"
                                    onChange={this.handleInputChange}
                                    ref={(input) =>
                                        (this.inputElement2 = input)
                                    }
                                />
                                <label
                                    className="form-check-label show-check-labels"
                                    htmlFor="exampleCheck1"
                                    id="label2"
                                    onClick={this.handleClick}
                                >
                                    Sales Breakdown
                                </label>
                            </div> */}

                            <div className="form-check show-check-items">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={showScoresComponent}
                                    name="showScoresComponent"
                                    id="defaultCheck1"
                                    onChange={handleInputChange}
                                    ref={(input) =>
                                        (this.inputElement3 = input)
                                    }
                                />
                                <label
                                    className="form-check-label show-check-labels"
                                    htmlFor="exampleCheck1"
                                    id="label3"
                                    onClick={handleClick}
                                >
                                    Metric Summary
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* <div className="bs-example" style={{ clear: "both" }}>
                        <div
                            className="alert alert-warning alert-dismissible fade show"
                            role="alert"
                        >
                            <strong>Todo:</strong> &nbsp;
                            <ul>
                                <li>- Use Redux to track</li>
                                <li>- Add Authentication</li>
                            </ul>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div> */}
                </Header>
                {showScoresComponent && <ScoresComponent />}
                {showMetricCharts && <MetricsAndSummary />}
                <Tour
                    steps={steps}
                    isOpen={isTourOpen}
                    accentColor="#0e9168"
                    // showCloseButton={false}
                    rounded={8}
                    closeWithMask={false}
                    nextButton={
                        <button type="button" className="btn btn-primary">
                            Next step
                        </button>
                    }
                    onRequestClose={() => setIsTourOpen(false)}
                />
                {/* {showSalesBreakdown && <SalesBreakdown />} */}
            </div>
        );
    }
}

export default Dashboard;
