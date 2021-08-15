import SecondaryCard from '../../shared/main/cardSec'
import BetterLiving from '../../../assets/images/better-living.jpg'
import DigitalEra from '../../../assets/images/digital-era.jpg'
const Main = () => {
    return (
        <main>
            <section className="secondary" role="contentinfo" aria-label="our products and services">
                <h2 className="secondary__title sr-only">Our services are here for you</h2>
               
                <div className="secondary__cards secondary__cards__about">
                    <SecondaryCard src={DigitalEra}
                                   alt="a client familializing with the mobile app"
                                   title="Mobility for the digital era"
                                   learnBtnHide={true}
                                   content="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."/>
                    <SecondaryCard src={BetterLiving} alt="a scooter as work in an urban area"
                                   title="Better urban living"
                                   learnBtnHide={true}
                                   content="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."/>
                </div>

            </section>
        </main>
    )
}
export default Main




