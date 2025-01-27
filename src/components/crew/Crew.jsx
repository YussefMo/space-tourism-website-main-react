import Box from "../UI/Box/Box";
import RightBox from '../UI/box/RightBox';
import LeftBox from '../UI/box/LeftBox';
import Douglas from '../../assets/crew/image-douglas-hurley.webp'
import Mark from '../../assets/crew/image-mark-shuttleworth.webp'
import Victor from '../../assets/crew/image-victor-glover.webp'
import Anousheh from '../../assets/crew/image-anousheh-ansari.webp'
import NavDot from "./NavDot";
import './Crew.css'
import { useState } from "react";

const crewArr = [
    {
        name: "Douglas Hurley",
        images: `${Douglas}`,
        role: "COMMANDER",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        name: "Mark Shuttleworth",
        images: `${Mark}`,
        role: "MISSION SPECIALIST",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        name: "Victor Glover",
        images: `${Victor}`,
        role: "PILOT",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        name: "Anousheh Ansari",
        images: `${Anousheh}`,
        role: "FLIGHT ENGINEER",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]

function Crew() {
    const [index, setIndex] = useState(0)
    return (
        <Box className="crew">
            <LeftBox className={'crew-cont'}>
                <Box className="head">
                    <p><span>02</span> MEET YOUR CREW</p>
                </Box>
                <Box className="body">
                    <h1>{crewArr[index].role}</h1>
                    <h1>{crewArr[index].name}</h1>
                    <p>{crewArr[index].bio}</p>
                </Box>
                <Box className="nav">
                    {crewArr.map((_, i) => {
                        return <NavDot key={i} active={i === index} onClick={() => setIndex(i)} />
                    })}
                </Box>
            </LeftBox>
            <RightBox className={'crew-img'}>
                <img src={crewArr[index].images} alt={crewArr[index].name} />
            </RightBox>
        </Box>
    )
}

export default Crew