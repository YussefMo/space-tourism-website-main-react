import bars from '../../../assets/shared/icon-hamburger.svg'

function NavBar ({ onClick }) {
    return (
        <img role='button' onClick={onClick} src={bars} alt="nav" />
    )
}

export default NavBar;