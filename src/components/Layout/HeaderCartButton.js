import "./headerCartButton.css";

const HeaderCartButton = (props) => {
    return (
        <button className="btn btn-header" onClick={props.onClick}>
            <span>Your Cart</span>
            <span className="badge">0</span>
        </button>
    )
}

export default HeaderCartButton;