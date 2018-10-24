//get user input element
var filterInput = document.querySelector("#filter");
//console.log(filterInput);

//add event listener
filterInput.addEventListener("keyup", filterNames);
function filterNames() {
  //  console.log("hello from filterNames");
  //get value that user input
  var filterValue = filterInput.value;
 // console.log(filterValue);
  //get all names in contact list
  var names= document.querySelectorAll('li.contact-name');
 //console.log(names);
 for(var i=0;i<names.length;i++) {
 //get link inside names
  var a = names[i].querySelector("a");
 // console.log(a);
 if(a.innerHTML.toUpperCase().includes(filterValue.toUpperCase())) { names[i].style.display = "block";
 } else {
    names[i].style.display ="none";
    // console.log(a.innerHTML)
 }
} 

}
