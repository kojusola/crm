import { PointOfSale } from "@styled-icons/material/PointOfSale";

import { Header, EmptyState, SidePullUp } from "../components";

import "./styles/Sales.css";

function Sales() {
    return (
        <>
            <div className="sales-container-div">
                <Header heading="Sales"></Header>
                <EmptyState
                    heading="You have not made any sale"
                    headingIcon={<PointOfSale size={48} color="#DDDDDD" />}
                >
                    <p>When you make a sale, it will get recorded here.</p>
                    <button
                        type="button"
                        className="btn btn-primary empty-action-btn"
                        data-trigger="#side-menu"
                    >
                        Make a Sale
                    </button>
                </EmptyState>
            </div>
            <SidePullUp
                heading="Make a Sale"
                infoParagraph="You will soon be able to make sales."
            ></SidePullUp>
        </>
    );
}

export default Sales;
