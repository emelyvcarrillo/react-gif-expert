import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Makeup']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;


        setCategories([newCategory, ...categories]);
        //  setCategories( cat => [...categories, 'Hola']);
    }


    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />


                {
                    categories.map( ( category ) => (
                        <GifGrid 
                        key={ category } 
                        category={ category } /> 
                ))
                }
  



        </>
    )
}
