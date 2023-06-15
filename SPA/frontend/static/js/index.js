import MainPage from "./views/MainPage.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import PostView from "./views/PostView.js";
import MainPage from "./views/MainPage.js";


const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from( match.route.path.matchAll( /:(\w+)/g ) ).map( result => result[1] );

    return Object.fromEntries( keys.map( (key, i) => {
        return [ key, values[i] ];
    }));

};


const navigateTO = url => {
    history.pushState(null, null, url);
    router();
};

 // /posts/:id

const router = async () => {
    const routes = [
        { path : '/', view : MainPage },
        { path : '/posts', view : Posts },
        { path : '/posts/:id', view : PostView },
        { path : '/settings', view : Settings },
    ]; 
    
    // 잠재적 일치를 위해 각 경로 테스트
    const potentialMatches = routes.map(route => {
        return {
            route : route,
            result : location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if(!match){
        match = {
            route : routes[0],
            result : [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector('#app').innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTO(e.target.href);
        }
    });

    router();
});
