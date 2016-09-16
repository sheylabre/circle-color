window.addEventListener("load", function() {
    var cri = document.getElementById("cri");
    var contador = 1;
    cri.addEventListener("click", function() {
        if(contador == 1){
            document.getElementsByClassName("circle")[0].style.border = "blue solid 3px";
            document.getElementById("barra").placeholder = "red";
            document.getElementsByClassName("circle")[1].style.border = "black";
            document.getElementsByClassName("circle")[2].style.border = "black";
        }
        if(contador == 2){
            document.getElementsByClassName("circle")[1].style.border = "blue solid 3px";
            document.getElementById("barra").placeholder = "yellow";
            document.getElementsByClassName("circle")[0].style.border = "black";
            document.getElementsByClassName("circle")[2].style.border = "black";
        }
        if(contador == 3){
            document.getElementsByClassName("circle")[2].style.border = "blue solid 3px";
            document.getElementById("barra").placeholder = "green";
            document.getElementsByClassName("circle")[1].style.border = "black";
            document.getElementsByClassName("circle")[0].style.border = "black";
            contador = 0;
        }
        contador++;
    });
    var spcri = document.getElementById("spcri");
    spcri.addEventListener("click", function() {
        var color = document.getElementById("barra").value;
        if(color == "red"){
            document.getElementById("cr1").style.border = "5px solid blue";
            document.getElementById("circle").style.border = "0px";
            document.getElementById("cr3").style.border = "0px";
        }
        else if(color == "yellow"){
            document.getElementById("cr1").style.border = "0px";
            document.getElementById("circle").style.border = "5px solid blue";
            document.getElementById("cr3").style.border = "0px";
        }
        else if(color == "green"){
            document.getElementById("cr1").style.border  = "0px";
            document.getElementById("cr2").style.border = "0px";
            document.getElementById("cr3").style.border = "5px solid blue";
        }
    });
});