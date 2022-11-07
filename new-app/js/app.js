document.getElementById('search-error-msg').style.display = 'none';
document.getElementById('spinner').style.display = 'none';
document.getElementById('no-result-found').style.display = 'none';
document.getElementById('number-input').style.display = 'none';

// error search
function searchErrMsg(styleAttribute) {
    document.getElementById('search-error-msg').style.display = styleAttribute;
}
// search-spinner
function spinner(styleAttribute) {
    document.getElementById('spinner').style.display = styleAttribute;
}
// no result found search
function getNoResult(styleAttribute) {
    document.getElementById('no-result-found').style.display = styleAttribute;
}
//number search
function getNumber(styleAttribute) {
    document.getElementById('no-result-found').style.display = styleAttribute;
}

const loadMeals = () => {
    const searchfield = document.getElementById('search-field');
    const searchTxt = searchfield.value;

    // if error input
    if (searchTxt == '') {
        spinner('none'); 
        console.log(searchTxt,'-->search is empty!');
        searchErrMsg('block');
    } 
    else if (!isNaN(parseFloat(searchTxt))) {
        console.log('number!!');
        
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))
    }
    searchErrMsg('none');
    spinner('block');
    searchfield.value = '';
    const detailsContainer = document.getElementById('details');
    detailsContainer.textContent = '';
}

const displayMeals = meals => {
    if (meals == null) {
        spinner('none');
        getNoResult('block');
    }
    else {
        const mealContainer = document.getElementById('meal-details-container');
        mealContainer.textContent = '';
        meals.forEach(meal => {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col');
            colDiv.innerHTML = `
                <div class="card" onclick = "loadMealDetails(${meal.idMeal})">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strIngredient18?meal.strIngredient18:'No 18 Ingredient avaliable.'}</p>
                        <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                    </div>
                </div>
                `;
            mealContainer.appendChild(colDiv);
            spinner('none');
            getNoResult('none');
        });
    }
}

const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]))
}

const displayDetails = meal => {
    const detailsContainer = document.getElementById('details');
    detailsContainer.textContent = '';
    const detailsShowDiv = document.createElement('div');
    detailsShowDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <img src="${meal.strMealThumb}" class="card-img-top" height="600px" alt="...">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>

            </div>
        </div>
    `;
    detailsContainer.appendChild(detailsShowDiv);
}