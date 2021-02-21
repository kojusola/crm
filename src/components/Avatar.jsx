import "./styles/Avatar.css";

function Avatar(props) {
    if (props.img_url) {
        return <img src={props.img_url} alt="Avatar" className="avatar" />;
    }

    return <div className="avatar div-avatar"></div>;
}

export default Avatar;
