function NavButton ({ num , name , active , setActive }) {

    return (
        <button 
        className={active === num ? 'active-nav' : ''}
        onClick={()=>setActive(num)} >
            {`0${num}`} {name}
        </button>
    )
}

export default NavButton