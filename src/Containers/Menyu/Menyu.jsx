import MenyuBtn from './MenyuBtn/MenyuBtn'
import './Menyu.css'
import {
  Icon1,
  Property,
  Electronics,
  Work,
  PersonalBelongings,
  Housegarden,
  ConstructionRepair,
  HobbiesSports,
  BusinessServices
} from '../../assets/Icons/Icons'
const Menyu = () => {
  return (
    <div className="menyu-wrapper">
      <MenyuBtn title="Автомобили" bgColor="aqua" iconka={<Icon1/>}/>
      <MenyuBtn title="Недвижимость" bgColor="aquamarine" iconka={<Property/>}/>
      <MenyuBtn title="Электроника" bgColor="coral" iconka={<Electronics/>}/>
      <MenyuBtn title="Работа" bgColor="yellow" iconka={<Work/>}/>
      <MenyuBtn title="Личные вещи" bgColor="pinck" iconka={<PersonalBelongings/>}/>
      <MenyuBtn title="Дом и Сад" bgColor="aquamarine" iconka={<Housegarden/>}/>
      <MenyuBtn title="Стройка и ремонт" bgColor="aqua" iconka={<ConstructionRepair/>}/>
      <MenyuBtn title="Хобби и Спорт" bgColor="pinck" iconka={<HobbiesSports/>}/>
      <MenyuBtn title="Бизнес и услуги" bgColor="coral" iconka={<BusinessServices/>}/>
    </div>
  )
}
export default Menyu