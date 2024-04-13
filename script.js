document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        const meal = data.meals[0];
        const container = document.getElementById('container');
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
  
        const recipeName = document.createElement('h2');
        recipeName.textContent = meal.strMeal;
  
        const recipeImage = document.createElement('img');
        recipeImage.src = meal.strMealThumb;
        recipeImage.alt = meal.strMeal;
  
        const ingredientsList = document.createElement('ul');
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = `${ingredient}: ${measure}`;
            ingredientsList.appendChild(listItem);
          } else {
            break;
          }
        }
  
        const recipeInstructions = document.createElement('p');
        recipeInstructions.textContent = meal.strInstructions;
  
        recipeDiv.appendChild(recipeName);
        recipeDiv.appendChild(recipeImage);
        recipeDiv.appendChild(ingredientsList);
        recipeDiv.appendChild(recipeInstructions);
        container.appendChild(recipeDiv);
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  