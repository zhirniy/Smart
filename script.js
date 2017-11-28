var select, url;

var value={};
var url_search;

  var operator1 = document.getElementById("operator1");
 
  function change(params,id) {
      value[id] = params;
 } 
 function change_(params,id) {
      value[id] ="\+" + params;
 } 
  function change_number(id) {
   select = document.getElementById(id);
   value[id] = select.value;
} 



window.onload = function () {
  

  
  document.getElementById("btnGet").onclick = function () {
  url_search=undefined;
  url = "https://api.github.com/search/repositories?q=";
  for (var key in value) {
       if (value.hasOwnProperty(key)) {
       if(url_search===undefined){
       url_search = value[key];
       }
       else{
       url_search+=value[key];}
      }
}

  url = "https://api.github.com/search/repositories?q=" + url_search;
  var xhr = new XMLHttpRequest();          // Создание объекта для HTTP запроса.
  xhr.open("GET", url, false); // Настройка объекта для отправки синхронного GET запроса
   xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) { // если получен ответ
                        if (xhr.status == 200) { // и если статус код ответа 200
                            var text = JSON.parse(xhr.responseText);
                          //text = xhr.responseText;
                            var count;
                            for(var i = 0; i < text.items.length; i++){
                              if(count===undefined){
                               count = "id пользователя:"+ text.items[i].id  +"&nbsp&nbsp" + "Полное имя:"+ text.items[i].full_name +"&nbsp&nbsp" +"url:"+ text.items[i].html_url + "<br>";  
                              }
                              else{
                              count += "id пользователя:"+ text.items[i].id + "&nbsp&nbsp" + "Полное имя:"+ text.items[i].full_name +"&nbsp&nbsp" +"url:"+ text.items[i].html_url+ "<br>";  
                              }

                           }
                           
                           document.getElementById("output").innerHTML = "Общее колличество совпадений:" + text.total_count + "<br>" + 
                           count;    

                        }
                    }
                }
                
  xhr.send();    
  }       

  var add = document.getElementById("Add_Rule");
  var div2 = document.getElementById("div2");
  var div1 = document.getElementById("div1");
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var clear = document.getElementById("Clear");
  var field1 = document.getElementById("field1");
  var field2 = document.getElementById("field2");
  var operator1 = document.getElementById("operator1");
  var operator2 = document.getElementById("operator2");
  var number1 = document.getElementById("number1");
  var number2 = document.getElementById("number2");
  var body = document.getElementById("body");



add.addEventListener("click",
                function () {
      if(div1.style.display == "none"){
        div1.style.display = "block"; 
        div2.style.display = "none";
      } else{
      div2.style.display = "block";  }         
    
                   },
            false);


  add.addEventListener("click",
                function () {
      if(div2.style.display == "none"){
        div2.style.display = "block"; 
      } else if (div1.style.display == "none"){
      div1.style.display = "block";  }         
    
                   },
            false);


     button1.addEventListener("click",
                function () {
                  
     div1.style.display = "none";
     field1.value = "";
     operator1.value = "";
     number1.value = "";

                          },
            false);

     button2.addEventListener("click",
                function () {
                  
     div2.style.display = "none";
     field2.value = "";
     operator2.value = "";
     number2.value = "";
                          },
            false);

    clear.addEventListener("click",
                function () {
     location.reload(true);
                          },
            false);


      
}


