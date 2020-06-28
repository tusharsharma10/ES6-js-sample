import { elements } from './base';

// Functions that take Input from html form
export const getInput = () => elements.searchInput.val();

//Functions to put stuff on html page
// renderRecipe function will automatically get the argument
export const renderResults = recipes => {

    //recipes.forEach(element => renderRecipe(element));

    recipes.forEach(renderRecipe);


};


const renderRecipe = recipe => {

    const markup = ` <li>
    <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${recipe.title}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
</li>`

        elements.searchResList.append(markup);
       
};

 export const clearInput = () => {
    
    elements.searchInput.val('');
};

export const clearResults = () =>{

    elements.searchResList.empty();

}