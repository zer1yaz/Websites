
function Hours() {

    let birthday = prompt("When are you born?");
    let formula = (2022 - birthday)*8760;

    // let text = document.createTextNode("You are live " + formula + "days in planet!");
    // h2.appendchild(text);
    // document.getElementById("answer").appendChild(h2);

    document.getElementById('answer').innerHTML = formula;
}

function Reset() {
    document.getElementById('answer').remove();
}

