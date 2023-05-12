
import Specialdishes from './specialdishes2.jsx'
import Hero from './Hero.jsx'
import Categories from './catogories.jsx'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from './loader.jsx';



const MealData = (props) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  return (
   <div >



  <Hero/>
{!loading? <Loader />:<Specialdishes Allmenus={props.meals} /> }
{!loading? <Loader />:<Categories categories={categories} meals={props.meals}/>}

     

   </div>
  )
}

export default MealData;
