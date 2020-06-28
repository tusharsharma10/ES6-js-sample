import jquery from 'jquery';
import Search from './model/Search';
import * as searchView from './view/searchView';
import { elements } from './view/base';

/**
 * Global State of the app
 * - Search Object
 * - Recipe Object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {

    // 1. get query from view
    const query = searchView.getInput();

    if (query) {

        //2. New search object and add to state
        state.search = new Search(query);


        //3.Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        //4. Search for recipes
        await state.search.getResults();

        console.log(state.search.result);
        //5.Render results on UI
        searchView.renderResults(state.search.result);

    }
}



elements.searchForm.submit(e => {

    // prevents reloading of page
    e.preventDefault();

    controlSearch();

})

//const search  = new Search('pizza');

//search.getResults();

//console.log(search);