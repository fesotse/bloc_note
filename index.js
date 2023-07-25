var add= document.getElementById('add'), myNodList = document.getElementsByTagName('li');
var del = document.getElementsByClassName('close');
var list = [];


function recuperation(){
    //note pour la récupération, les taches déjà accomplis deviennent normal (non coché)
    alert('Récupération des taches antérieurs')
    var myList = document.getElementById("myUL");
    var input = document.getElementById('myInput');
    var sauvegard= localStorage.getItem('tache'); // à noter sauvegarde est un string
    list = sauvegard.split(',');// string into array and store in list
    if (list!=""){
        list.forEach(element => {
            var li = document.createElement('li');
            myList.appendChild(li);
            var span = document.createElement('span');
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(document.createTextNode(element));
            console.log(element);
            li.appendChild(span);
        });
    } else{

    }
}

function creation(){
    var li = document.createElement('li');
    var input = document.getElementById('myInput');
    var inputValue = input.value;
    var text = document.createTextNode(inputValue);
    var myList = document.getElementById("myUL");
    if (inputValue !==""){ // verification de saisie de donnée pour la tache
        myList.appendChild(li); 
        li.appendChild(text);
        list.push(inputValue);
        console.log(list);
        localStorage.setItem('tache',`${list}`);
        console.log(localStorage.getItem('tache'));
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
    else{
        alert("You must write something!")}
    
}
function check(){
        (this.className === '')?this.className = "checked":this.className = '';
};

        
add.addEventListener('click',creation);
// fonction check
setInterval(()=>{
    var li = document.getElementsByTagName('li');
    for (i=0; i<li.length;i++){
        li[i].addEventListener('click',check)
    
    }
},500);
//fonction delete
setInterval(()=>{for (i = 0; i<del.length; i++){
    del[i].addEventListener('click', function(){
        var motsEfface = this.parentElement.innerText;
        motsEfface = motsEfface.slice(0,motsEfface.length-2);
        var positionDelete = list.indexOf(motsEfface);
        this.parentElement.remove();
        //update the list
        (positionDelete!=-1)?list.splice(positionDelete,1): console.log("pas de mots");
        localStorage.setItem('tache',`${list}`); //update of the local storage

        //this.localStorage.removeItem('');// efface le cache sur le dossier
    });}
}, 500)

window.addEventListener('load', recuperation)