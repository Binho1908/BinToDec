function load(){
    var bin = document.getElementById('input').value;
    var char = bin.split("");
    var hide = document.getElementsByClassName("hide")[0]
    for(i = 0; i < char.length; i++)
    if(char[i] >= "2"){
    
    hide.style.display = "block";    
    }else{
    hide.style.display = "none";
    }
    console.log(char);
    console.log(bin);
    var dec = document.getElementById('res');
    var dectobin = parseInt(bin,2);
    dec.innerHTML = dectobin;
}
function limpa(){
    
    var bin = document.getElementById('input').value = "";
    var dec = document.getElementById('res');
    dec.innerHTML = "";
}