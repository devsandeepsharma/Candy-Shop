import Button from "../UI/Button";
import Logo from "../UI/Logo";
import HeaderCartButton from "./HeaderCartButton";
import "./header.css"

const Header = (props) => {
    return (
        <header className="header">
            <Logo />
            <Button 
                className="btn-header" 
                onClick={props.onAddButtonClick}
            >
                Add <span className="btn-add">+</span>
            </Button>
            <HeaderCartButton onClick={props.onCartButtonClick} />
        </header>
    )
}

export default Header;