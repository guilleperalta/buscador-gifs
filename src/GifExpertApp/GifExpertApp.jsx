import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([''])

  const onAddCategory = ( newCategory ) => {
    if (categories.includes(newCategory)) return;
    setCategories( [newCategory , ...categories] );
  }

  return (
    <>
        <h1>Buscador de gifs</h1>

        <AddCategory onNewValue={ value => onAddCategory(value) } />

        {categories.length <= 1 && (<h4>Ingrese alguna categoria de gifs</h4>)}

        {categories.map( category => <GifGrid category={ category } key={ category } />)}
    </>
  )
}
