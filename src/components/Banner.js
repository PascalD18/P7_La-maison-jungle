import '../styles/Banner.css'
import logo from '../assets/img/home/Feuille.png'
function Banner() {
    const title='La maison jungle'
    return (
    <div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo'/>
        <h1 className='imj-title'>{title}</h1>
    </div>
    )
}

export default Banner