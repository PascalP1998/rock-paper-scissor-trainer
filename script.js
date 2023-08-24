document.getElementById("control").addEventListener("click", controlMode);
document.getElementById("cheat").addEventListener("click", cheatMode);  
document.getElementById("easy").addEventListener("click", easyMode);  


let sideImages = {
    "paper": "images/paper_side.JPG",
    "rock": "images/rock_side.JPG",
    "scissor": "images/scissor_side.JPG"
};

let jamesImages = {
    "paper": "images/Paper.png",
    "rock": "images/Rock.png",
    "scissor": "images/Scissor.png"
};


// let sideImages = ["images/paper_side.JPG", "images/rock_side.JPG", "images/scissor_side.JPG"];
//let jamesImages = ["images/Paper.png", "images/Rock.png", "images/Scissor.png"];
//let randomjamesImage = jamesImages[Math.floor(Math.random() * jamesImages.length)];

const delay = ms => new Promise(res => setTimeout(res, ms));

function randomImage(obj) {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

async function controlMode() {
    document.getElementById("pick1").style.backgroundImage = "";
    document.getElementById("pick2").style.backgroundImage = "";
    document.getElementById("pick3").style.backgroundImage = "";
    document.getElementById("cheatpick").style.visibility = "hidden";
    document.getElementById("gamestate").style.visibility = "visible";
    document.getElementById("signpick").style.visibility = "hidden";

    countdown();
    await delay(6000);
    // let randomSideImage = sideImages[Math.floor(Math.random() * sideImages.length)];
    chosenPick1 = randomImage(sideImages);
    chosenPick2 = randomImage(sideImages);
    chosenJames = randomImage(jamesImages);
    pick1 = document.getElementById("pick1").style.backgroundImage = "url('" + chosenPick1 + "')";
    pick2 = document.getElementById("pick2").style.backgroundImage = "url('" + chosenPick2 + "')";
    pick3 = document.getElementById("pick3").style.backgroundImage = "url('" + chosenJames + "')";
    buttonTie = document.getElementById("tie");
    buttonLoss = document.getElementById("loss");
    buttonWin = document.getElementById("win");
    console.log("Pick1: " + chosenPick1);
    console.log("Pick2: " + chosenPick2);
    console.log("Pick James: " + chosenJames);
    console.log("Pick-Object-Test: " + sideImages["scissor"]);

    const timeoutDuration = 4000; // Zeit in Millisekunden (hier 3 Sekunden)
    let timeoutFinished = false;
    const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
            if (!timeoutFinished) {
                document.getElementById("pick1").style.backgroundImage = "";
                document.getElementById("pick2").style.backgroundImage = "";
                document.getElementById("pick3").style.backgroundImage = "";
                document.getElementById("countdown").innerHTML = "<h2>ZU LANGSAM!</h2>";
                resolve(); // Löst das Promise aus, wenn die Zeit abgelaufen ist
            };
        }, timeoutDuration);
    });
    
    
    buttonTie.addEventListener("click", () => {
        if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else {
            document.getElementById("countdown").innerHTML = "<h2>FALSCH!</h2>";
        };
        document.getElementById("pick1").style.backgroundImage = "";
        document.getElementById("pick2").style.backgroundImage = "";
        document.getElementById("pick3").style.backgroundImage = "";
        timeoutFinished = true;
    });

    buttonLoss.addEventListener("click", () => {
        if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else {
            document.getElementById("countdown").innerHTML = "<h2>FALSCH!</h2>";
        };
        document.getElementById("pick1").style.backgroundImage = "";
        document.getElementById("pick2").style.backgroundImage = "";
        document.getElementById("pick3").style.backgroundImage = "";
        timeoutFinished = true;
    });

    buttonWin.addEventListener("click", () => {
        if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else {
            document.getElementById("countdown").innerHTML = "<h2>FALSCH!</h2>";
        };
        document.getElementById("pick1").style.backgroundImage = "";
        document.getElementById("pick2").style.backgroundImage = "";
        document.getElementById("pick3").style.backgroundImage = "";
        timeoutFinished = true;
    });

    await timeoutPromise; // Warten bis entweder Zeit abgelaufen oder Knopf gedrückt wurde

    // Actual Logic finally getting here

    //if (pick1 === sideImages["scissor"] & pick2 === sideImages["scissor"] & pick3 === jamesImages["scissor"])

};

