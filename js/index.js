var dialog = document.getElementsByClassName("dialog")[0];
var variableBorder = 1;
var changeBorder = setInterval(change, 300);

function change() {
    if (variableBorder == 1) {
        dialog.style.border = "none";
        variableBorder = 2;
    } else if (variableBorder == 2) {
        dialog.style.borderRight = "10px solid white";
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
    }
};

var namber = 0;
var timer;
var texts;

type();

function type() {
    dialogs["value" + namber]();

    dialog.innerHTML = "";
    var Letters = [];

    for (var i = 0; i < texts.length; i++) {
        text = texts.charAt(i);
        Letters[i] = text;
    }

    writes = setInterval(write, timer);

    positionLetter = 0;

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
        dialog.innerHTML += Letters[positionLetter];
        positionLetter++;
    }
}
