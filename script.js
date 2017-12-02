var select, url;

var value={};
var url_search;

//функця записывает в объект value значения имени поля и его значения
//Если поле не являетс первым к ключу(имени) добавляется знак "+"
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
//Функция дающая доступ к следующему полю при заполнении данного
 function access(id){
  var firstChar = id.charAt(2);
  firstChar = firstChar * 1 + 1;
  id =id.substring(0, 2) + firstChar + id.substring(3, 4);
  id = document.getElementsByName(id);
  id[0].removeAttribute("disabled");
 }
//Функция удаляющая значения имени и значения из массива value при удалении строки
 function del(id_row){
   var tr = document.getElementsByTagName('tr');

for(var i = 1; i<4; i++){

  var tr_ = tr[id_row].cells[i];
   td = tr_.childNodes[1];
   td = td.name;
   value[td] = "";

}


 }

window.onload = function () {
//При загрузке страницы мы будем прослушивать событие отпраки запроса на сервер 
//и очистки всех полей  
  var clear = document.getElementById("Clear");
  var input = document.getElementsByTagName('input');
  input[2].style.display = "none";

//При отправке запроса на сервер мы через GET запрос записываем дополнительные араметры поиска из массива value
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

                           if(url_search === undefined){
                             document.getElementById("output").innerHTML = "Введите параметры поиска";
                           }

                           else{
                           
                           document.getElementById("output").innerHTML = "Общее колличество совпадений:" + text.total_count + "<br>" + 
                           count;   
                          
                         }

                        }
                    }
                }
                
  xhr.send();    
  }       

  
//При нажатии на кнопку Cleaar делаем перезагрузку страницы и очищаем первое поле 
                

    document.getElementById("Clear").addEventListener("click",
                function () {
     input[0].value = "";
     select[0].value = "";
     select[1].value = ""; 
     select[1].setAttribute("disabled", "disabled");
     input[0].setAttribute("disabled", "disabled");
     value = {};              
     window.location.reload();
                          },
            false);


 
      
}


