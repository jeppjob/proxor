var acc = document.getElementsByClassName("accordion");
for ( var i=0;i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        var subcats = this.nextElementSibling;
        if (subcats.style.display==="block"){
            subcats.style.display = "none";
        }else{
            subcats.style.display= "block";
        }
    });
}