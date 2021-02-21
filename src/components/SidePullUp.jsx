import React from "react";
import $ from "jquery";

import "./styles/SidePullUp.css";

class SidePullUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        $("[data-trigger]").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id = $(this).attr("data-trigger");
            $(offcanvas_id).toggleClass("show");
            $("body").toggleClass("offcanvas-active");
            $(".screen-overlay").toggleClass("show");
        });

        $(".btn-close, .screen-overlay").click(function (e) {
            $(".screen-overlay").removeClass("show");
            $(".offcanvas").removeClass("show");
            $("body").removeClass("offcanvas-active");
        });
    }

    render() {
        const { heading, children, infoParagraph } = this.props;

        return (
            <>
                <b className="screen-overlay"></b>
                <aside className="offcanvas" id="side-menu">
                    <header className="p-4 bg-light border-bottom side-menu-header">
                        <h4 className="top-side-heading">{heading}</h4>
                        <button className="btn btn-danger btn-close">
                            Close
                        </button>
                        {/* <h6 className="mb-0">First offcanvas </h6> */}
                    </header>
                    <div className="side-menu-div">
                        <p className="info-p">{infoParagraph}</p>
                        {children}
                    </div>
                </aside>
            </>
        );
    }
}

export default SidePullUp;
