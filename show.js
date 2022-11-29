var popup;
var count;
var counter;
var xglobal;
var yglobal;
var answerForm;
var order = 0;
var countValue = 60;
var Qworth;
var dailydouble= [];



var erorcountchecker = 0;


window.addEventListener('load', (e) =>{
    


    // Checks if answer button is clicked and if its clicked it runs the check answer function

    answerbtn.addEventListener("click", (e) => {
        e.preventDefault(); // Stops form from submitting

        CheckAnswer(true, answer.value);
    });

});

function ShowQuestion(Question, Category, Score, position){    

    globalposition = position;

    // Daily Double

    // if button clicked is in the daily double array then the user is prompted to make a wager
    if(dailydouble.includes(position)){
        var wager = prompt("This figure is a Daily Double. Enter a dollar amount from $0 to your total amount of money.")

        // checks that wager is a valid entry and propts the user continually if it isnt
        // chanecks if wage is greater than 0 less than the players score, is a number and that the players score isnt less than 0
        // if any of these things are met the loop will not break

        if(PlayersData[order].score < 0){
            alert('You dont have the necessary funds to play daily double.')
            wager = 0;

        }else{
            while(wager < 0 || wager > PlayersData[order].score || isNaN(parseInt(wager))){
                wager = prompt("Daily Double Rules: Please enter a dollar amount from $0 to " + PlayersData[order].score)       
            }

        }
        

        Score = wager
    }



    Qworth = parseInt(Score);
    // updates the scrore, question and catergoy element in the pop up 
    question.innerHTML = Question;
    category.innerHTML = Category + " for " + Score;

    // displayes the pop up on screen
    popup.style.display = "block";


    // this starts the count down when the pop up is displayed
    countdown()   

}  



function countdown(){
    // declares a set interval variable called count which counts from 60 to 0
    // every second the interval is updated and it decrements the count
    count = setInterval(function () {

        // checks if the counter reaches zero before an answer is given
        if(countValue == 0){
            CheckAnswer(false, null)  //Called when timer runs out
        }

        // reduces count value and updates it on the pop up
        countValue--;
        counter.innerHTML = countValue

    }, 1000);
}


// called if answer is given correctly, incorrectly or time runs out.
function CheckAnswer(answered, ans){

    clearInterval(count) // stops the count 


    realAnswer = Q[globalposition][1] // get the actual answer from the Q array

    var buttonid = "category-btn-" + globalposition.toString() // creating the id of the button that was clicked to eventually disable it

    //checks if an answer was given
    if(answered){

        // if an answer is given this checks if the given answer is equal to the real/expected answer
        if(ans.toLowerCase().trim() == realAnswer){

            findPercentageScore(true) // this function updates the score, number of questions and whether they are correct or incorrect for a specific player

            ShowAnswer(realAnswer, buttonid) // Asks the player if they want to show the answer if they got it incorrect or forfeited and if the answer given is correct it reveals the answer and disables the button
            alert('Question has been answered correctly.'); 
            

        }else{
            findPercentageScore(false) // this will subtract score and and 1 to incorrect
            order++; // gives turn to the next person in the players array
            
            RevealAnswer('Question has been answered incorrectly. Reveal the answer?', realAnswer, buttonid)
        }

    }else{
        findPercentageScore(false)
        order++;
        
        RevealAnswer('Question has been forfieted. Reveal the answer?', realAnswer, buttonid)
    }


    // Clears crutial game global variables
    Qworth = 0; // resets question worth
    answerForm.reset(); // resets answer input form
    popup.style.display = "none"; // hides the pop up 

    countValue = 60 // resets the counter
    counter.innerHTML = countValue.toString();


    //Reset order if it goes over the amount of players

    if(order == PlayersData.length){
        order = 0; // reset to the first player
    } 


    // Final Jeopardy
    var allbtns = document.getElementsByClassName("question-button")
    var match = false;
    for(var i = 0, len = allbtns.length; i < len; ++i) { 

        if(allbtns[i].disabled == false){
            match = true;
            continue;
        }
    }

    if(match == false){
        var finalJP = confirm("Do you want to play Final Jeopardy?")

        if(finalJP){
            var wager = prompt("Enter a dollar amount from $0 to your total amount of money.")

            while(wager < 0 || wager > PlayersData[order].score && (PlayersData[order].score > 0)){
                wager = prompt("DFinal Jeopardy Rules: Please enter a dollar amount from $0 to " + PlayersData[order].score)

            }

            var position = Math.floor(Math.random() * (25 - 29  + 1) + 25);
            console.log(position)
            ShowQuestion(Q[position][0], "Final Jeopardy" + Q[position][2], Q[position][3], position);   
            
            alert("The game has ended.")
         
        }
    }



    showall();
}


// Checks if the player wants to reveal the answer if they got it wrong or time ran out
function RevealAnswer(query, answer, btnID){
    var confirmed = confirm(query);

    // if user preseses okay this calls show answer else ntn is done
    if (confirmed){
        ShowAnswer(answer, btnID) // shows the answer
    }
}



function ShowAnswer(answer, btnID){
    
    // get the button element for the question
    var button = document.getElementById(btnID);

    // disable the button
    button.disabled = true;

    // change the buttons text to show the answer
    button.innerHTML = answer;

    // change the color of the answer for dramatic effect
    button.style.color = "#1fea66";  

    
}






function findPercentageScore(correct){

    // if player got the question correct
    if(correct == true){
        // adds the the questions worth global variable to the score for the player whos turn it is
        
        PlayersData[order].score = PlayersData[order].score + parseInt(Qworth);
        PlayersData[order].correct++;
        PlayersData[order].totalQuestions++;

    }else if(correct == false){
        // subtract the questions worth from the current players score
        PlayersData[order].score = PlayersData[order].score - parseInt(Qworth);
        PlayersData[order].incorrect++; 
        PlayersData[order].totalQuestions++;
    }

    PopulateActivePlayerSideBAr() // updates the information on the screen for all players
}


function PopulateActivePlayerSideBAr(){
    // Add player to listing on screen
    var playing = ``
    var playerContainer = document.getElementById("players");
    
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
        </div>
    </div>`
    
    }
    
    playerContainer.innerHTML = playing
    
    }