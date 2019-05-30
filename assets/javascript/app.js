
    var triviaOptions = [
        {
            question: "Who is the leader of the Justice League?", 
            choice: ["Flash", "Batman", "Green Lantern", "Superman", "Aquaman"],
            answer: 3,
            photo: "assets/images/superman.png"
         },
         {
            question: "Which member does not have super abilities?", 
            choice: ["Cyborg", "Batman", "Wonder Woman", "Green Lantern"],
            answer: 1, 
            photo: "assets/images/batman2.png"
         }, 
         {
            question: "What is the name of the Justice League Headquarts?", 
            choice: ["Stark Industries", "Starlabs", "Watchtower"],
            answer: 2, 
            photo:"assets/images/watchtower.jpg"
         }, 
         {
            question: "Which Robin is Batman's son?", 
            choice: ["Damian", "Dick Grayson", "Jason Todd", "Tim Drake"],
            answer: 0, 
            photo: "assets/images/damien.jpg"
         }, 
         {
            question: "Which character is supersmart and feared by criminals?", 
            choice: ["Batman", "Superman", "Cyborg", "Flash", "Aquaman"],
            answer: 0, 
            photo: "assets/images/bat.jpg"
         }, 
         {
            question: "Which member had a love affair with Wonder Woman?", 
            choice: ["Aquaman", "Cyborg", "Green Lantern", "Batman", "Superman"],
            answer: 4, 
            photo: "assets/images/superman_wonderwoman.jpg"
         }, 
         {
            question: "What Justice League member is Hal Jordan?", 
            choice: ["Green Lantern", "Batman", "Cyborg", "Flash", "Aquaman"],
            answer: 0, 
            photo: "assets/images/greenlanternlight.jpg"
         }, 
         {
            question: "Lex Luthor hates which Justice League member?", 
            choice: ["Superman", "Batman", "Cyborg", "Flash", "Aquaman"],
            answer: 0, 
            photo: "assets/images/lexluthor.jpg"
         }, 
         {
            question: "Which member uses the Lasso of Truth?", 
            choice: ["Green Lantern", "Batman", "Cyborg", "Wonder Woman", "Aquaman"],
            answer: 3, 
            photo: "assets/images/wonderwoman2.jpg"
         }, 
         {
            question: "Who is the fastest Justice League Member?", 
            choice: ["Wonder Woman", "Batman", "Superman", "Flash", "Aquaman"],
            answer: 3, 
            photo: "assets/images/flash.jpg"
         }, 
         {
            question: "Which Member real name is Victor Stone?", 
            choice: ["Green Lantern", "Batman", "Cyborg", "Flash", "Aquaman"],
            answer: 2, 
            photo: "assets/images/victorstonecomic.jpg"
         }, 
         {
            question: "Which member is a child of Zeus?", 
            choice: ["Cyborg", "Batman", "Wonder Woman", "Flash", "Aquaman"],
            answer: 2, 
            photo: "assets/images/zeus.jpg"
         }];

    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 3;
    var intervalId;
    var qIndex;
    var qPicked;
    var userPick ="";
    var running = false;
    var newArray = [];
    var holder = [];
    
    
    
   $("#restart").hide();

