const database = firebase.database().ref();
//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const message = messageElement.value;

    messageElement.value  = "";

    const userData = {
        Message: message
    };

    console.log(userData.Message);
    database.push(userData);
    //Update database here

}
// Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
if (matching === true) {
    
}
});

//Click on X to delete To-Do
// We add the event listener to the ul that's always been on the page
// But the function can run when a new or old span is clicked
 $("ul").on("click", "span", function(event) { 
  $(this).parent().fadeOut(500, function() {
      $(this).remove();
        
  })
  //Stops event bubbling, span event triggering parent events from li or container
  //THIS SHIT IS AMAZING!
  event.stopPropagation();
 });


$("input[type='text'").on("keypress", function(event){
    
    if (event.which === 13) {
        //Add the new to do to the ul
        database.push($('#message').val());
        let todoText = $(this).val();
        $(this).val("");
        
        //Appends a string of html to whatever we clicked on
        // $("ul").append(`<li><span><i class="far fa-trash-alt"></i></span>${todoText}</li>`);
        //Clear the input box of text
    }
});

$(".fa-plus").click(function() {
    $("input[type='text'").fadeToggle();
})


// The key of a root reference is null
database.on('child_added', displayMessageOnBoard);
database.on('child_removed', removeMessageFromBoard);
// var parent = database.parent();
// database.on('child_removed', removeMessageFromBoard);

var matching = false;
var struckThrough = false;

function displayMessageOnBoard(toDisplayFromFirebase) {
    const messageToDisplay = toDisplayFromFirebase.val();  //Val returns an object, reads the value of that row
    $("ul").append(`<li><span><i class="far fa-trash-alt"></i></span>${messageToDisplay}</li>`);

    $("li").mouseenter(function(){
        var text = $(this).text();
        if (text === messageToDisplay && $(this).on("ul").on("click", "span")) {
            matching = true;
//             let name = toDisplayFromFirebase.key;
            console.log(matching);
//             let fire = firebase.database().ref(name);
//             fire.remove();
        }
    });
    //if the key == the key of the one displaying the message
    
    // let name = toDisplayFromFirebase.key;
    // console.log(name);
    $("ul").on("click", "span", function(event) { 
    //         var text = $(this).text();
            if (matching === true) {
                 let name = toDisplayFromFirebase.key;
                 let fire = firebase.database().ref(name);
                 fire.remove();
            }
    $(this).parent().fadeOut(500, function() {
               

                        
            $(this).remove();
            
        })
        //Stops event bubbling, span event triggering parent events from li or container
        //THIS SHIT IS AMAZING!
        event.stopPropagation();
    });

$("ul").on("click", "li", function() {
        $(this).toggleClass("completed");
    struckThrough = true;
    if (matching === true) {
        
    }
    });
}

function removeMessageFromBoard(toRemoveFromFirebase) {
    const messageToRemove = toRemoveFromFirebase.key;
    console.log(name);
}

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

let quoteElement = document.getElementById("quote");
let arrayOfQuotes = ["You're doing a good job", "Don't worry about it. The world is going to explode anyways. -Daddy", 
"Bruh. -Denzell", "I want to sleep -Denzell", "I'm hungry!!! -Omar", "Alright let's do this -Omar",
"Oh my god it's soooo cute -Sacia to all dogs she meets", "Can I pet him? -Sacia to all dog owners",
"I need some hot chocolate right now -Denzell", "I have a lot of Homework to do -Denzell", "Cafe -Denzell",
"We need a whiteboard - Denzell", "Omar, go download some ram -Denzell", "Drinks milk even when she is lactose intolerant -SACIA",
"Just take it. -Denzell", "I think my purpose in life is to make Denzell uncomfortable -Sacia", 
"Goodnight mommy -Omar", "CSGO? -Omar, Denzell, George", "My brother is really cool -Sacia", "So cool. -Sacia",
"Harro Crazy Xiao He - Koko", "What? -George", "She's hot. - George"];
quoteElement.innerHTML = arrayOfQuotes.randomElement();
console.log(arrayOfQuotes.randomElement());

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  


var myIndex;
  carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    console.log(x);
     myIndex = randomIndex = Math.floor(Math.random() * x.length);
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000); // Change image every 2 seconds
}

// removeMessageFromBoard("ok");


// var urlRef = rootRef.child("/Message");
// urlRef.once("value", function(snapshot) {
//   snapshot.forEach(function(child) {
//     console.log(child.key+": "+child.val());
//   });
// });
