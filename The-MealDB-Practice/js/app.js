document.getElementById('search-err').style.display = 'none';


function spinnerSet(styleAttribute) {
    document.getElementById('spinner').style.display = styleAttribute;
}

function invalidSearch(styleAttribute) {
    document.getElementById('spinner').style.display = styleAttribute;
}

// 
const loadMeals = () => {
    // search
    const searchField = document.getElementById('txt-field');

    const searchTxt = searchField.value;
    // spinner
    spinnerSet('block');

    // clean input field
    searchField.value = '';

    if (searchTxt == '') {
        invalidSearch('block');
    }
    else {

        // api calling
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))

        // error
        invalidSearch('none');


    }

}

const displayMeals = meals => {
    // console.log(meals);

    // spinner
    spinnerSet('none');

    const mealContainer = document.getElementById('meal-container');
    mealContainer.textContent = '';
    meals.forEach(meal => {
        // console.log(meal.idMeal);
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        colDiv.innerHTML = `
                    <div onclick="loadMealDetails(${meal.idMeal})" class="card shadow p-3 mb-5 bg-white rounded">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                        </div>
                    </div>
            `;
        mealContainer.appendChild(colDiv);

    });
}

const loadMealDetails = mealID => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data.meals[0]))
    // 
}
const displayMealsDetails = meal => {

    const mealDetailsContainer = document.getElementById('mealDetails');
    mealDetailsContainer.textContent = '';

    const showDetailDiv = document.createElement('div');
    showDetailDiv.innerHTML = `
            <div class="card text-bg-dark shadow p-3 mb-5 bg-white rounded">
                <img src="${meal.strMealThumb}" class="card-img details-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title text-center text-danger pt-5 details-title">${meal.strMeal}</h5>
                    <p class="card-text px-3">${meal.strInstructions}</p>
                </div>
          
            </div>
                <h3 class='pt-3 text-success text-center'> Related Foods...</h3>
        `;

    mealDetailsContainer.appendChild(showDetailDiv);
}
