import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one Punch']);

    const onAddCategory = (newCategory) => {
        // setCategories(cat => [...cat, 'Valorant'])
        if(categories.includes(newCategory)) return
        setCategories([newCategory, ...categories]);
    }
    return (
      <>
         <h1>GifExpertApp</h1>
         <AddCategory 
            onNewCategory={(value) => onAddCategory(value)} 
         />
          { categories.map((category) => (
                <GifGrid 
                  key={category}
                  category={category}
                />
            ))
          }
      </>
    )
}

export default GifExpertApp