const searchCocktailDrinks = () => {

    const inputField = document.getElementById('search-inputs');
    const inputTxt = inputField.value;
    console.log(inputTxt);

    if(inputTxt ==  ''){
        console.log('field is empty!')
    }

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputTxt}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCocktailDrinks(data.drinks));
    inputField.value = '';

}

const displayCocktailDrinks = drinks => {

    const drinkContainer = document.getElementById('drinkContainer');

    drinks.forEach(drink => {
        console.log(drink.strDrink);     
        const displayDiv = document.createElement('div');
        displayDiv.classList.add('col');
        displayDiv.innerHTML = `
        <div class="card">    
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..."> 
        <div class="card-body">
        <h5 class="card-title">${drink.strDrink}</h5>
        <p class="card-text">${drink.strInstructions}</p>
        </div>
        </div>
        `;
        drinkContainer.appendChild(displayDiv);   
    });
}



// loadCocktailMeals();
