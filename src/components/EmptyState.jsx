import "./styles/EmptyState.css";

function EmptyState({ heading, headingIcon, children }) {
    return (
        <div className="emptystate-div">
            <p>{headingIcon}</p>
            <h3>{heading}</h3>
            {children}
        </div>
    );
}

export default EmptyState;
