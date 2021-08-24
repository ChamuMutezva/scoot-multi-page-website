import { useRef, useEffect } from 'react'
import Main from '../main/main.js'
import Header from '../../shared/header/header'
const MainCareers = () => {
    const careersMain = useRef()

    useEffect(() => {
        careersMain.current.focus()
    })
    return(
        <div tabIndex="-1" ref={careersMain}>
            <Header title="Careers" careers={true}/>
            <Main />
        </div>
    )
}
    
   
export default MainCareers