import "./headerCartButton.css";

const HeaderCartButton = () => {
    return (
        <button className="btn btn-header">
            <span>Your Cart</span>
            <span className="badge">0</span>
        </button>
    )
}

export default HeaderCartButton;