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



const interview_run = () => {
  // array stuff
  const orig_array = [];
  for(i = 0; i< 6; i++) {
    orig_array.push(Math.round(Math.random()*100));
  }
  orig_span = document.querySelector("#orig_array");
  orig_span.innerHTML = orig_array.join(","); 

  output_array = sort_array(orig_array);
  
  output_span = document.querySelector("#output_array");
  output_span.innerHTML = output_array.join(","); 

  // api integration stuff
  api_defs = api_integration();
  api_defs_span = document.querySelector("#api_defs");
  api_defs_span.innerHTML = "<ol>" + api_defs.map((t) => "<li>"+t+"</li>").join("") + "</ol>"; 

  // rainbow colour stuff
  rainbow_colours_arr = rainbow_colours();
  rb_span = document.querySelector("#rainbow_colours");
  rb_span.innerHTML = rainbow_colours_arr.map((o) => '<span style="background-color:' + o.colour + '">' + o.label + '</span>').join("<br/>"); 
}

interview_run();