var x = 1;
function creation(){
    var li = document.createElement('li');
    var input = document.getElementById('myInput');
    var inputValue = input.value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue ===""){
        alert("You must write something!");
    }
    else{
        var myList = document.getElementById("myUL");
        myList.appendChild(li);
    }
    document.getElementById('myInput').value = "";
    var span = document.createElement('span');
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}
var add= document.getElementById('add'), myNodList = document.getElementsByTagName('li');
for (i=0 ; i<myNodList.length; i++){
    var span = document.createElement('span'), txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodList[i].appendChild(span);
}
var clos =  document.getElementsByClassName("close");
for (i=0; i<close.length; i++){
    close[i].addEventListner('click',() =>{
        var div = this.parentElement;
        div.style.display = "none";
    })
}

var list = document.getElementsByTagName('li');
for (i=0; i<list.length; i++){
    list[i].addEventListener('click', checked)
}
function checked(){
    (this.className === '')?this.className = "checked":this.className = '';
}
// list.addEventListener('click', function(ev){
    //     if (ev.target.tagName ==='li') {
        //         ev.target.classList.toggle('checked')
        //     }
        // }, false);
        // this.style.color= 'red';
        // this.style.textDecoration = "line-through";
        
add.addEventListener('click',creation);