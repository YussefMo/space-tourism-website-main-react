function LeftBox ({ children , className ='' }) {
    return(
        <div className={`left ${className}`}>
            {children}
        </div>
    )
}

export default LeftBox