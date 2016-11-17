/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//"use strict";
//var camel;
//camel = "Welcome Budy";
//alert(camel);
var a = [1, 2, 5, 4, 3];
function myFunction() {
    a.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("SNo").innerHTML = a;

}
//if statement
var name = "Nagappan";
if (name = "Nagappan")
{
    alert("Welcome to Java Script Tuition");
}
else
{
    alert("Thank You");
}
function myWhile() {
    var increment = 0;
    var text;
    text = "<p>";
    while (increment < a.length) {
        text += a[increment] + "<br />";
        increment++;
    }
    text += "</p>";
    document.getElementById("whilecon").innerHTML = text;
    //document.getElementById("whilecon").innerHTML = increment;
}
