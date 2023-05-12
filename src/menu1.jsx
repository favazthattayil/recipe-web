import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      .then(response => {
        setMeals(response.data.meals);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });

    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleCategorySelect = category => {
    setSelectedCategory(category.strCategory);
  };

  const filteredMeals = selectedCategory ? meals.filter(meal => meal.strCategory === selectedCategory) : meals;

  return (
    <div>
      {loading ? <p>Loading...</p> : error ? <p>Error retrieving data</p> : (
        <div>
          <h1>Categories</h1>
          {categories.map(category => (
            <button key={category.idCategory} onClick={() => handleCategorySelect(category)}>{category.strCategory}</button>
          ))}
          <h1>Meals</h1>
          {filteredMeals.length > 0 ? (
            filteredMeals.map(meal => (
              <Meal key={meal.idMeal} meal={meal} />
            ))
          ) : (
            <p>Sorry, no dishes available. We will update you soon.</p>
          )}
        </div>
      )}
    </div>
  );
};

const Meal = ({ meal }) => (
  <div>
    <h2>{meal.strMeal}</h2>
    <img src={meal.strMealThumb} alt={meal.strMeal} />
    <p>{meal.strInstructions}</p>
  </div>
);

export default App;

