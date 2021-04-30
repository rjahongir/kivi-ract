import './HeaderBtn.css'
const HeaderBtn = ({title, className, activ}) => {
  return (
      <button className={`${className} ${activ? 'activeHeader': ''}`}>{title}</button>
  )
}
export default HeaderBtn