import CareScale from './CareScale'
import '../styles/PlantItem.css'

//function handleClick(name) {
//	alert(`Vous voulez acheter 1' ${name}? SUPER!`)
//}

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li className='lmj-plant-item'
			// onClick={() => handleClick}>
			onClick={() =>
				alert(`Vous voulez acheter 1 '${name}'? SUPER !`)
			}
		>

			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} plantName={name} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem