//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route,  /*Link*/ } from "react-router-dom";
import Navigation from './pages/shared/header/navigation'
import MainAbout from './pages/about/main/mainPage'
import MainCareers from './pages/careers/main/mainPage'
import MainHome from './pages/home/main/mainPage'
import MainLocation from './pages/locations/main/mainPage'
import Aside from "./pages/shared/aside/aside";
import Footer from "./pages/shared/footer/footer";

import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>

          <Route exact path='/'>
            <MainHome />
          </Route>
          <Route path='/About'>
            <MainAbout />
          </Route>
          <Route path='/Careers'>
            <MainCareers />
          </Route>
          <Route path='/Location'>
            <MainLocation />
          </Route>
        </Switch>
        <Aside />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
