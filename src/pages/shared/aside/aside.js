import Apple from '../../../assets/icons/app-store.svg'
import Google from '../../../assets/icons/google-play.svg'
const Aside = () => {
    return (
        <aside className="aside">
            <h2>
                Sign up and Scoot off today
            </h2>
            <div className="aside__deco">
                <img className="google" src={Google} alt="" />
                <img className="apple" src={Apple} alt="" />
            </div>
        </aside>
    )
}

export default Aside