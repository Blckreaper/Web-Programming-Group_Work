function Register() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    
    // Validates form data
    if(firstname.value.length > 3){
        if(firstname.value != "" && lastname.value != "" && birthday.value != "" && gender.value != "" && town.value != "" && education.value != "" && email.value != ""){
            if (email.value.match(validRegex)){
            if(parseInt(age.value) > 12){ 
                
                // Create and add the player to the player array
                
                
                if(PlayersData.length == 3){
                    alert("Maximum amount of players reached. Please press play to proceed.")
                    
                }else{
                    const player = {
                        firstName: firstname.value,
                        lastName: lastname.value,
                        email: email.value,
                        dob: birthday.value,
                        age: age.value,
                        gender: gender.value,
                        street: street.value,
                        city: city.value,
                        town: town.value,
                        country: country.value,                  
                        educationLevel: education.value,
                        score: 100,
                        totalQuestions: 0,
                        correct: 0,
                        incorrect: 0
                    };
    
                    PlayersData.push(player)    
                    
                    PopulateActivePlayerSideBAr()
                    showall()
                    

                    // Enable play and end game button
                    play.disabled = false;

                    // reset registration form
                    document.getElementById("registration-info-3").style.display="none";
                    document.getElementById("registration-info-1").style.display="block";     
                    form.style.display="none";
                    playersContianer.style.display="block"; 
                    error.innerHTML = ""
                    form.reset();
                    toggleform.innerHTML = "Register Player"

                }

                

            }else{
                error.innerHTML = "Must be 12+ to play."
            }
        }else{
                error.innerHTML = "Invalid email address."
            }
        }else{
            error.innerHTML = "Complete all required feilds."
        }
    }else{
        error.innerHTML = "Firstname must be longer the 3 characters."
    }
    
}

// Checks the first page of the form and validates the data before continuing


function FirstCheck(){

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // checks if first name is longer than three characters


        if(firstname.value.length > 3){
            // checks that required fields have data
            if(firstname.value != "" && lastname.value != "" && birthday.value != "" && gender.value != "" && email.value != ""){

                // check if email is properly formated
                if (email.value.match(validRegex)){

                    //checks that age is greater than 12
                    if(parseInt(age.value) > 12){            
                        document.getElementById("registration-info-1").style.display="none";
                        document.getElementById("registration-info-2").style.display="block";
                        error.innerHTML = ""
                    }else{
                        error.innerHTML = "Must be 12+ to play."
                    }


                }else{
                    error.innerHTML = "Invalid email address."
                }

            }else{
                error.innerHTML = "Complete all required feilds."
            }
        }else{
            error.innerHTML = "Firstname must be longer the 3 characters."
        }
    
}

// Checks the second page of the form and validates the data before continuing
function SecondCheck(){
    
    if(town.value != ""){          
        document.getElementById("registration-info-2").style.display="none";
        document.getElementById("registration-info-3").style.display="block";
        error.innerHTML = ""
        
    }else{
        error.innerHTML = "Complete all required feilds."
    }
}


