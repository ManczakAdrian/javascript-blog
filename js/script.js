
document.getElementById('test-button').addEventListener('click', function () {
  const links = document.querySelectorAll('.titles a');
  
  console.log('links:', links);
  console.log(event);
  
});

// document.getElementById('button').addEventListener('click', function(){
//   console.log('links:', links);
//   console.log(event);
// });

'use strict'

const titleClickHandler = function (event) {
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */
  
    console.log('Link was clicked!');
    console.log(event);
    const activeArticles = document.querySelectorAll('.post');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */


    /* find the correct article using the selector (value of 'href' attribute) */

    /* add class 'active' to the correct article????? */
}
const links = document.querySelectorAll('.titles a');
    console.log(links);
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
      // activeArticles.classList.add('active');  //????
    }