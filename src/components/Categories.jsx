import React, {useState} from 'react';

function Categories({ items, onItemClick }) {
    const [activeItem, setActiveItem] = useState(null);
    let item = items.map((name,index) => {
        return  <li  className={activeItem === index ? 'active' : ''} 
        onClick={() => setActiveItem(index)} 
        key={`${index}_${name}`}>{name}</li> 
    })
    return (
        <div className='categories'>
             <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
                {items && item}
            </ul>
        </div>
    )
}

export default Categories;