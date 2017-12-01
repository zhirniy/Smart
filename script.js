var select, url;

var value={};
var url_search;

  var operator1 = document.getElementById("operator1");
 
  function change(params,id) {
      var pattern = /[1-9]{1}\[1\]/;
      var text = id;
    
      if(pattern.test(text)){
        value[id] ="\+" + params; 
      }
      else{
      value[id] = params;
      }

      access(id);
 } 

 function access(id){
  var firstChar = id.charAt(2);
  firstChar = firstChar * 1 + 1;
  id =id.substring(0, 2) + firstChar + id.substring(3, 4);
  id = document.getElementsByName(id);
  id[0].removeAttribute("disabled");
 }


window.onload = function () {
  
  var clear = document.getElementById("Clear");
  var input = document.getElementsByTagName('input');
  var select = document.getElementsByTagName('select');
  input[2].style.display = "none";


  document.getElementById("btnGet").onclick = function () {
  url_search = undefined;
  url = "https://api.github.com/search/repositories?q=";
  for (var key in value) {
       if (value.hasOwnProperty(key)) {
       if(url_search === undefined){
       url_search = value[key];
       }
       else{
       url_search+=value[key];}
      }
}

  url = "https://api.github.com/search/repositories?q=" + url_search;
  //document.getElementById("output").innerHTML = url_search;
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
                        //   document.getElementById("output").innerHTML = url_search;

                        }
                    }
                }
                
  xhr.send();    
  }       

  

                

    document.getElementById("Clear").addEventListener("click",
                function () {
     input[0].value = "";
     select[0].value = "";
     select[1].value = "";               
     window.location.reload();
                          },
            false);


 
      
}


