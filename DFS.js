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
 
 parcours_DFS(startpt){
  var dejavue = [];
  for(var i = 0; i < this.nbresommets; i++)
      dejavue[i] = false;
  this.DFS_util(dejavue,startpt);
 }// fin parcours_DFS
 DFS_util(dejavue,sommet){
   dejavue[sommet] = true;
   console.log("Sommet visite : " + " " + sommet);
   var listsommet = this.listadj.get(sommet);
   for(var i in listsommet){
     if(!dejavue[listsommet[i]])
       this.DFS_util(dejavue,listsommet[i]);
   }
 }
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
    console.log("DFS process :");
    test.parcours_DFS('A');
