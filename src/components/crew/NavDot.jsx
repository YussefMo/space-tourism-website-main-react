function NavDot ({ active = false , onClick }) {
    return (
        <span
        role="button" 
        className={active ? 'active dot' : 'dot'}
        onClick={onClick}>
        </span>
    )
}

export default NavDot;