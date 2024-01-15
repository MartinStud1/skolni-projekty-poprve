using System; 

public class Program {

  public static void Main(string[] args) {
    double x = 0; 
    double y = 0;
    double vysledek;
    double a;
    Console.WriteLine("Vítej ve funkci : tetrace ... zadáš základ(x) a tetrát(y). Řídíme se vzorcem x↑↑y");
    Console.WriteLine(" ");
    Console.Write(" Zadej x : ");
    x = Int32.Parse(Console.ReadLine());
    Console.Write(" Zadej y : "); //y je kolik x se bude umocňovat - y=3 = x na x na x 
    //každé umocněné x už není x, ale jiné číslo - např. a tím a pak totiž budu umocňovat další x.. a zase ten výsledek se přepíše do a
    y = Int32.Parse(Console.ReadLine());
    a = x;
    while(y!=1){
      vysledek = Math.Pow(x,a);  
      a = vysledek;
      y--;
      if(y == 1){
      Console.WriteLine(vysledek);
        }
    } 
    
     
  }
}