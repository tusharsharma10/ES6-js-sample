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
            <img src="${recipe.image_url}" alt="${limitRecipeTitle(recipe.title)}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
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

const limitRecipeTitle = (title , limit = 17) => {
    const newTitle = [];
      
    if( title.length > limit ) {
        
            title.split(' ').reduce( (acc,cur) => {

                    if(acc + cur.length <= limit){
                        newTitle.push(cur);
                    }
                    return acc + cur.length;
            },0)
           
            const str = `${ newTitle.join(' ') }...`;
           
            return str;
        }

        return title;

};