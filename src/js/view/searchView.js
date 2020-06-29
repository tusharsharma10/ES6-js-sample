import { elements } from './base';

// Functions that take Input from html form
export const getInput = () => elements.searchInput.val();

//Functions to put stuff on html page
// renderRecipe function will automatically get the argument
export const renderResults = (recipes , page = 1 ,resPerPage = 10) => {

    //recipes.forEach(element => renderRecipe(element));
    const start = ( page - 1 ) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start,end).forEach(renderRecipe);
   
    renderButtons(page,recipes.length,resPerPage);
};

/**
 * Using data attributes to store the page number
 * @param {*} page 
 * @param {*} type 
 */
const createButton = (page,type) => {

    const markup = ` <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
                        <svg class="search__icon">
                            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                        </svg>
                        <span>Page${type === 'prev' ? page - 1 : page + 1}</span>
                    </button>  `
                    
                    // <button class="btn-inline results__btn--next">
                    //     <span>Page 3</span>
                    //     <svg class="search__icon">
                    //         <use href="img/icons.svg#icon-triangle-right"></use>
                    //     </svg>
                    // </button>

    return markup;
};

const renderButtons = (page,numResults,resPerPage) => {

    const numofPages = Math.ceil(numResults/resPerPage);
    let button;
    if(page === 1 && numofPages > 1) {
        // Only btn to go to next page
        button = createButton(page,'next');
    }
    else if(page < numofPages){
        button = `
                ${createButton(page,'prev')}
                ${createButton(page,'next')}
        `;
    }
    else if(page === numofPages){
        // Only btn to go to previous page
        button =  createButton(page,'prev');
    }

    elements.searchResPages.append(button);
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