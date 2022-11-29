var globalposition;

var Q =[
    ["What is 1000 divided by 0.5?", "2000", "Mathematics", '100'],
    ["The process when solids change from liquid to gas directly?", "sublimation", "Science", '100'],
    ["A series of sentences put togther is a?", "Paragraph", "English Lang.", '100'],
    ["In which parish in Jamaica can you find Port Esquivel?", "st. catherine","Social Studies", '100'],
    ["How many books are in the Protestant Old Testament? ", "39", "Bible Know.", '100'],
    ["What is 11 squared plus 9 squared?", "202","Mathematics", '200'], 
    ["The name for plants which complete their life cycle in one year?", "annuals", "Science", '200'],
    ["True or false the word AND is a consonant?", "False", "English Lang.", '200'],
    ["What is another name for lines of latitude", "parallels","Social Studies", '200'],
    ["On what day did God create man?", "6", "Bible Know.", '200'],
    ["What is the volume of a piece of wood, 7cm long, 8cm wide and 3cm thick? In cm cubed.", "168", "Mathematics", '300'],
    ["A disease thats spreads rapidly throughout a particular area called?", "epidemic", "Science", '300'],
    ["Which types of words a pronoun can replace in a sentence?", "Nouns", "English Lang.", '300'],
    ["The first minister of finance of Jamaica after independence?", "sir donald sangster","Social Studies", '300'],
    ["In what language was the Old Testament written? ", "hebrew", "Bible Know.", '300'],
    ["Concert tickets for adults are 500 dollars and children 300 dollars. How much would it cust 3 adults and 2 children to attend?", "2100", "Mathematics", '400'],
    ["Rusting occurs due to the corrosion of which metal.", "iron", "Science", '400'],
    ["What are verbs called?", "Action Words", "English Lang.", '400'],
    ["In which parish in Jamaica can you find Bound Brook Port?", "portland","Social Studies", '400'],
    ["Who was the only female judge of Israel?", "deborah", "Bible Know.", '400'],
    ["What is the denery equivalent of the roman numeral MCXVII?", "1117", "Mathematics", '500'],
    ["The name for the time of year when day and night are of equal lenghts?", "equinux", "Science", '500'],
    ["What are nouns used to describe?", "people, places, animals and things", "English Lang.", '500'],
    ["What is the name of rainfall due to warm wet air rising over mountian or hills?", "relief rainfall", 'Social Studies','500'],
    ["What sea did Moses part to aid in his people's escape from the Pharaoh?", "red sea", "Bible Know.", '500'],
    ["What is 4200 increased by 20%?", "5040","Mathematics", '100'],
    ["Which human organ store urine before it is discharged?", "bladder", "Science", '200'],
    ["By adding a sufix form an adjective from the word peace", "peaceful", "English Lang.", '300'],
    ["The Sisserou is a bird found on the national flag of which caribbean country?", "dominica","Social Studies", '400'],
    ["From what part of Adam's body did God create Eve?", "rib", "Bible Know.", '500']
]

function PlayGame(){
    

    enableBoard()

    // Adds a click listerner to each button with the class name quetion-button, jquery bind
    $(".question-button").bind("click", function(){
                
        globalposition = parseInt( $(".question-button").index($(this)));   
        
        
        ShowQuestion(Q[globalposition][0], Q[globalposition][2], Q[globalposition][3], globalposition);    
    });
    


    
}

// Removes player from the game.
function Quit(i){
    // Removes player from the playerdata array
    PlayersData.splice(i, 1)

    // Updates the active players slider disaplay
    findPercentageScore(null)

    // checks if there are any players in the game and if not disables all the game buttons and enables the register form
    if(PlayersData.length == 0){

        
        play.disabled = true; // disables play button
        end.disabled = true; // disables end game button
        toggleform.disabled = false; // enables the register form button
        document.getElementById("game-table").style.display = "none"; // hides the game board

        // Endables all feilds in the form
        var elements = form.elements; 
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = false;
        }

        // Turns age back into read only
        age.readOnly = true;

    }
}


function enableBoard(){
    document.getElementById("game-table").style.display = "block";
    end.disabled = false;

    // Disables all fields in the form by selecting them and turning on the readonly attribute

    disableform()
}

function disableform(){

    // turns all form feilds to read only
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].readOnly = true;
    }


    // Disables the form register button and enables the play and end game buttons.

    toggleform.disabled = true;
    results.disabled = true;
// Hides the form
    form.style.display = "none";
    playersContianer.style.display = "block";
    toggleform.innerHTML = "Register Player"
}