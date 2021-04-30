import { useState } from 'react'
import { Link } from 'react-router-dom'
import NewAnnouncementsComponent from './NewAnnouncementsComponent/NewAnnouncementsComponent'
import NewAnnouncementsComponent2 from './NewAnnouncementsComponent/NewAnnouncementsComponent2'
import MenyuPagesTitle from '../MenyuPagesTitle/MenyuPagesTitle'
import '../MenyuPagesTitle/MenyuPagesTitle.css'
import { Strelka } from '../../../assets/Icons/Icons'
import './NewAnnouncements.css'
import img1 from '../../../assets/img/img1.png'
import img2 from '../../../assets/img/img2.png'
import img3 from '../../../assets/img/img3.png'
import img4 from '../../../assets/img/img4.png'
import img5 from '../../../assets/img/img6.png'
import img6 from '../../../assets/img/img7.png'
import img7 from '../../../assets/img/img8.png'
import img8 from '../../../assets/img/img9.png'
import img9 from '../../../assets/img/img10.png'
import img10 from '../../../assets/img/img11.png'
import img11 from '../../../assets/img/img12.png'
import img12 from '../../../assets/img/img13.png'
import img13 from '../../../assets/img/img14.png'
import img14 from '../../../assets/img/img15.png'
import img15 from '../../../assets/img/img16.png'
import img16 from '../../../assets/img/img5.png'
import img17 from '../../../assets/img/img17.png'
import img18 from '../../../assets/img/img18.png'
import img19 from '../../../assets/img/img19.png'
import img20 from '../../../assets/img/img20.png'
import img21 from '../../../assets/img/img21.png'
import img22 from '../../../assets/img/img22.png'
import img23 from '../../../assets/img/img23.png'
const NewAnnouncements = () => {
  const [ activPage, setActivPage ] = useState('reviewed')
  return (
    <div>
    <div className="Announcements-wrapper">
        <NewAnnouncementsComponent
        photo={img1}
        title="iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)"
        setTime="Вчера 22:55"
        price="39 000 000 сум"/>
        <NewAnnouncementsComponent
        photo={img2}
        title="Маркетолог. Консультирование. Настройка рекламы"
        setTime="Вчера 22:55"
        price="39 000 000 сум "/>
        <NewAnnouncementsComponent
        photo={img3}
        title="Требуется администратор в Отел"
        setTime="Вчера 22:55"
        price="39 000 000 сум "/>
        <NewAnnouncementsComponent
        photo={img4}
        title="Велосипед Merida Big Seven 70 D"
        setTime="Вчера 22:55"
        price="39 000 000 сум "/>
        <NewAnnouncementsComponent
        photo={img5}
        title="Коньки раздвижные Galaxy р-р 36-39"
        setTime="Вчера 22:55"
        price="39 000 000 сум"/>
        <NewAnnouncementsComponent
        photo={img6}
        title="Продам свою гоночный байк Mongoose "
        setTime="Вчера 22:55"
        price="39 000 000 сум"/>
        <NewAnnouncementsComponent
        photo={img7}
        title="1-к квартира, 47 м², 7/18 эт."
        setTime="Вчера 22:55"
        price="39 000 000 сум"/>
        <NewAnnouncementsComponent
        photo={img8}
        title="Торговое помещение, 10 м²"
        setTime=""
        price=""/>
        <NewAnnouncementsComponent
        photo={img9}
        title="Двигатели моторы головки кпп турбины тнвд гарантия"
        setTime=""
        price=""/>
        <NewAnnouncementsComponent
        photo={img10}
        title="Toyota Camry, 2002"
        setTime="Вчера 22:55"
        price=""/>
        <NewAnnouncementsComponent
        photo={img11}
        title="Сборочный комплект камаз 43118"
        setTime=""
        price="39 000 000 сум"/>
        <NewAnnouncementsComponent
        photo={img12}
        title="Продам легендарный BMW K1200S"
        setTime=""
        price="39 000 000 сум"/>
        <NewAnnouncementsComponent
        photo={img13}
        title="Продам легендарный BMW K1200S"
        setTime=""
        price=""/>
        <NewAnnouncementsComponent
        photo={img14}
        title="Плиточник "
        setTime=""
        price="39 000 000 сум"/>
        <NewAnnouncementsComponent
        photo={img15}
        title="Мастер регулировка дверей замена замков"
        setTime="Вчера 22:55"
        price="39 000 000 сум"/>
        <NewAnnouncementsComponent
        photo={img16}
        title="Овощная компания. Доставка свежих овощей и фруктов"
        setTime="Вчера 22:55"
        price="39 000 000 сум"/>
    </div>
    <hr className="project-hr"/>
    <div className="new-announcements-bottom">
    <button className="strelka">Покозать еще <Strelka/></button>
      <NewAnnouncementsComponent2 photo={img17}/>
      <NewAnnouncementsComponent2 photo={img18}/>
      <NewAnnouncementsComponent2 photo={img19}/>
    </div>
    <div>
      <Link onClick={()=> setActivPage('reviewed')}>
        <MenyuPagesTitle title="reviewed" active={activPage == 'reviewed'}/>
      </Link>
      <Link onClick={()=> setActivPage('vybor-redaktsii')}>
        <MenyuPagesTitle title="Выбор редакции" active={activPage == 'vybor-redaktsii'}/>
      </Link>
      <Link onClick={()=> setActivPage('snijennye-tseny')}>
        <MenyuPagesTitle title="Сниженные цены" active={activPage == 'snijennye-tseny'}/>
      </Link>
    </div>
    <div className="household-product">
      <NewAnnouncementsComponent
        photo={img20}
        title="Овощная компания. Доставка свежих овощей и фруктов"
        setTime="Вчера 22:55"
        price="39 000 000 сум"/>
      <NewAnnouncementsComponent
        photo={img21}
        title="Овощная компания. Доставка свежих овощей и фруктов"
        setTime="Вчера 22:55"
        price="39 000 000 сум"/>
      <NewAnnouncementsComponent
        photo={img22}
        title="Овощная компания. Доставка свежих овощей и фруктов"
        setTime="Вчера 22:55"
        price="39 000 000 сум"/>
      <NewAnnouncementsComponent
        photo={img23}
        title="Овощная компания. Доставка свежих овощей и фруктов"
        setTime="Вчера 22:55"
        price="39 000 000 сум"/>
    </div>
    <hr className="project-hr"/>
  </div>
  )
}
export default NewAnnouncements
