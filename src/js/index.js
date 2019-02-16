// DOM Manipulation with Pure JavaScript
const testerPureJavaScriptFunction = () => {
  const subtext = document.getElementsByClassName('subtext')[0];
  subtext.setAttribute('style', "background-color: blue" );
}

window.addEventListener('load', () => {
  testerPureJavaScriptFunction();
})



// DOM Manipulation with JQuery
// const testerJQueryFunction = () => {
//   $(document).ready(() => {
//       $('.subtext').css('color', 'red');
//   })
// }

// testerJQueryFunction();
