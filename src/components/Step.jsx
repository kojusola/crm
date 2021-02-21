function Step({ heading, body }) {
    return (
        <div>
            <h5>{heading}</h5>
            {body.map((item, id) => {
                return <p key={id}>{item}</p>;
            })}
        </div>
    );
}

export default Step;
