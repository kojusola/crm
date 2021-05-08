import "./styles/Input.css";

const Input = (props) => {
    return (
        <div className="form-group">
            <label 
                htmlFor={props.name} 
                className="form-label text-secondary"
            >
                <span className="text-danger">*</span> 
                {props.title}
            </label>
            <input
                className="form-control"
                name= {props.name}
                id={props.name}
                type={props.input}
                placeholder= {props.placeholder}
            />
        </div>
    )
};
export default Input;