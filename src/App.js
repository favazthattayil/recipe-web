//import Menu1 from './menu1'
import Menu from './components/menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipesdish from './components/recipes';
import { useEffect, useState } from 'react';
import axios from 'axios';



import './App.scss';



function App() {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null)


  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
      .then(response => {
        setLoading(false);
        setMeals(response.data.meals);
      })
      .catch(error => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  console.log("hj",meals)

  return (



<Router>
  <Routes>

  <Route path='/' element={<Menu meals={meals}/>}/>
  <Route path='/recipes/' element={<Recipesdish/>}/>


  </Routes>
</Router>


  );
}

export default App;