// FUNCTIONS====================================================================
    //THIS STARTS THE GAME ON USER CLICK
    $("#start").on("click", function () {
        $(this).hide(); //THIS HIDES THE START BUTTON AFTER CLICKED
        runTimer();  //RUNS TIMER AFTER CLICK
        displayQuestion(); //DISPLAYS QUESTIONS AFTER CLICK
        for(var i = 0; i < triviaOptions.length; i++) { //PICKS A RANDOM QUESTION TO BE DISPLAYED AFTER CLICK
        holder.push(triviaOptions[i]); //MOVES SELECTED RANDOM NUMBER INTO THE OBLECT HOLDER
    }
        })
    //START TIMER
    function runTimer(){
        if (!running) {
        intervalId = setInterval(decrement, 1000); 
        running = true;
        }
    }
    //TIMER COUNTDOWN
    function decrement() {
        $("#time-left").html("<h4>Time remaining: " + timer + "</h4>");
        timer --;
    
        //STOP TIMER WHEN REACH 0
        if (timer <= -1) {
            unanswerCount++;
            stop();
            $("#answer-section").html("<p>Time is up! The correct answer is: " + qPicked.choice[qPicked.answer] + "</p>");
            displayphoto();
        }	
    }
    
    //STOP TIMER
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    //PICK A RANDOM QUESTION THAT HAS NOT ALREADY BEEN DISPLAYED
    //DISPLAY QUESTION AND LOOP THROUGH THE CHOICE ARRAY
    function displayQuestion() {
         //GENERATES RANDOM QUESTION INDEX IN THE ARRAY
        qIndex = Math.floor(Math.random()*triviaOptions.length);
        qPicked = triviaOptions[qIndex]; //PICKED QUESTION FROM ARRAY
            
        
            //ITERATES THROUGH ANSWER ARRAY AND DISPLAY  
            $("#question-section").html("<h4>" + qPicked.question + "</h4>");
            for(var i = 0; i < qPicked.choice.length; i++) {
               
                var userChoice = $("<button>");
                userChoice.addClass("answer-choice btn btn-black text-white");
                userChoice.html(qPicked.choice[i]);
                //assign array position to it so can check answer
                userChoice.attr("data-guess-value", i);
                $("#answer-section").append(userChoice);
 
    }
  
    //CLICK TO SELECT ANSWER AND OUTCOMES
    $(".answer-choice").on("click", function () {
        //GRAB ARRAY POSISTION FROM USERPICK
        userPick = parseInt($(this).attr("data-guess-value"));
    
        //RIGHT OR WRONG GUESSES
        //DISPLAYS RIGHT ANSWERS
        if (userPick === qPicked.answer) {
            stop();
            correctCount++;
            userPick="";
            $("#answer-section").html("<p>Correct!</p>");
            displayphoto();
        //DISPLAYS CORRECT ANSWER
        } else {
            stop();
            wrongCount++;
            userPick="";
            $("#answer-section").html("<p>Wrong! The correct answer is: " + qPicked.choice[qPicked.answer] + "</p>");
            displayphoto();
        }
    })
    }
//FUNCTION==================================================================
//THIS HIDES PICTIURES AND SHOW SCORE RESULTS
    function displayphoto () {
        $("#answer-section").append("<img src=" + qPicked.photo + " class='images'>");
        newArray.push(qPicked);
        triviaOptions.splice(qIndex,1);

    // HIDES PHOTO
        var hidpic = setTimeout(function() {
            $("#answer-section").empty();
            timer= 3;
        //==============================
    
        var qCount = triviaOptions.length;
        console.log(qCount);
        //DISPLAYS RESULTS FROM GAME AND DISPLAY IN THE INDEX.HTML FILE
        if ((wrongCount + correctCount + unanswerCount) === 12) {
            $("#question-section").empty();
            $("#question-section").html("<h4>Game Over! Scores: </h4>");
            $("#answer-section").append("<h5> Correct: " + correctCount + "</h5>" );
            $("#answer-section").append("<h5> Incorrect: " + wrongCount + "</h5>" );
            $("#answer-section").append("<h5> Unanswered: " + unanswerCount + "</h5>" );
            $("#reset").show();
            correctCount = 0;
            wrongCount = 0;
            unanswerCount = 0;
            console.log(qCount);
    
        } else {
            runTimer();
            displayQuestion();
    
        }
        }, 1000);//THIS SETS THE TIME BETWEEN QUESTIONS DELAY

    
    }

    //RESTART THE GAME AND SET ALL CONTENTS BACK TO LOOP AGAIN
    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answer-section").empty();
        $("#question-section").empty();
        for(var i = 0; i < holder.length; i++) {
            triviaOptions.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    
    })
    
    