import Button from "../Component/Button"
import ImageOne from '../assets/images/client-databiz.svg'
import ImageTwo from '../assets/images/client-audiophile.svg'
import ImageThree from '../assets/images/client-meet.svg'
import ImageFour from '../assets/images/client-maker.svg'
import HeroImage from '../assets/images/image-hero-desktop.png'
import './Hero.css'
const Hero = () => {
    return(
        <main>
            <section className="LeftHero">
            <h1>Make Remote <br /> Work</h1>
            <p> Get your team in sync, no matter your location. <br />
                Streamlineprocesses,create team rituals, and watch <br /> productivity soar.
            </p>
            <Button/> <br />
            <img src={ImageOne} alt=""/>
            <img src={ImageTwo} alt="" />
            <img src={ImageThree} alt="" />
            <img src={ImageFour} alt="" />

            </section>

            <section className="RightHero">
                <img src={HeroImage} id="HeroImage" alt=""/>
            </section>


        </main>
    )
}

export default Hero