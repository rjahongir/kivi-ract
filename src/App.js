import { useState } from 'react'
import {
  BrowserRouter as Router ,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Containers/HeaderContainer/Header'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import './assets/main.css'
const App = () => {
  const [activPageHeader, SetActivPageHeader] = useState('')
  return (
    <Router >
        <div className="app">
     <Header pageHeader={activPageHeader} SetPageHeader={SetActivPageHeader}/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/register" component={Register}/>
     </Switch>
    </div>
    </Router>
  );
}
export default App;
