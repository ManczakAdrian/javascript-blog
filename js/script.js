

document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });

  // const titleClickHandler = function(){
  //   console.log('Link was clicked!');
  // }
  
 // const links = document.querySelectorAll('.titles a');
  
  // for(let link of links){
  //   link.addEventListener('click', titleClickHandler);
  // }
  "use strict";

  const favouritList = document.querySelector ('.author-name');
  const item= favouritList.querySelector('list authors');
 //const time=item.getAttribute('author-name');
  const items=favouritList.querySelectorAll("list authors");


  const clickItemHandler=function(){
    console.log(this);
    const clickedElement=this;

    clickedElement.classList.add('active');

    const time=clickedElement.getAttribute("author-name");
    console.log(time);
  };

  for(const item of items){
    item.addEventListener('click', clickItemHandler)



    // const time = item.getAttribute("post-content");
    // console.log(time);
  }
  console.log(item);
  console.log(favouritList);

  

const titleClickHandler = function(event){
  console.log('Link was clicked!');
  console.log(event);
  /* remove class 'active' from all article links  */

  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

  const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
  
