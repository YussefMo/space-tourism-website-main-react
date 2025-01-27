import Box from "../UI/Box/Box";
import RightBox from '../UI/box/RightBox';
import LeftBox from '../UI/box/LeftBox';
import NumNav from "./NumNav";
import Lunch from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import Spaceport from '../../assets/technology/image-spaceport-portrait.jpg'
import SpaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg'
import LunchLand from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import SpaceportLand from '../../assets/technology/image-spaceport-landscape.jpg'
import SpaceCapsuleLand from '../../assets/technology/image-space-capsule-landscape.jpg'
import './Tech.css'
import { useState, useEffect } from "react";
const technology = [
    {
        name: "LAUNCH VEHICLE",
        images: `${Lunch}`,
        landscape: `${LunchLand}`,
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        name: "SPACEPORT",
        images: `${Spaceport}`,
        landscape: `${SpaceportLand}`,
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        name: "SPACE CAPSULE",
        images: `${SpaceCapsule}`,
        landscape: `${SpaceCapsuleLand}`,
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]

function Tech() {
    const [index, setIndex] = useState(0)
    const [width1, setWidth1] = useState(window.innerWidth)
    const breakpoint1 = 768
    useEffect(() => {
        const handleResizeWindow = () => setWidth1(window.innerWidth)
        window.addEventListener("resize", handleResizeWindow)
        return () => {
            window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])


    return (
        <>
            {width1 > breakpoint1 ? (
                <Box className="tech-tab">
                    <LeftBox className={'tech-cont'}>
                        <Box className={'head'}>
                            <p><span>03 </span> SPACE LAUNCH 101</p>
                        </Box>
                        <LeftBox className={'nav-tech'}>
                            {technology.map((_, i) => {
                                return (
                                    <NumNav
                                        key={i}
                                        active={i === index}
                                        onClick={() => setIndex(i)}
                                        num={i + 1} />
                                )
                            })}
                        </LeftBox>
                        <RightBox className={'cont'}>
                            <h1>THE TERMINOLOGY…</h1>
                            <h1>{technology[index].name}</h1>
                            <p>{technology[index].description}</p>
                        </RightBox>
                    </LeftBox>
                    <RightBox className={'tech-img'}>
                        <img src={technology[index].images} alt={technology[index].name} />
                    </RightBox>
                </Box>
            ) : (
                <Box className="tech-tab">
                    <LeftBox className={'tech-img'} >
                        <Box className={'head'}>
                            <p><span>03 </span> SPACE LAUNCH 101</p>
                        </Box>
                        <img src={technology[index].landscape} alt={technology[index].name} />
                    </LeftBox>
                    <RightBox className={'tech-cont'}>
                        <LeftBox className={'nav-tech'}>
                            {technology.map((_, i) => {
                                return (
                                    <NumNav
                                        key={i}
                                        active={i === index}
                                        onClick={() => setIndex(i)}
                                        num={i + 1} />
                                )
                            })}
                        </LeftBox>
                        <RightBox className={'cont'}>
                            <h1>THE TERMINOLOGY…</h1>
                            <h1>{technology[index].name}</h1>
                            <p>{technology[index].description}</p>
                        </RightBox>
                    </RightBox>
                </Box>
            )}
        </>
    )
}

export default Tech