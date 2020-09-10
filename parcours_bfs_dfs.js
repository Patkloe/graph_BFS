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
      var conc = "";
      var listsommet = this.listadj.get(i);
      for(var j of listsommet)
         conc = conc + j;
   console.log(i + " " + "->" + " " + conc);
  }
 }// fin printgraph
 parcours_BFS(startpt){
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
    //dejavu[i] = false;
    var filesommet = new Queue();
    dejavu[startpt] = true;
    filesommet.enqueue(startpt);
    while(filesommet.length() > 0){
      var sommetout = filesommet.dequeue();
      console.log("Sommet visite : " + " " + sommetout);
      var listsommet = this.listadj.get(sommetout);
      for(var j in listsommet){
         if(!dejavu[listsommet[j]]){
             dejavu[listsommet[j]] = true;
             filesommet.enqueue(listsommet[j]);
         }// fin if
      } // fin for
    } // fin while
 } // fin parcours_DFS
 parcours_DFS(startpt){
  var dejavu = [];
  for(var i =0; i < this.nbresommets; i++)
     dejavu[i] = false;
     this.DFSutil(startpt,dejavu); 
 }
 DFSutil(sommet,dejavu){
  dejavu[sommet] = true;
  console.log("sommet visite : " + "" + sommet);
  var listsommet = this.listadj.get(sommet);
  for(var i in listsommet){
   if(!dejavu[listsommet[i]])
     this.DFSutil(listsommet[i],dejavu);
  }
 }
}//fin class graph
var tab=['A','B','C','D','E','F','G','H','I','J','K'];
var test = new Graph(11);
for(var i = 0; i < tab.length; i++)
    test.addsommet(tab[i]);
    test.addchemin('A','B');
    test.addchemin('A','C');
    test.addchemin('A','D');
    test.addchemin('B','C');
    test.addchemin('B','E');
    test.addchemin('C','F');
    test.addchemin('C','G');
    test.addchemin('D','G');
    test.addchemin('D','J');
    test.addchemin('E','F');
    test.addchemin('F','G');
    test.addchemin('F','H');
    test.addchemin('G','H');
    test.addchemin('G','J');
    test.addchemin('H','K');
    test.addchemin('H','I');
    test.addchemin('I','J');
    test.addchemin('J','K');
    console.log ("impression du graphe");
    test.printgraph();
    console.log("Parcours en largeur");
    test.parcours_BFS('A');
    console.log("Parcours en profondeur");
    test.parcours_DFS('A');
    //test.parcours_DFS('A');
