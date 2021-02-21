import { Inventory2 } from "@styled-icons/material-outlined/Inventory2";

import { Header, EmptyState, SidePullUp } from "../components";

import "./styles/ProductsAndServies.css";

function ProductsAndServies() {
    return (
        <>
            <div className="sales-container-div">
                <Header heading="Products"></Header>
                <EmptyState
                    heading="You have no products yet"
                    headingIcon={<Inventory2 size={48} color="#DDDDDD" />}
                >
                    <p>
                        Let's help you begin tracking your sales by adding a
                        product or service below.
                    </p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-trigger="#side-menu"
                    >
                        Add a Product
                    </button>
                </EmptyState>
            </div>
            <SidePullUp
                heading="Make a Sale"
                infoParagraph="You will soon be able to add products"
            ></SidePullUp>
        </>
    );
}

export default ProductsAndServies;
