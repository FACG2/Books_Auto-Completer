// var click = document.querySelector('#clicking');
// var opacity = document.querySelector('#opacity');
// var out = document.querySelector('.out');
// click.addEventListener('click',function(){

// 	opacity.classList.add('any-name');
 
// });    


var input = document.querySelector('input');

input.addEventListener('keyup', function(){
  makeRequest(this.value.toLowerCase());
});

function makeRequest(str){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      console.log(xhr.responseText);
    }
  }
  xhr.open('POST' , "/search?word="+str, true);
  xhr.send();
}
