document.getElementById('search-err').style.display = 'none';

function invalidSearch(styleAttribute) {
    if (styleAttribute == 'none') {
        document.getElementById('search-err').style.display = 'none';
    }
    else {
        document.getElementById('search-err').style.display = 'block';
    }
}

const loadMeals = () => {
    // search
    const searchField = document.getElementById('txt-field');
    const searchTxt = searchField.value;
    // console.log(searchTxt);
    // clean input field
    searchField.value = '';
    // document.getElementById('search-err').style.display = 'none';


    if (searchTxt == '') {

        invalidSearch('block');
        // searchErr.style.display = 'block';
    }
    else {
        // api calling
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))

        invalidSearch('none');
    }

}

const displayMeals = meals => {
    // console.log(meals);
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
    // console.log(mealID);

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
