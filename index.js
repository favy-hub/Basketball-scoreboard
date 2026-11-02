let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el")
let homeScore = JSON.parse(localStorage.getItem("homeScore"));
let guestScore = JSON.parse(localStorage.getItem("guestScore"));
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    highestScorer()
    saveScore()
}

function increaseHomeScoreTwo(){
    homeScore +=2
    homeScoreEl.textContent = homeScore
    highestScorer()
    saveScore()
}
function increaseHomeScoreThree(){
    homeScore +=3
    homeScoreEl.textContent = homeScore
    highestScorer()
    saveScore()
}

function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    highestScorer()
    saveScore()
}
function increaseGuestScoreTwo(){
    guestScore +=2
    guestScoreEl.textContent = guestScore
    highestScorer()
    saveScore()
}
function increaseGuestScoreThree(){
    guestScore +=3
    guestScoreEl.textContent = guestScore
    highestScorer()
    saveScore()
}

function highestScorer(){
    if(homeScore > guestScore){
        homeScoreEl.style.color = "#047857";
        guestScoreEl.style.color = "#881337";
    }
    else if(guestScore > homeScore){
        guestScoreEl.style.color = "#047857";
        homeScoreEl.style.color = "#881337";
    }
    else {
        homeScoreEl.style.color = "";
        guestScoreEl.style.color = "";
    }
}

function saveScore(){
    localStorage.setItem("homeScore", homeScore)
    localStorage.setItem("guestScore", guestScore)
}
