const testerJs = () => {
  var test = 'test';
  $(document).ready(() => {
    $('p').css('background-color', 'red');
    $('p').text(`${test}`);
  })
}

testerJs();