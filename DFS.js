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
 }// end printgraph method
 parcours_DFS(startpt){
  var dejavu = [];
  for(var i = 0; i < this.nbresommets; i++)
      dejavu[i] = false;
  this.DFS_util(dejavu,startpt);
 }
 DFS_util(dejavu,sommet){
  dejavu[sommet] = true;
  console.log("Sommet visite :" + " " + sommet);
  var sommetadj = this.listadj.get(sommet);
  for(var i in sommetadj){
   if(!dejavu[sommetadj[i]])
       this.DFS_util(dejavu,sommetadj[i]);
  }
 }
}//end class graph
var tab = ['A','B','C','D','E','D','F','G','H','I','J','K','L','M','N','O'];
var test = new Graph(16);
for (var i =0; i < tab.length; i++)
      test.addsommet(tab[i]);
      test.addchemin('A','B');
      test.addchemin('A','C');
      test.addchemin('A','L');
      test.addchemin('B','M');
      test.addchemin('B','D');
      test.addchemin('C','E');
      test.addchemin('D','G');
      test.addchemin('D','E');
      test.addchemin('E','H');
      test.addchemin('F','H');
      test.addchemin('F','J');
      test.addchemin('F','K');
      test.addchemin('F','L');
      test.addchemin('G','M');
      test.addchemin('G','I');
      test.addchemin('H','I');
      test.addchemin('H','N');
      test.addchemin('J','O');
      test.addchemin('J','K');
      test.addchemin('K','O');
      test.addchemin('K','L');
      test.addchemin('M','N');
      test.addchemin('N','O');
      console.log("OUR GRAPH");
      test.printgraph();
      console.log("Parcours en profondeur");
      test.parcours_DFS('A');
