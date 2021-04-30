import './MenyuBtn.css'
const MenyuBtn = ({title, bgColor, iconka}) => {
  return (
    <div className="menyu-btn-wrapper">
      <button className={`menyu-btn ${bgColor}`}>
        {iconka}
      </button>
      <p className="menyu-title">{title}</p> 
    </div>
  )
}
export default MenyuBtn