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
 printgraph(){
  var getkeys = this.listadj.keys();
  for(var i of getkeys){
     var conc = " ";
     var listsomadj = this.listadj.get(i);
     for(var j of listsomadj)
      conc = conc + j;
   console.log(i + "->" + conc);
  }
 } // fin printgraph
 parcours_BFS(startingpt){
  function Queue(){
   this.elements = [];
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
  for(var i = 0; i < this.nbresommets; i++)
   dejavu[i] = false;
   var filesommet = new Queue();
   dejavu[startingpt] = true;
   filesommet.enqueue(startingpt);
   while(filesommet.length() > 0){
    var sommetout = filesommet.dequeue();
    console.log(" sommet sorti tete de file : " + " " + sommetout);
    var listsommet = this.listadj.get(sommetout);
     for(var j in listsommet){
      if(!dejavu[listsommet[j]]){
         dejavu[listsommet[j]] = true;
         filesommet.enqueue(listsommet[j]);
      }
     } // fin for
   }// fin while

 }// fin parcours_BFS
 parcours_DFS(startingpt){
  var dejavu = [];
  for(var i = 0; i < this.nbresommets; i++)
      dejavu[i] = false;
      this.DFSutil(startingpt,dejavu);
 }// fin parcours_DFS
 DFSutil(sommet,dejavu){
  dejavu[sommet] = true;
  console.log("sommet parcouru : " + " " + sommet);
  var sommetvis = this.listadj.get(sommet);
  for(var i in sommetvis){
   if(!dejavu[sommetvis[i]])
     this.DFSutil(sommetvis[i],dejavu);
  }
 }
} // fin class Graph
var test = new Graph(7)
var tab = ['A','B','C','D','E','G','H','I','J','H'];
for( var i = 0; i < tab.length; i++)
  test.addsommet(tab[i]);
   test.addchemin('A','B');
    test.addchemin('A','C');
    test.addchemin('A','D');
    test.addchemin('B','E');
    test.addchemin('C','I');
    test.addchemin('C','F');
    test.addchemin('D','H');
    test.addchemin('E','I');
    test.addchemin('E','F');
    test.addchemin('F','H');
    test.addchemin('F','J');
    test.addchemin('H','J');
    test.addchemin('I','G');
    test.addchemin('I','H');
    test.addchemin('G','H');
    test.addchemin('G','J');
    test.addchemin('J','H');
   test.printgraph();
   console.log("parcours en largeur BFS");
   test.parcours_BFS('A');
   console.log("parcours en profondeur DFS");
   test.parcours_DFS('A');
