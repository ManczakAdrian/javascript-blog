
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


  function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */
    titleList = document.querySelector(optTitleListSelector);

    document.querySelector('.list.titles').innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log(customSelector);
    console.log(optArticleSelector + customSelector);
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
  optTagsListSelector = '.tags.list';
  optCloudClassCount = 5;
  optCloudClassPrefix = 'tag-size-';


  function calculateTagsParams(tags) {
    const params = { max: 0, min: 999999 };

    for (let tag in tags) {
      console.log(tag + 'is used' + tags[tag] + 'times');
      if (tags[tag] > params.max) {
        params.max = tags[tag];
      }
      if (tags[tag] < params.min) {
        params.min = tags[tag];
      }

    }

    return params;
  };

  function calculateTagClass(count, params) {
    const tagCounts={};


  }



  function generateTags() {
    /* [NEW] create a new variable allTags with an empty array */
    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {}; // tworzymy nowy obiekt
    /* find all articles */
    articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles) {
      /* find tags wrapper */
      const tagList = article.querySelector(".post-tags .list");

      /* make html variable with empty string */
      let html = "";
      /* get tags from data-tags attribute */
      const tags = article.getAttribute("data-tags");
      /* split tags into array */
      const articleTagsArray = tags.split(' ');

      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {

        /* generate HTML of the link */

        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>&nbsp;';
        //const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
        /* add generated code to html variable */
        html += linkHTML;

        /* [NEW] check if this link is NOT already in allTags */
        //jeśli allTags nie ma klucza tag
        if (!allTags[tag]) {
          /* [NEW] add generated code to allTags array */
          allTags[tag] = 1;
          /* END LOOP: for each tag */
        } else {
          allTags[tag]++;
        }
        /* insert HTML of all the links into the tags wrapper */
        tagList.innerHTML = html;
        console.log(allTags);
        /* END LOOP: for every article: */
      }
      /* [NEW] find list of tags in right column */
      const rightTagList = document.querySelector(".tags.list");
      /* [NEW] add html from allTags to tagList */
      //rightTagList.innerHTML = allTags.join(' ');

      /* [NEW] create variable for all links HTML code */
      const tagsParams = calculateTagsParams(allTags);
      console.log('tagsParams:', tagsParams)
      let allTagsHTML = '';

      const tagLinkHTML = '<li>' + calculateTagClass(allTagsHTML += '<li><a href="#tag-' + tag + '"><span>' + tag + '(' + allTags[tag] + ')</span></a></li>&nbsp;');
      console.log('tagLinkHTML:', tagLinkHTML);


      /* [NEW] START LOOP: for each tag in allTags: */
      for (let tag in allTags) {
        /* [NEW] generate code of a link and add it to allTagsHTML */
        allTagsHTML += tagLinkHTML;
      }
      /* [NEW] END LOOP: for each tag in allTags: */

      /*[NEW] add HTML from allTagsHTML to tagList */
      tagList.innerHTML = allTagsHTML;

    }
  }
  generateTags();

  function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    /* find all tag links with class active */
    const activetagLinks = classList.querySelectorAll('a.active[href^="#tag-"]');
    /* START LOOP: for each active tag link */
    for (let activetaglink of activetagLinks) {
      /* remove class active */
      activetaglink.classList.remove('active');
    }
    /* END LOOP: for each active tag link */
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tags = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each found tag link */
    for (let foundTag of tags) {
      /* add class active */
      foundTag.classList.add('active');
      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');

  }

  function addClickListenersToTags(tags, callback) {

    /* find all links to tags */
    const elements = document.querySelectorAll(tags);
    /* START LOOP: for each link */
    elements.forEach(function (element) {
      element.addEventListener('click', callback);
    });
    /* add tagClickHandler as event listener for that link */

    /* END LOOP: for each link */
  }
}
addClickListenersToTags();


optArticleAuthorSelector = '.post-author';

function generateAuthor() {
  const allArticles = document.querySelectorAll(optArticleSelector);

  for (let article of allArticles) {
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    const author = article.getAttribute('data-author');
    const authorHTML = 'by <a href="#author-' + author + '">' + author + '</a>';
    authorWrapper.innerHTML = authorHTML;
  }
}

generateAuthor();

function authorClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const author = href.replace('#author-','');
  const activeauthorLinks = document.generateTitleLinks('[data-author="' + author + '"]');

  for (let activeauthorLink of activeauthorLinks) {
    activeauthorLink.classList.remove('active');
  }

  const linksAuthor = document.querySelectorAll('a[href="' + href + '"]');
  for (let linkAuthor of linksAuthor) {
    linkAuthor.classList.add('active');
  }

  generateTitleLinks('[data-auhor="' + Author + '"]');

}


function addClickListenersToAuthors() {
  const elements = document.querySelectorAll('a[href^="#author-"]');

  elements.forEach(function (element) {
    element.addEventListener('click', authorClickHandler)
  });
}

addClickListenersToAuthors();





