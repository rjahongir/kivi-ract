import { Link } from 'react-router-dom'
import HeaderBtn from './/Header/HeaderBtn'
import HeaderBottomSelect from './HeaderBottomSelect/HeaderBottomSelect'
import {Logo} from '../../assets/Icons/Icons'
import './Header.css'
const Header = ({pageHeader,SetPageHeader}) => {
  return (
    <div>
      <div className="header">
      <Logo/>
      <div className="header_button-wrapper">
        <div>
        <HeaderBtn title="Рус" className="header_btn btn-language btn-ru"/>
        <HeaderBtn title="Ozb" className="header_btn btn-language"/>
        </div>
        <div>
        <Link to="/" onClick={()=> SetPageHeader('exit')}>
          <HeaderBtn
            title="Вход"
            className="header_btn btn-input-output btn-exit"
            activ={pageHeader == 'exit'}
          />
        </Link>
        <Link to="/register" onClick={()=> SetPageHeader('register')}>
          <HeaderBtn
            title="Регистрация"
            className="header_btn btn-input-output"
            activ={pageHeader == 'register'}
          />
        </Link>
        </div>
      </div>
    </div>
      <HeaderBottomSelect/>
    </div>
  )
}

export default Header