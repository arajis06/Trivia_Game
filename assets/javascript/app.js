
    var triviaQandA = [
        {
            question: "Who is the leader of the Justice League?", 
            choice: ["Flash", "Batman", "Green Lantern", "Superman", "Aquaman"],
            answer: "Superman",
            // photo: ""
         },
         {
            question: "Which member does not have super abilities", 
            choice: ["Cybrog", "Batman", "Wonder Woman", "Green Lantern"],
            answer: "Batman", 
            // photo: ""
         }, 
         {
            question: "Which member is from the city Metropolis", 
            choice: ["Cybrog", "Batman", "Green Lantarn", "Aquaman"],
            answer: "Superman", 
            // photo:""
         }, 
         {
            question: "Which Robin is Batman's son?", 
            choice: ["Damian", "Dick Grayson", "Jason Todd", "Tim Drake"],
            answer: "Damian", 
            // photo: ""
         }, 
         {
            question: "Which character is supersmart and feared by criminals?", 
            choice: ["Batman", "Superman", "Cybrog", "Flash", "Aquaman"],
            answer: "Batman", 
            // photo: ""
         }, 
        {
            question: "Who was the original Robin(Nightwing)?", 
            choice: ["Dick Grayson", "Damien", "Coast City", "Metropolis"],
            answer: "Dick Grayson", 
            // photo: ""
         }, 
         {
            question: "Which member had a love affair with Wonder Woman?", 
            choice: ["Aquaman", "Cyborg", "Green Lantern", "Batman"],
            answer: "Superman", 
            // photo: ""
         }, 
         {
            question: "What color sun give a Kryptonian their powers?", 
            choice: ["Yellow", "Red", "Blue", "Green", "Orange"],
            answer: "Yellow", 
            // photo: ""
         }, 
         {
            question: "What Justice League member is Hal Jordan?", 
            choice: ["Green Lantern", "Batman", "Cyborg", "Flash", "Aquaman"],
            answer: "Green Lantern", 
            // photo: ""
         }, 
         {
            question: "Lex Luthor hates which Justice League member?", 
            choice: ["Superman", "Batman", "Cyborg", "Flash", "Aquaman"],
            answer: "Superman", 
            // photo: ""
         }, 
         {
            question: "Which member uses the Lasso of Truth?", 
            choice: ["Green Lantern", "Batman", "Cyborg", "Wonder Woman", "Aquaman"],
            answer: "Wonder Woman", 
            // photo: ""
         }, 
         {
            question: "Who is the fastest Justice League Member", 
            choice: ["Wonder Woman", "Batman", "Superman", "Flash", "Aquaman"],
            answer: "Flash", 
            // photo: ""
         }, 
         {
            question: "Which Member real name is Victor Stone?", 
            choice: ["Green Lantern", "Batman", "Cyborg", "Flash", "Aquaman"],
            answer: "Cyborg", 
            // photo: ""
         }, 
         {
            question: "Which member is a child of Zeus?", 
            choice: ["Cyborg", "Batman", "Wonder Woman", "Flash", "Aquaman"],
            answer: "Wonder Woman", 
            // photo: ""
         }];

   var correctCount = 0;
   var wrongCount = 0;
   var unanswerCount = 0;
   var questionCounter = 0;
   var timer = 20;
   var intervalId;
   var userGuess ="";


   // FUNCTIONS=================================================================
   // ***START GAME***
   function startGame() {

   }

   function runTimer() {
      intervalId = setInterval(decrement, 1000);
   }

   function decrementTimer() {
      if (timer >= 0) {
      $("#time-left").text("Time Remaining: " + timer);
      timer--;
      }
   }

   function displayQuestion() {
      timer = 20;
     $("#question-block").text(triviaQandA[questionCounter].question);
   }

   function displayAnswers() {

   }




   // click start to play game
   $("#start").on("click", function() {
      $(this).hide();
      nextQuestion(); 

      runTimer();
      
   })


         
         
    