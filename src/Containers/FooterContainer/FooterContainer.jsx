import { Logoo, LogoGoogle, LogoGoogle1} from '../../assets/Icons/Icons'
import './FooterContainer.css'

const FooterContainer = () => {
  return (
    <div className="footer-container">
      <div className="logo-paragraph">
        <Logoo/>
        <p className="footer-paragraph1">Продай, найди, купи все что ты пожелаешь </p>
      </div>
      <p className="footer-paragraph">Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления</p>
      <div>
        <span className="logo-span">
          <LogoGoogle/>
        </span>
        <LogoGoogle1/>
      </div>
    </div>
  )
}
export default FooterContainer