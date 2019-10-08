/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {

    //your code here
    const title = document.querySelector("h1");
    let toggle = false;
    title.addEventListener("click", toggleTitle);

    function toggleTitle () {
        toggle = !toggle;
        if (toggle == true) {
            title.style.color = "red";
        }
        else {
            title.style.color = "black";
        }

        alert("Surprise!")
    }

    const sideLinks = document.querySelectorAll(".section");
    for (let i = 0; i < sideLinks.length; i++ ) {
        if (i % 2 == 0) {
            sideLinks[i].style.visibility = "hidden";
        }
    }

    const bacon = document.querySelectorAll("p");
    for (let i of bacon) {
       i.innerHTML = i.innerHTML.replace(/bacon/gi, "LASER VISION");
    }

    const posts = document.querySelectorAll(".post");
    for (let i = posts.length-1; i > posts.length - 4; i--) {
       posts[i].remove();
    }

    const ads = document.querySelectorAll(".hide-for-small p img");
    for (let i = 0; i < 2; i++) {
        ads[i].remove();
    }
})();