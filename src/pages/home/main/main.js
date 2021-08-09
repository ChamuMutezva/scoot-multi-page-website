import Locate from '../../../assets/icons/locate.svg'
import Ride from '../../../assets/icons/ride.svg'
import Scooter from '../../../assets/icons/scooter.svg'
import Card from '../../shared/main/card'

const Main = () => {
    return (
        <main>
            <section className="primary">
                <h2 className="primary__title sr-only">How the application works?</h2>
                <div className="cards">

                    <Card src={Locate} title="Locate with app"
                        content="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away." />

                    <Card src={Ride} title="Pick your scooter"
                        content="We show the most important info for the scooters closest to you.So you know how much
                            charge they have left and can see roughly how much it will cost." />

                    <Card src={Scooter} title="Enjoy the ride"
                        content="Scan the QR code and the bike will unlock.Retract the cable lock, put on a helmet,
                            and you’re off! Always lock bikes away from walkways and accessibility ramps." />


                </div>
            </section>
        </main>
    )
}
export default Main












