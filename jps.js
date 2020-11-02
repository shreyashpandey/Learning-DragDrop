var hell=[];
alert("Hello");
function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
function a(){
    document.forms[0].style.display="block";
}
function b(id)
{
    alert("h");
    //
    var hell1=[{text:document.getElementById(id).value}];
    hell.push(hell1);
    document.forms[0].reset();
    //document.forms[0].style.display="block";
    //c();
}
