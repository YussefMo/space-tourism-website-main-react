function NumNav ({ num , onClick , active }) {
    return (
        <button
        className={active ? 'num-nav active' : 'num-nav'}
        onClick={onClick}
        >
            {num}
        </button>
    )
}

export default NumNav;