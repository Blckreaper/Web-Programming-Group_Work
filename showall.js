function showall(){
    // Add player to listing on screen
    var playing = ``
    var allplayers = document.getElementById("allplayers");
    
    // for each player in playerdata array create and display html
    for(var i = 0, len = PlayersData.length; i < len; ++i) {
    
        playing = playing + `<div class="player">
        <div class="player-name">
            <p>${PlayersData[i].firstName + " " + PlayersData[i].lastName} (${PlayersData[i].town})</p>
            <button id="showallplayers" onclick="Quit(${i})">Quit</button>
            
        </div>
        <div class="player-score" id="player-score${i}">
        Score: $ ${FormatCurrency(PlayersData[i].score)}
            <span> 
                Correct: ${PlayersData[i].correct} |             
                InCorrect: ${PlayersData[i].incorrect} | 
                Total Questions: ${PlayersData[i].totalQuestions}
            </span> 
            <span> 
                Gender: ${PlayersData[i].gender} |             
                Age: ${PlayersData[i].age} | 
                Education Level: ${PlayersData[i].educationLevel}
            </span> 
        </div>
    </div>`
    
    }
    
    allplayers.innerHTML = playing
}



function EndGame(){
    location.reload();
}