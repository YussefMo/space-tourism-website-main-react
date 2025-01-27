import './Home.css'
import Box from '../UI/Box/Box';
import LeftBox from '../UI/box/LeftBox';
import RightBox from '../UI/box/RightBox';

function Home({ onClick }) {
    return (
        <Box className={'home'}>
            <LeftBox className='home-text'>
                <h4>
                    So, you want to travel to
                </h4>
                <h1>
                    Space
                </h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </LeftBox>
            <RightBox className='home-button'>
                <button onClick={onClick}>
                    <h1>
                        EXPLORE
                    </h1>
                </button>
            </RightBox>
        </Box>
    )
}

export default Home;