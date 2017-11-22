
window.onload = function () {
  var add = document.getElementById("Add_Rule");
  var div2 = document.getElementById("div2");
  var div1 = document.getElementById("div1");
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var clear = document.getElementById("Clear");



   add.addEventListener("click",
                function () {
             
     div2.style.display = "block";
                   },
            false);


     button1.addEventListener("click",
                function () {
                  
     div1.style.display = "none";
                          },
            false);

     button2.addEventListener("click",
                function () {
                  
     div2.style.display = "none";
                          },
            false);

    clear.addEventListener("click",
                function () {
     div1.style.display = "block";             
     div2.style.display = "none";
                          },
            false);


}