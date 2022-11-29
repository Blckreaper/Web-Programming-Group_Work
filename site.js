var PlayersData = []
var error;
var form;
var play;
var end;
var toggleform
var register
var previous 
var next1
var next2
var results;

var firstname;
var lastname;
var email;
var birthday;
var age;
var gender;
var street;
var city;
var town;
var country;
var education;
var map;
var playersContianer;


// On window load do the following code
window.addEventListener('load', (e) =>{

    // Gets the elements and stores them in a global variable to reference throughout the code
    var agefinder = document.getElementById("age");    
    form = document.getElementById("form"); 
    error = document.getElementById("error");
    play = document.getElementById("play");
    end = document.getElementById("end");
    next1 = document.getElementById("next1");
    next2 = document.getElementById("next2");
    previous = document.getElementById("previous");
    register = document.getElementById("register");
    toggleform = document.getElementById("registration");
    map = document.getElementById("game-map");
    playersContianer = document.getElementById("showPlayer");
    results = document.getElementById("results");


    play.disabled = true;
    end.disabled = true;
    results.disabled = true;
    toggleform.disabled = false;



    // Collects the form html fields

    firstname = document.getElementById("firstname");
    lastname = document.getElementById("lastname");
    email = document.getElementById("email");
    birthday = document.getElementById("dob");   
    age = document.getElementById("age");
    gender = document.getElementById("gender");
    street = document.getElementById("street");
    city = document.getElementById("city");
    town = document.getElementById("town");
    country = document.getElementById("country");
    education = document.getElementById("education");


    
    for(var i = 0, len = 3; i < len; ++i) {
        dailydouble.push(Math.floor(Math.random() * 24));
    }

    console.log(dailydouble)

    popup = document.getElementById("popup");
    var question = document.getElementById("question");
    var category = document.getElementById("category");

    var answerbtn = document.getElementById("answerbtn");
    answerForm = document.getElementById("answerform");
    var answer = document.getElementById("answer")
    counter = document.getElementById("counter");

    // Age calculator
    // places event listener on dob element. so whenever a change is registered it will run this code
    birthday.addEventListener("change", (e) => {

        var today = new Date();
        var born = new Date(birthday.value);
        var age = today.getFullYear() - born.getFullYear();
        var error = today.getMonth() - born.getMonth();
        
        if (error < 0 || (error === 0 && today.getDate() < born.getDate())) {
            age = age - 1;
        }

        if(age<0){
            age = 0
        }

        agefinder.value = age;
    })

    // checks if the first continue button on the form has been clicked

    results.addEventListener("click", (e) => {
        findPercentageScore(null);
    });

    next1.addEventListener("click", (e) => {
        e.preventDefault();

        // runs validation check on the first set of form feilds
        FirstCheck();
    });

    // Goes to the last page in the form
    next2.addEventListener("click", (e) => {
        e.preventDefault();
        SecondCheck();
    });

    // returns to the first form page
    previous.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("registration-info-1").style.display="block";
        document.getElementById("registration-info-2").style.display="none";
    });


    // Calls register function when register button is clicked
    register.addEventListener("click", (e) => {
        e.preventDefault(); // Stops form from submitting
        Register();
    });


    // Hides/Shows Register Form and Active Player View
    toggleform.addEventListener("click", (e) => {
        if(form.style.display == "none"){
            form.style.display = "block";
            playersContianer.style.display = "none";
            toggleform.innerHTML = "View Players"
        }else{
            form.style.display = "none";
            playersContianer.style.display = "block";
            toggleform.innerHTML = "Register Player"

        }
    })
   

})


function FormatCurrency(num){
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "JMD",
        maximumFractionDigits: 2,
        roundingIncrement: 5,
      }).format(num)
}

