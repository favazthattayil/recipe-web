import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import Pagination from "./pagination";



const MealList = ({ meals, categories }) => {




  const [selectedCategory, setSelectedCategory] = useState("Beef");
  //const [itemsperpage , setItemsperpage] = useState(8)
  //const [currentPage ,setCurrentPage] = useState(1)
 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  console.log("df",typeof selectedCategory);
  const filteredMeals = selectedCategory
    ? meals.filter((meal) => meal.strCategory === selectedCategory)
    : meals;
 
  const MealDetails = ({ meal }) => {
    return (

<div className="b">
      
          <li className='dishes'>  
          <Link key={meal.idMeal} to={`/recipes/${meal.idMeal}`}>
            <img className='dishes'  src={meal.strMealThumb} alt={meal.strMeal} />
            <h3 className='specialdishes-name flex flex-wrap flex-centre'>{meal.strMeal}</h3>
           </Link>
          </li>       
       

     
      </div>
      
    );
  };

  return (
    <div className="class">

       <section className='special-dishes'>
         <div className="special-dishes-content text-centre">
         <div className="container1">
          <h2>Choose your dishes..</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque nam iure neque natus et quis, dolorem sunt recusandae quaerat.</p>
        </div>   
         </div>
       </section>
     
      <div className="btn-size">
        {categories &&
          categories.map((category) => (
           
            <button className= {category.strCategory===selectedCategory ? ' categories-btn active ':"categories-btn"} 
              key={category.idCategory}
              onClick={() => handleCategoryClick(category.strCategory)}
            >
              {category.strCategory}
            </button>
           
          ))}
      </div>
      

   
      <div className='categories flex flex-wrap flex-centre'>
        {meals && filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <MealDetails key={meal.idMeal} meal={meal} />
          ))
        ) : (

          <div className="alert flex flex-centre ">
            <h2 className="flex flex-centre">Sorry, no dishes available. We will update you soon.</h2>
            </div>
          
        )}
      </div>
      {/*<Pagination imageList={MealDetails}/> */}


    </div>
  );
};

export default MealList;



