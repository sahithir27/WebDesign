import './Loader.scss'
import Loader from '../../Assets/Images/NU Logo.png'

const Header = () => {
  return (
    <div className="loader-container"> 
        <img alt="loader" src={Loader} />
    </div> 
  )
  
}

export default Header;