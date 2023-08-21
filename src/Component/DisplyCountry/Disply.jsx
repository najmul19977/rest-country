
import './Disply.css'

const Disply = ({c}) => {
   const{name,area,population,flags} = c;
    return (
        <div className='info'>
            <h2>Name:{name.common}</h2>
            <h3>Area:{area}</h3>
            <h3>population:{population}</h3>
            <img className='img' src={flags.png} alt="" />

            
        </div>
    );
};

export default Disply;