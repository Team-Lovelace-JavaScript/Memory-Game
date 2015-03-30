function displayRules(){
    var wrapper = document.getElementById("wrapper");
    wrapper.style.background  = "url(\'images/background-no-text.jpg\')";

    var rulesDiv = document.createElement("div");
    var rulesParagraph = document.createElement("div");
    var okButton = document.createElement("div")

    rulesParagraph.style.margin = "40px";
    rulesParagraph.style.marginTop = "80px";
    rulesParagraph.style.textAlign = "left";

    rulesDiv.id = "login-div";
    okButton.id = "start-btn";

    rulesParagraph.innerHTML =
         "1. Choose two tiles from the board. " +
         "2. If the picture is the same in both of them, they will remain open. If they are not, they will be closed." +
         "3. Keep opening two tiles at a time and try to memorise the pictures of the ones that were not matched and have been closed." +
         "4. You have fixed time for every level. Make sure to open all tiles by the time the slider at the top reaches the end." +
         "5. Levels start one after another without pause, so be ready." +
         "Good luck!";
    okButton.innerHTML = "OK";

    wrapper.appendChild(rulesDiv);
    rulesDiv.appendChild(rulesParagraph);
    rulesDiv.appendChild(okButton);

    slideOpen(rulesDiv, 450, 1.2);
    okButton.onclick = function(){
        slideClose(rulesDiv, 1.2);
        rulesDiv.remove();
    }
}
