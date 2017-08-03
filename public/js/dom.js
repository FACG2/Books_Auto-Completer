var input = document.querySelector('input');
var div = document.querySelector('.form');

input.addEventListener('keyup', function(){
  makeRequest(this.value.toLowerCase());
});

function makeRequest(str){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var data = JSON.parse(xhr.responseText);
      create(data);
    }
  }
  xhr.open('POST' , "/search?word="+str, true);
  xhr.send();
}

function create(obj){
  var dataList = document.createElement('datalist');
  dataList.id = "books";
  dataList.classList.add("books");
  Object.keys(obj).map(function(index){
    var option = document.createElement('option');
    option.value = obj[index];
    dataList.appendChild(option);
  });
  var oldDataList = document.querySelector("#books");
  div.replaceChild(dataList, oldDataList);

}
