import IntersectionImage from 'react-intersection-image'
import logo from '../assets/logo.svg'
import heroLeft from '../assets/illustration-hero-left.svg'
import heroRight from '../assets/illustration-hero-right.svg'
import Heroimg from '../components/Heroimg'
import iconScroll from '../assets/icon-scroll.svg'

const Header = () => {
    return (
        <header>
            <nav>
                <img className="logo" src={logo} alt="maker logo" />
            </nav>
            <div className="hero">
                <div className="left__panel">
                    <Heroimg  src={heroLeft} alt="left side panel" />
                </div>
                <div className="right__panel">
                    <Heroimg   src={heroRight} alt="right side panel" />
                </div>
                <div className="hero__text">
                    <h1 className="hero__text__title">
                        Get paid for the work you <span>love</span> to do.
                    </h1>
                    <p className="hero__text__main">
                        The 9-5 grind is so last century. We believe in living life on your
                        own terms. Whether you’re looking to escape the rat race or set up
                        a side hustle, we’ve got you covered.
                    </p>
                    <IntersectionImage className="image__scroll" src={iconScroll}
                    style={{ transition: 'opacity 500ms linear' }} alt="icon scroll" />
                </div>
            </div>
        </header>
    )
}
export default Header
