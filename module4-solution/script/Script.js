// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

var names = new Array("Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim");

var name = "";
for (i = 0; i < names.length; i++) {
    name = names[i];
    
    if( (name.slice(0,1) == "J") | (name.slice(0,1) == "j"))
        byeSpeaker.sayHello(name);
    else
        helloSpeaker.sayHello(name);
}
  

