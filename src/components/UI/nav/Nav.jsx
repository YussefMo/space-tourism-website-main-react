import './Nav.css'

function Nav({ children }) {
    return (
        <>
            <nav>
                {children}
            </nav>
        </>
    )
}

export default Nav