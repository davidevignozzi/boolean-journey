var element = document.getElementsByClassName('element-class')

for (var x = 0; x < element.length; x++){
  if (x === 3) {
    element[x].innerHTML = 'buzz'
  } else {
    element[x].innerHTML = 'fizz'
  }
}

// div class element con scritta fizz solo il terzo con scritta buzz.
