import Header from '../../shared/header/header'
import Main from './main'
const MainAbout = () => {
    return(
        <div>
            <Header title="About" about={true}/>
            <Main />
        </div>
    )
}
export default MainAbout