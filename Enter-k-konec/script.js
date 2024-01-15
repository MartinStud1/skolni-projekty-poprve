var x = document.getElementById("vstup");
var a = 0;
var p = 0;
var vysledek = 0;
var clean = document.getElementById("vstup");
x.addEventListener("keydown", function(event) {
  if (event.key === "Enter"){
    x = document.getElementById("vstup").value;
    clean.value = " ";
      a = parseInt(a);
      x = parseInt(x);
     while(true){
       if(isNaN(x)){
         document.getElementById("output").innerHTML = "Výsledek aritmetického průměru je: " + vysledek;
         break;
       }
        a = a + x;
        p++;
        vysledek = a/p;
        break;
    }
  }
})