"use client"

import React, { useState, useEffect } from 'react';

const MealButton = ({ meal }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-10 w-[400px] bg-slate-500 mb-3">
            <div className="flex-row">
                <button title={meal.strMeal} onClick={() => setClicked(!clicked)}>{meal.strMeal}</button>
                {clicked && <img src={meal.strMealThumb} className="w-[100px] h-[100px]" alt={meal.strMeal} />}
            </div>
        </div>
    );
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) {
        throw new Error;
      }
      const data = await response.json();
      console.log(JSON.stringify(data));
      return data.meals;
    } catch (error) {
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className='bg-gray-400 w-[500px] flex items-center justify-center ml-10 mt-5'>
        <div className='text-center'>
            <p className='font-semibold text-2xl'>Meal Ideas</p>
            <p className='text-xl'>Here are some meal ideas using {ingredient}:</p>
            <div className='flex flex-wrap justify-center'>
                {meals === null ? null : meals.map((meal) => <MealButton key={meal.idMeal} meal={meal} />)}
            </div>
        </div>
    </div>
  );
};

export default MealIdeas;