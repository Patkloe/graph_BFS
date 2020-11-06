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
      var listsommet = this.listadj.get(i);
      for(var j of listsommet)
        conc = conc + j;
  console.log(i + " " + " -> " + " " + conc);
  }
 } // end printgraph
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
      dejavu[i] = false;
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
     } // fin if
   }// fin for
  }// fin while
 }// fin parcours_DFS
}// end class Graph
var tab = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'];
var test = new Graph(20);
for(var i = 0; i < tab.length; i++)
    test.addsommet(tab[i]);
    test.addchemin('A','B');
    test.addchemin('A','C');
    test.addchemin('A','D');
    test.addchemin('B','E');
    test.addchemin('C','E');
    test.addchemin('C','F');
    test.addchemin('D','H');
    test.addchemin('E','J');
    test.addchemin('F','G');
    test.addchemin('F','K');
    test.addchemin('G','H');
    test.addchemin('H','K');
    test.addchemin('H','L');
    test.addchemin('H','I');
    test.addchemin('I','L');
    test.addchemin('J','K');
    test.addchemin('K','M');
    test.addchemin('L','O');
    test.addchemin('M','P');
    test.addchemin('N','O');
    test.addchemin('N','P');
    test.addchemin('P','T');
    test.addchemin('Q','S');
    test.addchemin('Q','R');
    test.addchemin('R','S');
    test.addchemin('T','Q');
    console.log("Votre graphe");
    test.printgraph();
    console.log("Votre parcours en largeur");
    test.parcours_BFS('A');


