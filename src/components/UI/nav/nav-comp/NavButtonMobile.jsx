function NavButtonMobile ({ num , name , active , setActive , setShowMenu = ''  }) {

    return (
        <button 
        className={active === num ? 'active-nav' : ''}
        onClick={()=>{setActive(num); setShowMenu(false);}} >
            {`0${num}`} {name}
        </button>
    )
}

export default NavButtonMobile