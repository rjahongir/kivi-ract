import './HeaderBottomSelect.css'
const HeaderBottomSelect = () => {
  return (
    <div className="header-bottom-wrapper">
      <div className="header-selector">
        <select className="select-cotegory" name="cars" id="cars">
          <option value="Любая категория">Любая категория</option>
        </select>
        <input className="select-cotegory header-input-search" type="search" placeholder="Что будем искать ?"/>
        <select className="select-cotegory" name="cars" id="cars">
          <option value="По всей Узбекистану">По всей Узбекистану</option>
        </select>
        <button className="btn-search">Найти</button>
      </div>
      <button className="btn-add">
        <span className="plus">+</span>
        <span>Добавить обьявления</span>
      </button>      
    </div>
  )
}
export default HeaderBottomSelect