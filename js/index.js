//Get the button being clicked EXCEPT the equals button and all the in between text
$('.buttons >*:not(#equals)').click(function(ev){
  let  buttonText = ev.target.innerText;

//If the clear button is clicked, wipe the screen clean
  if(buttonText === 'C'){
    $('#screen').empty();

//If the x button is clicked, put a star instead of a lowercase x on the screen
//so the eval doesn't get messed up
  }else if(buttonText === 'x'){
    $('#screen').append('*');

//If it's any other button, put the innerText of that button on the screen
  }else{
  $('#screen').append(buttonText);
  }
})


//If the equals button is clicked, call an eval function on the current screen
$('#equals').click(function(ev){
  let expression = $('#screen').text();
  let result = eval(expression);
//Print the result to the screen
  $('#screen').text(result);
})
