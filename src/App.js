//import logo from './logo.svg';
import { BrowserRouter as Router,  Switch,  Route,  /*Link*/} from "react-router-dom";
import Navigation from './pages/shared/header/navigation'
import MainAbout from './pages/about/main/main'
import MainCareers from './pages/careers/main/main'
import MainHome from './pages/home/main/main'
import MainLocation from './pages/locations/main/main'

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
      </Router>
    </div>
  );
}

export default App;
