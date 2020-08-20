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
  var sommets = this.listadj.keys();
  console.log("debut");
  for( var i of sommets){
     var conc = " ";
     var listsommets = this.listadj.get(i);
     for( var j of listsommets)
        conc = conc + j + " ";
    console.log(i + " -> " + conc);
  }
 } // fin print graph
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
  for(i = 0; i < this.nbresommets; i++)
    dejavu[i] = false;
    var filesommet = new Queue();
    dejavu[startingpt] = true;
    filesommet.enqueue(startingpt);
    while(filesommet.length() > 0){
      var sommetout = filesommet.dequeue();
      console.log("sommet enleve en tete de file :" + " " + sommetout);
      var listsommet = this.listadj.get(sommetout);
      for(var j in listsommet){
        if(!dejavu[listsommet[j]]){
            dejavu[listsommet[j]] = true;
            filesommet.enqueue(listsommet[j]);
        }
      } // fin for
    } // fin while   
 }//fin bfs
} // fin class Graph
var test = new Graph(7);
var sommets = ['A','B','C','D','E','F','G'];
for(var i = 0; i < sommets.length; i++)
   test.addsommet(sommets[i]);
   test.addchemin('A','B');
   test.addchemin('A','E');
   test.addchemin('A','D');
   test.addchemin('B','G');
   test.addchemin('B','C');
   test.addchemin('C','G');
   test.addchemin('C','E');
   test.addchemin('C','F');
   test.addchemin('D','E');
   test.addchemin('E','F');
   test.printgraph();
   console.log(" Parcours en largeur ");
   test.parcours_BFS('A');
