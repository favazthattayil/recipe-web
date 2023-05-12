import React ,{useState ,useEffect} from 'react'

import axios from 'axios';
import { useParams } from 'react-router-dom';


const Recipes = (props) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dish, setDish] = useState(null);

  const { dishId } = useParams(); 
console.log("gi")
  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishId}`)
      .then(response => {
        setLoading(false);
        setDish(response.data.meals[{dishId}]);
        console.log("pl",response.data.meals)
      })
      .catch(error => {
        setLoading(false);
        setError(error.message);
      });
  }, [{dishId}]);
console.log("dish",dish)

  return (
    <div >

  <h2>{dish.strMeal}</h2>
  <img src={dish.strMealThumb} alt={dish.strMeal} />
  <p>{dish.strInstructions}</p>
 
</div>
  );
}

export default Recipes;