async function easyMode() {
    document.getElementById("pick1").style.backgroundImage = "";
    document.getElementById("pick2").style.backgroundImage = "";
    document.getElementById("pick3").style.backgroundImage = "";
    document.getElementById("signpick").style.visibility = "visible";
    document.getElementById("cheatpick").style.visibility = "hidden";
    document.getElementById("gamestate").style.visibility = "hidden";

    countdown();
    await delay(6000);
    // let randomSideImage = sideImages[Math.floor(Math.random() * sideImages.length)];
    chosenPick1 = randomImage(sideImages);
    chosenPick2 = randomImage(sideImages);
    pick1 = document.getElementById("pick1").style.backgroundImage = "url('" + chosenPick1 + "')";
    pick2 = document.getElementById("pick2").style.backgroundImage = "url('" + chosenPick2 + "')";
    buttonRockRock = document.getElementById("rockrock");
    buttonScissorScissor = document.getElementById("scissorscissor");
    buttonPaperPaper = document.getElementById("paperpaper");
    buttonRockPaper = document.getElementById("rockpaper");
    buttonScissorRock = document.getElementById("scissorrock");
    buttonScissorPaper = document.getElementById("scissorpaper");
    console.log("Pick1: " + chosenPick1);
    console.log("Pick2: " + chosenPick2);

    const timeoutDuration = 4000; // Zeit in Millisekunden (hier 3 Sekunden)
    let timeoutFinished = false;
    const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
            if (!timeoutFinished) {
                document.getElementById("pick1").style.backgroundImage = "";
                document.getElementById("pick2").style.backgroundImage = "";
                document.getElementById("countdown").innerHTML = "<h2>ZU LANGSAM!</h2>";
                resolve(); // Löst das Promise aus, wenn die Zeit abgelaufen ist
            };
        }, timeoutDuration);
    });
    
    buttonRockRock.addEventListener("click", () => {
        if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else {
            document.getElementById("countdown").innerHTML = "<h2>FALSCH!</h2>";
        };
        document.getElementById("pick1").style.backgroundImage = "";
        document.getElementById("pick2").style.backgroundImage = "";
        document.getElementById("pick3").style.backgroundImage = "";
        timeoutFinished = true;
    });

    buttonScissorScissor.addEventListener("click", () => {
        if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else {
            document.getElementById("countdown").innerHTML = "<h2>FALSCH!</h2>";
        };
        document.getElementById("pick1").style.backgroundImage = "";
        document.getElementById("pick2").style.backgroundImage = "";
        document.getElementById("pick3").style.backgroundImage = "";
        timeoutFinished = true;
    });

    buttonPaperPaper.addEventListener("click", () => {
        if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else {
            document.getElementById("countdown").innerHTML = "<h2>FALSCH!</h2>";
        };
        document.getElementById("pick1").style.backgroundImage = "";
        document.getElementById("pick2").style.backgroundImage = "";
        document.getElementById("pick3").style.backgroundImage = "";
        timeoutFinished = true;
    });

    buttonRockPaper.addEventListener("click", () => {
        if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else {
            document.getElementById("countdown").innerHTML = "<h2>FALSCH!</h2>";
        };
        document.getElementById("pick1").style.backgroundImage = "";
        document.getElementById("pick2").style.backgroundImage = "";
        document.getElementById("pick3").style.backgroundImage = "";
        timeoutFinished = true;
    });

    buttonScissorRock.addEventListener("click", () => {
        if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else {
            document.getElementById("countdown").innerHTML = "<h2>FALSCH!</h2>";
        };
        document.getElementById("pick1").style.backgroundImage = "";
        document.getElementById("pick2").style.backgroundImage = "";
        document.getElementById("pick3").style.backgroundImage = "";
        timeoutFinished = true;
    });

    buttonScissorPaper.addEventListener("click", () => {
        if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else {
            document.getElementById("countdown").innerHTML = "<h2>FALSCH!</h2>";
        };
        document.getElementById("pick1").style.backgroundImage = "";
        document.getElementById("pick2").style.backgroundImage = "";
        document.getElementById("pick3").style.backgroundImage = "";
        timeoutFinished = true;
    });

    await timeoutPromise; // Warten bis entweder Zeit abgelaufen oder Knopf gedrückt wurde


};

