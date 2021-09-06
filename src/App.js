import LeftBar from "./components/LeftBar";
import RightBars from "./components/RightBars";
import {Route,Switch} from 'react-router-dom'
import './style/app.css'
import InputsSection from "./components/InputsSection";


function App() {
  return (
    <div className="App">
      <LeftBar/>
          <Switch>
            <Route exact path='/' component={RightBars} >
            </Route>
            <Route exact path='/add' component={InputsSection} />
          </Switch>
    </div>
  );
}

export default App;
