class Graph{
 constructor(nbresommets){  // nombre de sommets de ce graphe
  this.nbresommets = nbresommets;
  this.listadj = new Map();     // pour la liste d'adjacence de chaque sommet
 }
 addsommet(v){      // method pour ajouter un sommet au graphe
  this.listadj.set(v,[]) // set le sommet v et declare un tableau pour la liste des sommets adjacents a ce sommet
 }  // fin methode addsommet()
 addchemin(v,w){ // pour ajouter un chemin entre sommet v et w
  this.listadj.get(v).push(w); // chemin entre v - w
  this.listadj.get(w).push(v); // chemin entre w - v
 }
 printGraph() 
 { 
    // get all the vertices 
    var get_keys = this.listadj.keys(); 
  
    // iterate over the vertices 
    for (var i of get_keys)  
    { 
        // great the corresponding adjacency list 
        // for the vertex 
        var get_values = this.listadj.get(i); 
        var conc = ""; 
  
        // iterate over the adjacency list 
        // concatenate the values into a string 
        for (var j of get_values) 
            conc += j + " "; 
  
        // print the vertex and its adjacency list 
        console.log(i + " -> " + conc); 
    } 
} // fin printgraph
 parcours_BFS(start){  // method du graphe pour parcourir le graphe en largeur
  function Queue(){   // definition d'un objet Queue, une file qui cree une file vide ou on ajoutera "enqueue" et enlevera des sommets "dequeue"
   this.elements = [];
  }
  Queue.prototype.enqueue = function(x){    // methode pour ajouter un sommet en fin de file
    return this.elements.push(x);
  }
  Queue.prototype.dequeue = function(){  // methode pour enlever un sommet en tete de file
    return this.elements.shift();
  }
  Queue.prototype.length = function(){ // methode pour avoir la taille de la file
    return this.elements.length;
  }
  var deja_vu = [];  // on initialise a vide le tableau des sommets visites
  for(i = 0; i < this.nbresommets; i++)   // pour tous sommets du graphe
      deja_vu[i] = false;     // deja visites est false
      var filesommet = new Queue(); // on cree la file
      deja_vu[start] = true;   // premier sommet visite, on met a true dans deja visite
      filesommet.enqueue(start); // par la suite il inaugure la file
      while(filesommet.length() > 0){  // tant qu'il y'a un sommet dans la file on doit defiler ce sommet et le visiter
         var sommetout = filesommet.dequeue(); // on enleve le sommet en tete de file
         console.log("sommet enleve de la file :" + " " +sommetout);
         var listvois = this.listadj.get(sommetout); // on recupere la liste des voisins du sommet enleve en tete de liste
         for( var j in listvois){ // on parcourt la liste des voisins
            if(!deja_vu[listvois[j]]){ // si pas encore visite
               deja_vu[listvois[j]] = true ; // on le visite
               filesommet.enqueue(listvois[j]);
            }
         } // fin for
      } // fin while 
 } // fin parcours_BFS
} // fin class Graph
var g = new Graph(6); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
// ajoute des sommets et la liste vide des sommets adjacents 
for (var i = 0; i < vertices.length; i++) { 
    g.addsommet(vertices[i]); 
} 
  
// ajoute des chemins
g.addchemin('A', 'B'); 
g.addchemin('A', 'D'); 
g.addchemin('A', 'E'); 
g.addchemin('B', 'C'); 
g.addchemin('D', 'E'); 
g.addchemin('E', 'F'); 
g.addchemin('E', 'C'); 
g.addchemin('C', 'F'); 
  
// imprime tous les sommets et leurs liste d'adjacence
// A -> B D E 
// B -> A C 
// C -> B E F 
// D -> A E 
// E -> A D F C 
// F -> E C 
g.printGraph(); 
console.log("BFS"); 
g.parcours_BFS('A'); 
