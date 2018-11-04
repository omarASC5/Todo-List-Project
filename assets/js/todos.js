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
});

//Click on X to delete To-Do
//We add the event listener to the ul that's always been on the page
//But the function can run when a new or old span is clicked
// $("ul").on("click", "span", function(event) { 
// 	$(this).parent().fadeOut(500, function() {
// 		$(this).remove();
		
// 	})
// 	//Stops event bubbling, span event triggering parent events from li or container
// 	//THIS SHIT IS AMAZING!
// 	event.stopPropagation();
// });


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



function displayMessageOnBoard(toDisplayFromFirebase) {
	const messageToDisplay = toDisplayFromFirebase.val();  //Val returns an object, reads the value of that row
	$("ul").append(`<li><span><i class="far fa-trash-alt"></i></span>${messageToDisplay}</li>`);

	$("li").mouseenter(function(){
		var text = $(this).text();
		if (text === messageToDisplay) {
			let name = toDisplayFromFirebase.key;
			let fire = firebase.database().ref(name);
			fire.remove();

			$("ul").on("click", "span", function(event) { 
				$(this).parent().fadeOut(500, function() {
					// let fire = firebase.database().ref(name);
					// fire.remove();
					$(this).remove();
					
				})
				//Stops event bubbling, span event triggering parent events from li or container
				//THIS SHIT IS AMAZING!
				event.stopPropagation();
			});
		}
	});
	//if the key == the key of the one displaying the message
	
	// let name = toDisplayFromFirebase.key;
	// console.log(name);
	// $("ul").on("click", "span", function(event) { 
	// 	$(this).parent().fadeOut(500, function() {
	// 		// let fire = firebase.database().ref(name);
	// 		// fire.remove();
	// 		$(this).remove();
			
	// 	})
	// 	//Stops event bubbling, span event triggering parent events from li or container
	// 	//THIS SHIT IS AMAZING!
	// 	event.stopPropagation();
	// });
}

function removeMessageFromBoard(toRemoveFromFirebase) {
	const messageToRemove = toRemoveFromFirebase.key;
	console.log(name);
}

// removeMessageFromBoard("ok");


// var urlRef = rootRef.child("/Message");
// urlRef.once("value", function(snapshot) {
//   snapshot.forEach(function(child) {
//     console.log(child.key+": "+child.val());
//   });
// });