import { useState } from 'react'
import {
  BrowserRouter as Router ,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import MenyuPagesTitle from './MenyuPagesTitle/MenyuPagesTitle'
import NewAnnouncements from './NewAnnouncements/NewAnnouncements'
import BestOffer from './BestOffer/BestOffer'
import FooterContainer from '../FooterContainer/FooterContainer'
import './MenyuPages.css'
const MenyuPages = () => {
  const [activPage, setActivPage] = useState('new-announcements')
  return (
    <Router>
      <div className="product-wrapper">
        <Link to="/" onClick={()=> setActivPage('new-announcements')}>
          <MenyuPagesTitle title="Новые объявления" active={activPage == 'new-announcements'}/>
        </Link>
        <Link to="/newAnnouncements" onClick={()=> setActivPage('best-offer')}>
          <MenyuPagesTitle title="Лучщие предложение" active={activPage == 'best-offer'}/>
        </Link>
      <Switch>
        <Route exact path="/" component={NewAnnouncements}/>
        <Route path="/newAnnouncements" component={BestOffer}/>
      </Switch>
      <FooterContainer/>
      </div>
    </Router>
  )
}
export default MenyuPages