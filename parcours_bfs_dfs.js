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
    var listsommet = this.listadj.get(i)
     for(var j of listsommet)
       conc = conc + j;
    console.log(i + ""+"->"+conc);
   }
 }// fin printgraph
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
   console.log("sommet visite :" + " " + sommetout);
   var listsommet = this.listadj.get(sommetout);
   for(var j in listsommet){
     if(!dejavu[listsommet[j]]){
        dejavu[listsommet[j]]= true;
        filesommet.enqueue(listsommet[j]); 
     }// fin if
   }// fin for
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
  console.log("sommet visite : " + " " + sommet);
  var sommetlist = this.listadj.get(sommet);
  for(var i in sommetlist){
   if(!dejavu[sommetlist[i]])
     this.DFSutil(sommetlist[i],dejavu);
  }
 }//fin DFSutil
}//fin class Graph
var tab = ['A','B','C','D','E','F','G','H','I','J'];
var test = new Graph(10);
for(var i =0; i < tab.length; i++)
  test.addsommet(tab[i]);
  test.addchemin('A','B');
  test.addchemin('A','C');
  test.addchemin('A','D');
  test.addchemin('B','E');
  test.addchemin('B','C');
  //test.addchemin('A','B');
  test.addchemin('C','F');
  test.addchemin('C','G');
  test.addchemin('E','F');
  //test.addchemin('C','G');
  //test.addchemin('G','F');
  test.addchemin('G','H');
  test.addchemin('G','F');
  test.addchemin('G','J');
  test.addchemin('G','D');
  test.addchemin('D','J');
  test.addchemin('I','J');
  test.addchemin('H','I');
  test.addchemin('H','F');
  test.printgraph();
  console.log("Parcours en largeur, BFS :");
  test.parcours_BFS('A');
  console.log("Parcours en profondeur, DFS :");
  test.parcours_DFS('A');
