import "./styles/Header.css";

function Header({ heading, children }) {
    return (
        <div
            className="header"
            style={{
                position: "relative",
            }}
        >
            <div className="mb-12">
                {/* <input
                    type="text"
                    class="form-control global-search-bar"
                    id="validationDefault01"
                    value="Type here to search"
                    required
                /> */}
            </div>
            <h1>{heading}</h1>
            {children}
        </div>
    );
}

export default Header;
