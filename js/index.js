var dialog = document.getElementsByClassName("dialog")[0];
var dialog2 = document.getElementsByClassName("dialog2")[0];
var variableBorder = 1;
var changeBorder = setInterval(change, 300);
var next = 0;
dialog2.style.border = "none";

function change() {
    if (variableBorder == 1 && next == 0) {
        dialog.style.border = "none";
        dialog2.style.border = "none";
        variableBorder = 2;
    }
    else if (variableBorder == 2 && next == 0) {
        dialog.style.borderRight = "10px solid white";
        dialog2.style.border = "none";
        variableBorder = 1;
    }
    else if (variableBorder == 1 && next == 1) {
        dialog.style.border = "none";
        dialog2.style.border = "none";
        variableBorder = 2;
    }
    else if (variableBorder == 2 && next == 1) {
        dialog.style.border = "none";
        dialog2.style.borderRight = "10px solid white";
        variableBorder = 1;
    }
}

var dialogs = { 
    value0: function() {
        texts = "Bienvenido...";
        timer = 150;
    },
    value1: function() {
        texts = "Próximamente...";
        timer = 150;
    },
    value2: function() {
        texts = "NETTER TECNOLOGÍA";
        timer = 250;
    },
    value3: function() {
        texts = "@netter.tecnologia";
        timer = 250;
    }
};

var namber = 0;
var timer;
var texts;


type();

function type() {
    dialog.style.fontsize = "50px";
    dialog2.style.fontsize = "50px";
    dialog.style.marginLeft = "0px";
    dialogs["value" + namber]();

    dialog.innerHTML = "";
    dialog2.innerHTML = "";
    var Letters = [];

    for (var i = 0; i < texts.length; i++) {
        text = texts.charAt(i);
        Letters[i] = text;
    }

    writes = setInterval(write, timer);

    positionLetter = 0;
    var b = 0;
    function write() {
        if (positionLetter == Letters.length) {
            clearInterval(writes);
            namber++;
            if (namber == Object.keys(dialogs).length) {
                clearInterval(writes);
                namber = 0;
                positionLetter = 0;                
            }
            setTimeout(type, 1500);
            return;
        }
        //dialog.innerHTML += Letters[positionLetter];
        //positionLetter++;
        if(namber == 2 && positionLetter <= 6){
            dialog2.innerHTML += Letters[positionLetter];
            b += 28;
            dialog.style.marginLeft = b+"px";
            positionLetter++;
            next = 1;
        }
        else if(namber == 2 && positionLetter > 6){
            dialog2.style.border = "none";
            next = 0;
            dialog.innerHTML += Letters[positionLetter];
            positionLetter++;            
        }
        else{
            dialog.innerHTML += Letters[positionLetter];
            positionLetter++;
            //dialog.style.marginLeft = "0px";
        }
    }
}
