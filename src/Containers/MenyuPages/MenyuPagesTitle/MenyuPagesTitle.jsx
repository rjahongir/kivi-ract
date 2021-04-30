import './MenyuPagesTitle.css'
const MenyuPagesTitle = ({title,active}) => {
  return (
    <button className={`product ${active? 'active': ''}`}>{title}</button>
  )
}
export default MenyuPagesTitle