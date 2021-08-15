import SecondaryCard from '../../shared/main/cardSec'
import BetterLiving from '../../../assets/images/better-living.jpg'
import DigitalEra from '../../../assets/images/digital-era.jpg'

import Tech from '../../../assets/images/our-tech.jpg'
import Integrity from '../../../assets/images/our-integrity.jpg'
import Community from '../../../assets/images/our-community.jpg'

import Card from '../../shared/main/card'

const Main = () => {
    return (
        <main className="main main__about">
            <section className="secondary"
                role="contentinfo"
                aria-label="our products and services">
                <h2 className="secondary__title sr-only">Our services are here for you</h2>

                <div className="secondary__cards secondary__cards__about">
                    <SecondaryCard src={DigitalEra}
                        alt="a client familializing with the mobile app"
                        title="Mobility for the digital era"
                        learnBtnHide={true}
                        content="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips." />
                    <SecondaryCard src={BetterLiving} alt="a scooter as work in an urban area"
                        title="Better urban living"
                        learnBtnHide={true}
                        content="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride." />
                </div>

            </section>

            <section className="primary"
                role="contentinfo"
                aria-label="What we stand for and value most">

                <h2 className="primary__title">Our values</h2>
                <div className="cards">

                    <Card src={Tech} title="Our tech"
                        largeCard={true}
                        largeCardWrapper={true}
                        cardAbout={true}
                        content=" We’re using cutting edge technology to drive accessible urban
                         transportation forward. Our fully electric scooters are a joy to ride!" />

                    <Card src={Integrity} title="Our integrity"
                        largeCard={true}
                        largeCardWrapper={true}
                        cardAbout={true}
                        content="We are fully committed to deliver a great yet safe, sustainable
                         micro-mobility experience in every city we serve."/>

                    <Card src={Community} title="Our community"
                        largeCard={true}
                        largeCardWrapper={true}
                        cardAbout={true}
                        content=" We support every community we serve. All workers are paid a 
                        living wage based on their location and are Scoot employees."/>


                </div>

            </section>
        </main>
    )
}
export default Main




