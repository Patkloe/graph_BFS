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
      var listsommet = this.listadj.get(i);
      var conc = " ";
      for(var j of listsommet)
          conc = conc + j;
   console.log(i + " " + "->" + " " + conc);
  }
 } // end printgraph
 parcours_BFS(startpt){
  function Queue(){
   this.sommets = [];
  }
  Queue.prototype.enqueue = function(v){  
   return this.sommets[this.sommets.length] = v;
  }
  Queue.prototype.dequeue = function(){
   return this.sommets.shift();
  }
  Queue.prototype.length = function(){
   return this.sommets.length;
  }
 var dejavue = [];
 var filesommet = new Queue();
 for(i = 0; i < this.nbresommets; i++)
     dejavue[i] = false;
 dejavue[startpt] = true;
 filesommet.enqueue(startpt);
  while(filesommet.length() > 0){
     var sommetout = filesommet.dequeue();
     console.log("sommet visite :" + " " + sommetout);
     var listsommet = this.listadj.get(sommetout);
     for(var i in listsommet){
         if(! dejavue[listsommet[i]]){
              dejavue[listsommet[i]] = true;
              filesommet.enqueue(listsommet[i]);
         } // fin if
     } // fin for
  } // fin while  
 } // fin parcours_BFS
}//end class graph
var tab = ['A','B','C','D','E'];
var test = new Graph(5);
for(i = 0; i < tab.length; i++)
    test.addsommet(tab[i]);
    test.addchemin('A','B');
    test.addchemin('A','C');
    test.addchemin('A','D');
    test.addchemin('B','C');
    test.addchemin('B','D');
    test.addchemin('B','E');
    test.addchemin('C','D');
    test.addchemin('C','E');
    test.addchemin('D','E');
    console.log("Our graph");
    test.printgraph();
    console.log("BFS process :");
    test.parcours_BFS('A');
