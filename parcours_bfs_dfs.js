class Graph{
 constructor(nbresommets){
  this.nbresommets = nbresommets;
  this.listadj = new Map();
 }
 addsommet(v){
  this.listadj.set(v,[]);
 }
 addchemin(v,w){
  this.listadj.get(v).push(w);
  this.listadj.get(w).push(v);
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
 } 
 parcours_BFS(startpoint){
  function Queue(){
   this.elements =[];
  }
  Queue.prototype.enqueue = function(x){
   return this.elements.push(x);
  }
  Queue.prototype.dequeue = function(){
   return this.elements.shift();
  }
  Queue.prototype.length = function(){
   return this.elements.length;
  }
  var dejavu = [];
   for(i = 0; i < this.nbresommets; i++)
       dejavu[i] = false;
       var filesommet =  new Queue();
       dejavu[startpoint] = true;
       filesommet.enqueue(startpoint);
       while(filesommet.length() > 0){
        var sommetout = filesommet.dequeue();
        console.log("sommet sorti de la file :" + " " + sommetout);
        var listsommet = this.listadj.get(sommetout);
         for(var j in listsommet){
          if(!dejavu[listsommet[j]]){
              dejavu[listsommet[j]] = true;
              filesommet.enqueue(listsommet[j]);
          }// fin if
         } // fin for
       } // fin while
 } // fin parcours_DFS
 parcours_DFS(startingpt){
  var dejavu = [];
  for(var i = 0; i < this.nbresommets; i++)
   dejavu[i] = false;
  this.DFSproc(startingpt,dejavu);
 } // fin parcours_DFS
 DFSproc(sommet,dejavu){
  dejavu[sommet] = true;
  console.log("sommet rencontre :" + " " +sommet);
  var listsommet = this.listadj.get(sommet);
  for(var j in listsommet){
   if(!dejavu[listsommet[j]]) 
     this.DFSproc(listsommet[j],dejavu);
  }
 }
}// fin class Graph
var g = new Graph(6); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
// adding vertices 
for (var i = 0; i < vertices.length; i++) { 
    g.addsommet(vertices[i]); 
} 
  
// adding edges 
g.addchemin('A', 'B'); 
g.addchemin('A', 'D'); 
g.addchemin('A', 'E'); 
g.addchemin('B', 'C'); 
g.addchemin('D', 'E'); 
g.addchemin('E', 'F'); 
g.addchemin('E', 'C'); 
g.addchemin('C', 'F'); 
  
// prints all vertex and 
// its adjacency list 
// A -> B D E 
// B -> A C 
// C -> B E F 
// D -> A E 
// E -> A D F C 
// F -> E C 
g.printGraph(); 
console.log("BFS"); 
g.parcours_BFS('A');
console.log("DFS");  
g.parcours_DFS('A');
