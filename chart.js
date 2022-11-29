window.addEventListener('load', (e) =>{

    // Calls the frequency function every 5 seconds 
    setInterval(function () {
        showfreq()
    }, 5000);
})

function showfreq(){

    var male = 0;
    var female = 0;
    var age1 = 0;
    var age2 = 0;
    var age3 = 0;
    var age4 = 0;
    
    // check to ensure that there are players in the array
    if(PlayersData.length != 0){

        // traverses through each player and collects data relevant to that player
        for(var i = 0; i < PlayersData.length; ++i) {
            
            // save age of player and turn it into an int
            var age = parseInt(PlayersData[i].age)

            // checks gender and increments that value
            if(PlayersData[i].gender == 'female'){
                // if player is female increment female variable
                female++;
            }else{
                // count the number of males in the playerdata array
                male++;
            }

            // counts players in each age range
            if( age < 20){
                age1++;
            }else if( age < 40){
                age2++;
            }else if( age < 70){
                age3++;
            }else{
                age4++;
            }
        }

        
        // calculates percentage of each ddemography
        female = female/PlayersData.length*100
        male = male/PlayersData.length*100


        age1 = age1/PlayersData.length*100
        age2 = age2/PlayersData.length*100
        age3 = age3/PlayersData.length*100
        age4 = age4/PlayersData.length*100

    } 


    // this updates the charts in the html code
    document.getElementById("showcharts").innerHTML = `
    <div style="width: 50%;">
    
    <h6 style="margin-top:0;">Gender Chart</h6>
    <p>Males</p>
    <img class="barchart" src="chart.jpg" alt="" height="15px" width="${male}">

    <p>Females</p>
    <img class="barchart" src="chart.jpg" alt="" height="15px" width="${female}">
    
    </div>

    <div style="width: 50%;">
    
    <h6 style="margin-top:0;">Age Chart</h6>
    <p>Under 20</p>
    <img class="barchart" src="chart.jpg" alt="" height="15px" width="${age1}">

    <p>20 - 39</p>
    <img class="barchart" src="chart.jpg" alt="" height="15px" width="${age2}">
    
    <p>40 - 69</p>
    <img class="barchart" src="chart.jpg" alt="" height="15px" width="${age3}">
    
    <p>Over 69</p>
    <img class="barchart" src="chart.jpg" alt="" height="15px" width="${age4}">
    </div>
    `

}