import React, { useState } from "react";
import Filterddishes from "./filterddishes";


function MealCategories (props)  {
  
 // let [allmenus,setAllmenus] = useState(props.Allmenus)
let [filterddishes,setFilterddishes] =useState([])
  




function ShowFilterdDishes(category){
  let FilterdDishesAre = props.Allmenus.filter((item)=>
  {
    return item.strCategory === category
  }).map((item)=>{
    return(
      <li>
        <img className='dishes' src={ item.strMealThumb} alt={item.strMeal} />
        <h3 className='specialdishes-name'>{ item.strMeal}</h3>
      </li>
    )
  
       setFilterddishes(FilterdDishesAre)
  })
  
  
}


    





 






  return (
    <div className="special-dishes-content text-centre">


      <section>
        <div className="container">
          <h2>Choose your dishes..</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque nam iure neque natus et quis, dolorem sunt recusandae quaerat.</p>
        </div>
      </section>


      <ul className=' flex flex-wrap flex-centre'>
        {props.Categories.map((category) => (
            <li className="categories-btn" 
            onClick={()=>{ShowFilterdDishes(category.strCategory)}} >
               {category.strCategory}
            </li>
        ))}
      </ul>


     
        



    </div>


  );
};

export default MealCategories;
