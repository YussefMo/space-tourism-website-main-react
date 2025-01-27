import close from '../../../assets/shared/icon-close.svg'

function NavClose({ onClick }) {
    return (
        <img className='x' role='button' onClick={onClick} src={close} alt="X" />
    )
}

export default NavClose;