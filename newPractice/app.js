/* const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]));
}

const displaySingleUser = user => {
    // console.log(user);
};

loadSingleUser(); */

// 
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
// 
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;

    toggleSpinner('block');
    loadMeals(searchText);
    document.getElementById('search-field').value = '';

}

const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals');
    mealsContainer.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${meal.strMeal}<h1>
        <button onclick="loadDetails('${meal.strMeal}')">click</button>
        `;
        mealsContainer.appendChild(div);
    });

    toggleSpinner('none');

}

function loadDetails(mealName) {
    console.log(mealName);
}

// loadMeals('fish');