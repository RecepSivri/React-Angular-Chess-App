function move(clickedButton,y, x) {

    var piece=clickedButton.innerHTML.toString().split("//")[1].split(".")[0];
    //if(piece.charAt(0)==='w')


    if(piece==="wpawn")
        window.alert(piece+"               "+y+"    ,   "+x);

}