console.log("This output is from the external JS file");
var name = "Dimorri";
let school= "Mallard Creek";
var grade ="12 rising senior"
console.log(`Name: ${name}`);
console.log(`School: ${school}`);
console.log(`Grade: ${grade}`);
document.getElementById("name").innerHTML = "<b>Name: </b><i>" + name + "</i>"
document.getElementById("school").innerHTML = "<b>School: </b><i>" +school + "</i>";
document.getElementById("grade").ineerHTML = "<b>Grade: </b><i>" + grade + "</i>";
