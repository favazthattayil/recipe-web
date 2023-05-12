import React from 'react';

import { Link } from 'react-router-dom';


function Specialdishes(props) {



  return (


     <div className='class'>

      <ul className=' flex flex-wrap flex-centre'>
          { props.Allmenus.slice( 0,10).map(( Allmenus, index) => 
          (
          <li  className='dishes' key={index} >
             <Link key={Allmenus.idMeal} to={`/recipes/${Allmenus.idMeal}`}>
            <img className='dishes ' src={ Allmenus.strMealThumb} alt={ Allmenus.strMeal} />
            <h3 className='specialdishes-name flex flex-wrap flex-centre'>{ Allmenus.strMeal}</h3>
            </Link>
          </li>
          ))}
      </ul>

     </div>

     
    
   
  );
}

export default Specialdishes;




  
