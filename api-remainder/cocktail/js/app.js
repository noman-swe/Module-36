function loadCocktailDrinks() {
    const searchField = document.getElementById('search-inputs');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';

    if (searchText == '') {
        console.log('search feild empty!');
    }
    else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayDrinks(data.drinks));
    }
}

const displayDrinks = drinks => {
    const displayDrinksContainer = document.getElementById('display-drinks-container');

    // clear text content
    displayDrinksContainer.textContent = '';

    drinks.forEach(drink => {
        console.log(drink);
        const displayDiv = document.createElement('div');
        displayDiv.classList.add('col');
        displayDiv.innerHTML = `
        <div class="card" onclick="loadDrinkDetails(${drink.idDrink})">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strCategory}</p>
                <p class="card-text">${drink.strInstructions.slice(0, 200)}</p>
            </div>
        </div>`;
        displayDrinksContainer.appendChild(displayDiv);
        // console.log(drink);
    });
}

function loadDrinkDetails(drinkId) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDrinkDetails(data.drinks[0]))
}


const displayDrinkDetails = drink => {
    const displayDetailsContainer = document.getElementById('display-details-section');
    displayDetailsContainer.textContent = '';
    // 
    const showDetailDiv = document.createElement('div');
    showDetailDiv.innerHTML = `
            <div class="card text-bg-dark shadow p-3 mb-5 bg-white rounded">
                <img src="${drink.strDrinkThumb}" class="card-img details-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title text-center text-danger pt-5 details-title">${drink.strDrink}</h5>
                    <p class="card-text">${drink.strCategory}</p>
                    <p class="card-text px-3">${drink.strInstructions}</p>
                </div>
          
            </div>
                <h3 class='pt-3 text-success text-center'> Related Foods...</h3>
        `;
    displayDetailsContainer.appendChild(showDetailDiv);

}

