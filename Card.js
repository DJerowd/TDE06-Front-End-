import './Card.css'

const Card = ({bgColor, children}) => {

    return (
        <div className='cardContainer' style={{backgroundColor: bgColor}}>
            {children}
        </div>
    );
}

export default Card;
