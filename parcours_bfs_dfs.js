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
   console.log(i + " " + "->" + " " + conc);
  }
 } // fin printgraph
 parcours_BFS(startpt){
  function Queue(){
   this.elements = [];
  }
  Queue.prototype.enqueue = function(v){
   return this.elements.push(v);
  }
  Queue.prototype.dequeue = function(){
   return this.elements.shift();
  }
  Queue.prototype.length = function(){
   return this.elements.length;
  }
  var filequeue = new Queue();
  var dejavu = [];
  for(i = 0; i < this.nbresommets; i++)
      dejavu[i] = false;
      dejavu[startpt] = true;
      filequeue.enqueue(startpt);
      while(filequeue.length() > 0){
        var sommetout = filequeue.dequeue();
        console.log("sommet hors de la queue :" + " " + sommetout);
        var listsommet = this.listadj.get(sommetout);
        for( var i in listsommet){
          if(!dejavu[listsommet[i]]){
           dejavu[listsommet[i]] = true;
           filequeue.enqueue(listsommet[i]);
          } // fin if
        } // fin for
      }// fin while
 } // fin parcours_BFS
 parcours_DFS(startpt){
  var dejavu =[];
  for(i = 0; i < this.nbresommets; i++)
      dejavu[i] = false;
      this.DFSutil(dejavu,startpt);
 }// fin parcours_DFS
 DFSutil(dejavu,sommet){
  dejavu[sommet] = true;
  console.log("Sommet visite :" + " " + sommet);
  var listsommet = this.listadj.get(sommet)
  for(var j in listsommet){
   if(!dejavu[listsommet[j]])
     this.DFSutil(dejavu,listsommet[j]);
  }// fin for
 }// fin DFS
} // fin class graph
var tab = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
var test = new Graph(13);
for(var i = 0; i < tab.length; i++)
    test.addsommet(tab[i]);
    test.addchemin('A','B');
    test.addchemin('A','C');
    test.addchemin('A','D');
    test.addchemin('A','E');
    test.addchemin('B','E');
    test.addchemin('B','G');
    test.addchemin('B','H');
    test.addchemin('C','D');
    test.addchemin('C','G');
    test.addchemin('D','F');
    test.addchemin('D','L');
    test.addchemin('D','I');
    test.addchemin('D','K');
    test.addchemin('D','M');
    test.addchemin('E','H');
    test.addchemin('F','K');
    test.addchemin('F','L');
    test.addchemin('G','H');
    test.addchemin('G','I');
    test.addchemin('H','J');
    test.addchemin('I','J');
    test.addchemin('J','M');
    test.addchemin('K','L');
    test.addchemin('K','M');
    console.log("This is your graph each sommet with it adjancy list :");
    test.printgraph();
    console.log("parcours en largeur/ BFS");
    test.parcours_BFS('A');
    console.log("parcours en profondeur/ DFS :");
    test.parcours_DFS('A');
    
