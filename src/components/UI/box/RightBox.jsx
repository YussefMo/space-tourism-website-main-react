function RightBox ({ children , className = '' }) {
    return(
        <div className={`right ${className}`}>
            {children}
        </div>
    )
}

export default RightBox;