import React, {useCallback, useEffect} from 'react'
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from '../components';
import { useSelector, useDispatch} from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const  itemsArray = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];

const itemsSort = [
  {name: 'популярности', type: 'popular', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
    
  const onSelectCategory = useCallback((index) => {
       dispatch(setCategory(index));
     }, [dispatch]);

     const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
      }, [dispatch]);

    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters); 

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category,));
    }, [category, dispatch, sortBy] );

    return (
        <div className="container">
            <div className="content__top">
                <Categories 
                    activeCategory ={category}
                    onClickCategory={onSelectCategory} 
                    items={itemsArray}
                />;
                <SortPopup activeSortType={sortBy.type} items = {itemsSort} onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded 
                    ? items.map((obj)=> <PizzaBlock key={obj.id} isLoading={true} {...obj} /> )
                    : Array(12)
                    .fill(0)
                    .map((_, index) => <PizzaLoadingBlock key={index} />)}
            </div>
        </div>
    )
}

export default Home
