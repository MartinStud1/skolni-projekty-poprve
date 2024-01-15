var x;
var a = 0;
var p = 0;
var tlacitko = document.getElementById("meTlacitko");
tlacitko.addEventListener("click", function(){
  x = document.getElementById("vstup").value
  while(x!=undefined){
    x=parseInt(x);
    a=parseInt(a);
    a = a+x;
    p++;
    p = parseInt(p);
    var vysledek = a/p;
    console.log("výsledek je " + vysledek);
    if(isNaN(x)){
      console.log("konec");
      console.log(x);
      console.log(a);
      console.log(p);
      console.log(vysledek);
     break;
     }
    x = undefined;
  }
})
//možnost : jestliže x není reálné číslo, tak se okamžitě zastav a vypiš výsledek /