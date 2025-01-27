import logo from "../../../../assets/shared/logo.svg"

function Logo ({ onClick }) {
    return(
        <span onClick={onClick}>
            <img src={logo} alt="logo" />
        </span>
    )
}

export default Logo