async function cheatMode() {
    document.getElementById("pick1").style.backgroundImage = "";
    document.getElementById("pick2").style.backgroundImage = "";
    document.getElementById("pick3").style.backgroundImage = "";
    document.getElementById("cheatpick").style.visibility = "visible";
    document.getElementById("tie").style.visibility = "hidden";
    document.getElementById("loss").style.visibility = "hidden";
    document.getElementById("win").style.visibility = "visible";
    document.getElementById("signpick").style.visibility = "hidden";
 

    countdown();
    await delay(6000);
    // let randomSideImage = sideImages[Math.floor(Math.random() * sideImages.length)];
    chosenPick1 = randomImage(sideImages);
    chosenPick2 = randomImage(sideImages);
    chosenJames = randomImage(jamesImages);
    pick1 = document.getElementById("pick1").style.backgroundImage = "url('" + chosenPick1 + "')";
    pick2 = document.getElementById("pick2").style.backgroundImage = "url('" + chosenPick2 + "')";
    pick3 = document.getElementById("pick3").style.backgroundImage = "url('" + chosenJames + "')";

    buttonWin = document.getElementById("win");
    buttonRock = document.getElementById("rock");
    buttonPaper = document.getElementById("paper");
    buttonScissor = document.getElementById("scissor");
    console.log("Pick1: " + chosenPick1);
    console.log("Pick2: " + chosenPick2);
    console.log("Pick James: " + chosenJames);
    console.log("Pick-Object-Test: " + sideImages["scissor"]);

    const timeoutDuration = 4000; // Zeit in Millisekunden (hier 3 Sekunden)
    let timeoutFinished = false;
    const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
            if (!timeoutFinished) {
                document.getElementById("pick1").style.backgroundImage = "";
                document.getElementById("pick2").style.backgroundImage = "";
                document.getElementById("pick3").style.backgroundImage = "";
                document.getElementById("countdown").innerHTML = "<h2>ZU LANGSAM!</h2>";
                resolve(); // Löst das Promise aus, wenn die Zeit abgelaufen ist
            };
        }, timeoutDuration);
    });
    
    buttonRock.addEventListener("click", () => { chosenJames = jamesImages["rock"]; pick3 = document.getElementById("pick3").style.backgroundImage = "url('" + jamesImages["rock"] + "')";});
    buttonPaper.addEventListener("click", () => { chosenJames = jamesImages["paper"]; pick3 = document.getElementById("pick3").style.backgroundImage = "url('" + jamesImages["paper"] + "')";});
    buttonScissor.addEventListener("click", () => { chosenJames = jamesImages["scissor"]; pick3 = document.getElementById("pick3").style.backgroundImage = "url('" + jamesImages["scissor"] + "')";});
    console.log("Pick James ist jetzt: " + chosenJames);

    
    buttonWin.addEventListener("click", () => {
        if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["scissor"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["scissor"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["scissor"] & chosenJames == jamesImages["rock"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["paper"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["paper"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else if (chosenPick1 == sideImages["rock"] & chosenPick2 == sideImages["rock"] & chosenJames == jamesImages["paper"]) {
            document.getElementById("countdown").innerHTML = "<h2>Korrekt!</h2>";
        } else {
            document.getElementById("countdown").innerHTML = "<h2>FALSCH!</h2>";
        };
        document.getElementById("pick1").style.backgroundImage = "";
        document.getElementById("pick2").style.backgroundImage = "";
        document.getElementById("pick3").style.backgroundImage = "";
        timeoutFinished = true;
    });

    await timeoutPromise; // Warten bis entweder Zeit abgelaufen oder Knopf gedrückt wurde
};

function countdown() {
    var timeleft = 5;
    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "<h2>Los!</h2>";
      } else {
        document.getElementById("countdown").innerHTML = "<h2>" + timeleft + " Sekunden bis zur Auswahl </h2>";
      }
      timeleft -= 1;
    }, 1000);
}
