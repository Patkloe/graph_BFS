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
      var listkeys = this.listadj.get(i);
    for(var j of listkeys)
        conc = conc + j;
  console.log(i + " " + "->" + " " + conc);
  }
 } // fin printgraph
 parcours_BFS(startpt){
  function Queue(){
   this.elements = [];
  }
  Queue.prototype.enqueue = function(x){
    return this.elements.push(x);
  } 
  Queue.prototype.dequeue = function(){
   return  this.elements.shift();
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
          console.log("sommet a visiter : " + " " + sommetout);
          var listsommet = this.listadj.get(sommetout);
          for( var j in listsommet){
             if(!dejavu[listsommet[j]]){
                 dejavu[listsommet[j]] = true;
                 filesommet.enqueue(listsommet[j]);
             }       // fin if
          }
     }             // fin while length filesommet
 }// fin parcours_BFS
 parcours_DFS(startpt){
  var dejavu = [];
  for(var i = 0; i < this.nbresommets; i++)
      dejavu[i] = false;
      this.DFSutil(dejavu,startpt);
 } // fin parcours_DFS
   DFSutil(dejavu, sommet){
    dejavu[sommet] = true;
    console.log(" visited sommet :" + " " + sommet);
    var listsommets = this.listadj.get(sommet);
    for( var i in listsommets){
       if(!dejavu[listsommets[i]])
          this.DFSutil(dejavu,listsommets[i]);
    }// fin for
   } // fin DFSutil    
}// fin class graph
var tab = ['A','B','C','D','E','F','G','H','I','J','K'];
var test = new Graph(11);
for(var i = 0; i < tab.length; i++)
   test.addsommet(tab[i]);
   test.addchemin('A','B');
   test.addchemin('A','C');
   test.addchemin('A','D');
   test.addchemin('A','B');
   test.addchemin('B','E');
   test.addchemin('C','F');
   test.addchemin('C','I');
   test.addchemin('D','H');
   test.addchemin('E','F');
   test.addchemin('E','I');
   test.addchemin('F','H');
   test.addchemin('F','J');
   test.addchemin('G','I');
   test.addchemin('G','J');
   test.addchemin('G','K');
   test.addchemin('H','J');
   test.addchemin('I','K');
   test.addchemin('J','K');
   test.printgraph();
   console.log("Parcours en Largeur :");
   test.parcours_BFS('A');
   console.log("Parcours en Profondeur :");
   test.parcours_DFS('A');
