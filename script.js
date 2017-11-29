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
 } 

 function update(row, tBody){
  alert(row);
  alert(tBody);
 }


window.onload = function () {
  

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

                        }
                    }
                }
                
  xhr.send();    
  }       

  
  var clear = document.getElementById("Clear");
  
                

    document.getElementById("Clear").addEventListener("click",
                function () {
                  
     window.location.reload();
                          },
            false);


      
}


