import MapMobile from '../../../assets/images/world-map-mobile.png'
import MapTablet from '../../../assets/images/world-map-tablet.png'
import MapDesktop from '../../../assets/images/world-map-desktop.png'

const Main = () => {
    return (
        <main className="main main__location">
            <section className="primary"
                role="contentinfo"
                aria-label="our areas of business worldwide">

                <h2 className="sr-only">the world map showing our areas of operating</h2>

                <div className="maps">
                    <div className="map__image">
                        <picture>
                            <source media="(min-width: 67rem)" srcset={MapDesktop} />
                            <source media="(min-width: 38rem)" srcset={MapTablet} />
                            <img src={MapMobile} alt="we operate in several cities on the globe" srcset={MapMobile} />
                        </picture>
                    </div>
                    <div className="location__select">
                        <div className="city new__york">New York</div>
                        <div className="city london">London</div>
                        <div className="city yokohama">Yokohama</div>
                        <div className="city jakarta">Jakarta</div>
                    </div>
                </div>

            </section>
        </main>
    )
}
export default Main