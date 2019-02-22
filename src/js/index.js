// Example of DOM Manipulation with Pure JavaScript

const changeSubtextBackground = () => {
  // document.querySelector() selects an HTML element from the page by its attribute
    // ids are selected with the '#' preceeding the ID name

  // here we are selecting the <p id='subtext'></p> tag in our index.html
  const subtext = document.querySelector('#subtext');
  // this sets the 'style' attribute of the HTML element we selected
  // the same as writing <p id='subtext' style="background-color: blue;"></p> in HTML
  subtext.setAttribute('style', "background-color: blue" );
}

// calling a function from other.js
// remember to import it into index.html and in the correct order of what is initiated
exampleJavaScriptFn();


// now we call the function defined above
// it will select the HTML element with id='subtext'
// then it will color its background blue
changeSubtextBackground();


