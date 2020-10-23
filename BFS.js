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
   console.log(i + " " + " ->" + " " + conc);
  }
 }// fin printgraph method
 parcours_BFS(startpt){
  function Queue(){
   this.elements = [];
  }
  Queue.prototype.enqueue = function(v){
     return this.elements.push(v)
  }
  Queue.prototype.dequeue = function(){
     return this.elements.shift();
  }
  Queue.prototype.length = function(){
     return this.elements.length;
  }
  var dejavu = [];
  var filesommet = new Queue();
  for(i = 0; i < this.nbresommets; i++)
      dejavu[i] = false;
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
 }//fin parcours_BFS
} // fin class graph
var tab = ['A','B','C','D','E'];
var test = new Graph(5);
for(var i = 0; i < tab.length; i++)
        test.addsommet(tab[i]);
        test.addchemin('A','B');
        test.addchemin('A','C');
        test.addchemin('A','E');
        test.addchemin('B','D');
        test.addchemin('B','E');
        test.addchemin('C','D');
        test.addchemin('D','E');
        console.log("Our Graph :");
        test.printgraph();
        console.log("parcours en largeur 'BFS'");
        test.parcours_BFS('A');
