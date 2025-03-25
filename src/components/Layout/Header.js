import Logo from "../UI/Logo";
import HeaderCartButton from "./HeaderCartButton";
import "./header.css"

const Header = (props) => {
    return (
        <header className="header">
            <Logo />
            <HeaderCartButton onClick={props.onClick} />
        </header>
    )
}

export default Header;