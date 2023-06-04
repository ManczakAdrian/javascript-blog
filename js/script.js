
document.getElementById('test-button').addEventListener('click', function () {
  const links = document.querySelectorAll('.titles a');

  console.log('links:', links);
  console.log(event);

});

// document.getElementById('button').addEventListener('click', function(){
//   console.log('links:', links);
//   console.log(event);
// });
{
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
    const articleSelector = clickedElement.getAttribute('href');

    console.log('articleSelector');

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
    /* add class 'active' to the correct article????? */
    targetArticle.classList.add('active');
  };




  optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';


  function generateTitleLinks() {

    /* remove contents of titleList */
    titleList = document.querySelector(optTitleListSelector);

    document.querySelector('.list.titles').innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {
      /* get the article id */
      const articleId = article.getAttribute('id');
      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      /* get the title from the title element */

      /* create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* insert link into titleList */
      titleList.innerHTML = titleList.innerHTML + linkHTML;
    }
    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }

  }
  generateTitleLinks();



  optArticleTagsSelector = '.post-tags .list';
  let html = '';
  let articleTags = '.data-tags';

  function generateTags() {
    
    /* find all articles */
    articles = document.querySelectorAll(optArticleTagsSelector);
    /* START LOOP: for every article: */
    for (let article of articles) {

    /* find tags wrapper */
   const tagList = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */

    /* get tags from data-tags attribute */
    const articleSelector = article.getAttribute(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
  }
    
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log(tag);
    /* generate HTML of the link */

    const linkHTML = '<li><a href="#tag-' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* add generated code to html variable */
    }
    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

    /* END LOOP: for every article: */
  }

  generateTags();

}