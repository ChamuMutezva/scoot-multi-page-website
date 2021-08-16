import SecondaryCard from '../../shared/main/cardSec'
import Careers from '../../../assets/images/join-us.jpg'

const Main = () => {
    return (
        <main className="main main__careers">
            <section className="secondary"
                role="contentinfo"
                aria-label="partner with us through our career offers">
                <h2 className="secondary__title sr-only">Careers</h2>
                <div className="secondary__cards secondary__cards__about">
                    <SecondaryCard src={Careers}
                        title="Care to join our mission?"
                        alt=""
                        content="We’re always looking for ambitious individuals to help us on our journey. If you’re 
                        passionate about our mission to provide clean, accessible transport to improve urban 
                        living we want to hear from you!" />
                </div>
                Say Hello
            </section>
        </main>
    )
}
export default Main