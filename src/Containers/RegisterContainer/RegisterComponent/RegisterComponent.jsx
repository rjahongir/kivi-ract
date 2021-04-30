import registerImg from '../../../assets/img/registratsiya.png'
import './RegisterComponent.css'
const RegisterComponent = () => {
  return (
    <div className="register-wrapper">
        <form className="register-form">
        <h3 className="register-form-title">Бесплатная регистрация</h3>
        <input className="register-form-input" type="text" placeholder="Темиров Зухриддин"/>
        <button className="register-form-button">Далее</button>
        <hr/>
        <p className="register-form-paragraph">Войдите в систему, если у вас уже есть аккаунт kivi.uz</p>
        </form>
      <img src={registerImg}/>
    </div>
  )
}
export default RegisterComponent