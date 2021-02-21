import { Link } from "react-router-dom";

import { PhoneCallOutline } from "@styled-icons/evaicons-outline/PhoneCallOutline";

import { Header, EmptyState } from "../components";

import "./styles/CallHistory.css";

function CallHistory() {
    return (
        <div className="call-history-div">
            <Header heading="Call History"></Header>
            <EmptyState
                heading="You have not made any calls"
                headingIcon={<PhoneCallOutline size={48} color="#DDDDDD" />}
            >
                <p>When you make a call, it will get logged here.</p>
                <Link to="/contacts" className="link-button">
                    <button type="button" className="btn btn-primary">
                        Make a Call
                    </button>
                </Link>
            </EmptyState>
        </div>
    );
}

export default CallHistory;
