//import { useState} from 'react'
import SecondaryCard from '../../shared/main/cardSec'
import BetterLiving from '../../../assets/images/better-living.jpg'
import DigitalEra from '../../../assets/images/digital-era.jpg'

import Tech from '../../../assets/images/our-tech.jpg'
import Integrity from '../../../assets/images/our-integrity.jpg'
import Community from '../../../assets/images/our-community.jpg'

import Card from '../../shared/main/card'


const Main = () => {

    //  const [show, setShow] = useState(false)

    const handleSubmit = (evt) => {
        const btn = evt.target
        btn.classList.toggle("collapsed")
        const targetData = evt.target.dataset.bsTarget
        const targetElement = document.querySelector(targetData)

        targetElement.classList.toggle("show")
        // get all targets elements in the accordion
        const allTargets = Array.from(document.querySelectorAll(".accordion-collapse"))
        const targetDataId = targetData.substring(1) //get the id of the clicked element
        console.log(allTargets)
        console.log(targetDataId)
        /*  allTargets.forEach(elm => {
              console.log(elm.id)
              if (elm.id === targetDataId) {
                  elm.classList.toggle("show")
              } else {
                  elm.classList.remove("show")
              }
          })*/
    }
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

            <section className="accordion__section">
                <h2 className="accordion__section__heading">
                    faqs
                </h2>
                <div className="accordion__wrapper">
                    <div className="accordion__title__wrapper">
                        <h3 className="accordion__title">How it works</h3>
                    </div>
                    <div className="accordion" id="accordionExample">
                        {/*ACCORDION ITEM ONE */}
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingOne">
                                <button className="accordion-button"
                                    onClick={handleSubmit}
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How do I download the app?
                                </button>
                            </h4>

                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    To download the Scoot app, you can search “Scoot” in both the App and Google Play stores.
                                    An even simpler way to do it would be to click the relevant link at the bottom of this
                                    page and you’ll be re-directed to the correct page.
                                </div>
                            </div>
                        </div>
                        {/********* ACCORDION ITEM ONE END******** */}

                        {/*ACCORDION ITEM TWO */}
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingTwo">

                                <button className="accordion-button collapsed"
                                    onClick={handleSubmit} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Can I find a nearby Scoots?
                                </button>
                            </h4>

                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Definitely! Simply open up the app and allow us to find your location while using it. We'll
                                    show you all of the closest Scoots and some extra useful information.
                                </div>
                            </div>
                        </div>
                        {/***************ACCORDION ITEM TWO END*************** */}

                        {/*ACCORDION ITEM THREE */}
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed"
                                    onClick={handleSubmit} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Do I need a license to ride?
                                </button>
                            </h4>

                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yup! We provide information inside the app regarding local laws and the license you need to be
                                    able to ride our Scoots.
                                </div>
                            </div>
                        </div>
                        {/************ACCORDION ITEM THREE END********* */}
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Main













