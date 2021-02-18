function numRandom() {
    document.getElementById("number").innerHTML = (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString();
}