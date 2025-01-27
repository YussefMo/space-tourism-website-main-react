function DesNav ({  name , onClick , active }) {

    return(
        <button
        className={active? 'des-active' : ''}
        onClick={onClick}>
            {name}
        </button>
    )
}

export default DesNav;