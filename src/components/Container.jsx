import { useEffect, useState } from "react";
import Nav from "./UI/nav/Nav";
import Logo from "./UI/nav/nav-comp/Logo";
import NavButton from "./UI/nav/nav-comp/NavButton";
import NavButtonMobile from "./UI/nav/nav-comp/NavButtonMobile";
import Box from "./UI/Box/Box";
import NavBar from "./UI/nav-icon/NavBar";
import NavClose from "./UI/nav-icon/NavClose";
import Home from "./Home/Home";
import Destination from "./destination/Destination";
import Crew from "./crew/Crew";
import Tech from "./tech/Tech";

function Container() {
    const [active, setActive] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 480
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResizeWindow)
        return () => {
            window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])

    function switchTabHandler (num) {
        setActive(num)
        setShowMenu(false)
    }

    return (
        <>
            {width > breakpoint ? (
                <Nav>
                    <Logo onClick={() => setActive(0)} />
                    <Box className={'nav-button'}>
                        <NavButton num={0} name={'HOME'} active={active} setActive={setActive} />
                        <NavButton num={1} name={'DESTINATION'} active={active} setActive={setActive} />
                        <NavButton num={2} name={'CREW'} active={active} setActive={setActive} />
                        <NavButton num={3} name={'TECHNOLOGY'} active={active} setActive={setActive} />
                    </Box>
                </Nav>
            ) : (
                <Nav>
                    <Logo onClick={() => setActive(0)} />
                    <NavBar onClick={() => setShowMenu(true)} />
                    <Box className={showMenu ? 'nav-button appear' : 'nav-button'}>
                        <Box className={'button-container'}>
                            <NavClose onClick={() => setShowMenu(false)} />
                            <NavButtonMobile
                                num={0}
                                name={'HOME'}
                                active={active}
                                setActive={setActive}
                                setShowMenu={setShowMenu}/>
                            <NavButtonMobile
                                num={1}
                                name={'DESTINATION'}
                                active={active}
                                setActive={setActive}
                                setShowMenu={setShowMenu}/>
                            <NavButtonMobile
                                num={2}
                                name={'CREW'}
                                active={active}
                                setActive={setActive}
                                setShowMenu={setShowMenu}/>
                            <NavButtonMobile
                                num={3}
                                name={'TECHNOLOGY'}
                                active={active}
                                setActive={setActive}
                                setShowMenu={setShowMenu}/>
                        </Box>
                    </Box>
                </Nav>
            )}
            {active === 0 && <Home onClick={() => setActive(1)} />}
            {active === 1 && <Destination />}
            {active === 2 && <Crew />}
            {active === 3 && <Tech />}
        </>
    )
}

export default Container;