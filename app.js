window.addEventListener("load", function() {
    var cri = document.getElementById("cri");
    cri.addEventListener("click", function() {
        
    });
    var spcri = document.getElementById("spcri");
    spcri.addEventListener("click", function() {
        var color = document.getElementById("barra").value;
        if(color == "red"){
            document.getElementById("cr1").style.border = "5px solid blue";
            document.getElementById("cr2").style.border = "0px";
            document.getElementById("cr3").style.border = "0px";
        }
        else if(color == "yellow"){
            document.getElementById("cr1").style.border = "0px";
            document.getElementById("cr2").style.border = "5px solid blue";
            document.getElementById("cr3").style.border = "0px";
        }
        else if(color == "green"){
            document.getElementById("cr1").style.border = "0px";
            document.getElementById("cr2").style.border = "0px";
            document.getElementById("cr3").style.border = "5px solid blue";
        }
    });
});