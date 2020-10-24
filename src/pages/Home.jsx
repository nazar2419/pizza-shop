import React from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components';

function Home({ items }) {
    
    const  itemsArray = [
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
      ];
    
      const itemsSort = ['популярности','цене', 'алфавит']
    
      function selectCategory(name) {
        return console.log(name);
      }
    return (
        <div className="container">
            <div className="content__top">
                <Categories 
                    onItemClick={(name)=> selectCategory(name)} 
                    items={itemsArray}
                />;
                <SortPopup items = {itemsSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map((obj)=> (
                     <PizzaBlock key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    )
}

export default Home
