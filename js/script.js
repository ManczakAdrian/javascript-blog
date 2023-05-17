
document.getElementById('test-button').addEventListener('click', function () {
  const links = document.querySelectorAll('.titles a');

  console.log('links:', links);
  console.log(event);

});

// document.getElementById('button').addEventListener('click', function(){
//   console.log('links:', links);
//   console.log(event);
// });

'use strict';

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement (with plus): ' + clickedElement);


  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */
  console.log('Link was clicked!');
  console.log(event);
  const activeArticles = document.querySelectorAll('.post');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const hrefClickedLink = clickedElement.getAttribute('href')
  console.log('hrefClickedLink');

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(article${hrefClickedLink});
  console.log(targetArticle);

/* add class 'active' to the correct article????? */

  articleToShow.classList.add('active')
  console.log(links);
};