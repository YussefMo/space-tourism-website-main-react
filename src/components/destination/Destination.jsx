import Box from "../UI/Box/Box";
import RightBox from '../UI/box/RightBox';
import LeftBox from '../UI/box/LeftBox';
import Moon from "../../assets/destination/image-moon.webp"
import Mars from "../../assets/destination/image-mars.webp"
import Europa from "../../assets/destination/image-europa.webp"
import Titan from "../../assets/destination/image-titan.webp"
import DesNav from "./DesNav";
import './Destination.css'
import { useState } from "react";
const destinations = [
    {
        id: 1,
        name: "MOON",
        images: `${Moon}`,
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days"
    },
    {
        id: 2,
        name: "MARS",
        images: `${Mars}`,
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months"
    },
    {
        id: 3,
        name: "EUROPA",
        images: `${Europa}`,
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years"
    },
    {
        id: 4,
        name: "TITAN",
        images: `${Titan}`,
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years"
    }
]

function Destination() {
    const [index, setIndex] = useState(0)
    return (
        <Box className={'destination'}>
            <LeftBox className={'des-img'}>
                <p>
                    <span>01</span> PICK YOUR DESTINATION
                </p>
                <img src={destinations[index].images} alt={destinations[index].name} />
            </LeftBox>
            <RightBox className={'des-cont'}>
                {destinations.map((data, i) => (
                    <DesNav
                        key={i}
                        name={data.name}
                        active={index === i}
                        onClick={() => setIndex(i)}
                    />
                ))}
                <h1>{destinations[index].name}</h1>
                <p>{destinations[index].description}</p>
                <Box className={'stats'}>
                    <RightBox className={'special'}>
                        <p>AVG. DISTANCE</p>
                        <span>{destinations[index].distance}</span>
                    </RightBox>
                    <LeftBox className={"special"}>
                        <p>Est. travel time</p>
                        <span>{destinations[index].travel}</span>
                    </LeftBox>
                </Box>
            </RightBox>
        </Box>
    )
}

export default Destination;