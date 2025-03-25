import Logo from "../UI/Logo";
import HeaderCartButton from "./HeaderCartButton";
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <HeaderCartButton />
        </header>
    )
}

export default Header;