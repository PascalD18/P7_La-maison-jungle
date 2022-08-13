import Sun from '../assets/img/home/soleil.png'
import Water from '../assets/img/home/water.png'

function CareScale({ scaleValue, careType,plantName }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='Sun' />
    ) : (
        <img src={Water} alt='Goutte' />
    )
    
    return (
        <div>
            {plantName}
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}
export default CareScale