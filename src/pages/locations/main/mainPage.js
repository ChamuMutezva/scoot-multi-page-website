import Header from '../../shared/header/header'
import Main from './main'
const MainLocation = () => {
    return(
        <div>
            <Header title="Loacation" location={true}/>
            <Main />
        </div>
    )
}
export default MainLocation