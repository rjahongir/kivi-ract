import './NewAnnouncementsComponent.css'
const NewAnnouncementsComponent = ({photo, title, setTime, price}) => {
  return (
    <div className="NewAnnouncementsComponent-wrapper">
      <img className="Announcements-img" src={photo}/>
      <p className="Announcements-paragraph">{title}</p>
      <span className="Announcements-set-time">{setTime}</span>
      <p className="Announcements-price">{price}</p>
    </div>
  )
}
export default NewAnnouncementsComponent