function displayDate() {
    document.getElementById("showDate").innerHTML = Date();
}

function myFunction() {
    let userInput = document.querySelector("#name").value;
    let message = document.querySelector("#message");
    
    

    


    message.innerHTML = "Coffee Coding Company welcomes, " + userInput + " to our website. You are logging in at " + Date();
}

function myFunction2() {
    let feeling = document.querySelector("#feeling").value;

    message2.innerHTML = "We're glad that you are doing " + feeling + "!";
}

function insult() {
    message3.innerHTML = "You are looking very bad today.";
}

function coffee() {
    coffeeMess.innerHTML = "There are 5 coffee places around you";
}
function help() {
    helpMess.innerHTML = "This webpage was built with basic HTML and JS. If you have any questions please reach out to me at malicea@uncc.edu";
}
function motivate() {
    motivateMess.innerHTML = "You miss 100% of the shots you don't take. Don't give up."
}
function Joke() {
    jokeMess.innerHTML = "Mitosis"
}
