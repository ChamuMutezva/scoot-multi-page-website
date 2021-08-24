import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";

const Card = (props) => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        gsap.to(".card", {
            scrollTrigger: {
                trigger: ".card",
               start: "top top",
               end: "bottom center",
               scrub: true
            }
            
        })

    })

    const smallCard = props.smallCard ? "small__card" : ""
    const largeCard = props.largeCard ? "large__card" : ""
    const cardSpan = props.largeCardWrapper ? "large__card__wrapper" : ""
    const cardAbout = props.cardAbout ? "card__about" : ""
    return (
        <div className={`card ${cardAbout}`}>
            <div className={`card__wrapper ${cardSpan}`}>
                <img className={`card__img ${smallCard} ${largeCard}`}
                    src={props.src} alt="" />
            </div>

            <div className="card__splitter">
                <h3 className="card__title">{props.title}</h3>
                <p className="card__content">{props.content} </p>
            </div>
        </div>
    )
}
export default Card