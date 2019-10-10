(function(){


/** 
 * Use javascript to target update the contents of the heading with the id of title in index.html
 * Currently it displays the text "Hello World".
 * Your code should update the contents of the heading to say "Goodbye World."
 * 
 * The page should wait 3 second before updating the contents of the heading.
 *
 * Useful Links:
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout
 *
 */

//your code here
let docTitle = document.querySelector("#title");
const newTitle = "Goodbye World";

setTimeout(changeTitle, 3000);

function changeTitle (){
    docTitle.innerHTML = newTitle;
}

})();
    