console.log("yo")
var numberOfSquares = 6
var colors = []
var pickedColor;

var h1 = document.querySelector("h1")
var modeButtons = document.querySelectorAll(".mode")
//target the square El
var squares = document.querySelectorAll(".square")
//picking a random color from the color array
var messageDisplay = document.getElementById("messageDisplay")
var resetButton = document.querySelector("#reset")
//hardcoded colorDisplay

//update color display to say rgb
colorDisplay.textContent = pickedColor

init();

function init (){
    //modebutton eventlistener
    setupModeButtons();
    setUpSquares();
    //looping through the square EL and with each square is looping in the color array and adding color
    
        reset()
}

function setupModeButtons(){
    for(var i =0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            //ternary operator
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6
            
            // if(this.textContent === "Easy"){
            //     numberOfSquares = 3
            // } else {
            //     numberOfSquares = 6
            // }
            reset();
        })
    }
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        //add eventListener
        squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.background;
        console.log(clickedColor, "yep")
        //compare color to pickedColor var
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor)
            h1.style.background = clickedColor
        } else {
         this.style.background = "#232323"
         messageDisplay.textContent = "Guess Again"
     }
    })
}
}


function reset (){
   //generate new colors
   colors = generateRandomColors(numberOfSquares);
   //pick a new random color from array
   pickedColor = pickColor();
   //change colordisplay to match picked color
   colorDisplay.textContent = pickedColor
   resetButton.textContent = "New Colors"
   messageDisplay.textContent = "";
   //change colors of squares
   for(var i = 0; i < squares.length; i++){
       if(colors[i]){
        squares[i].style.display = "block"
        squares[i].style.background = colors[i]
       } else {
        squares[i].style.display = "none"
       }
   }
   h1.style.background = "steelblue"  
}


// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected")
//     easyBtn.classList.add("selected")
//     numberOfSquares = 3
//     //generate new colors
//     colors = generateRandomColors(numberOfSquares)
//     //new picked color
//     pickedColor = pickColor();
//     //change the display to show new picked color
//     colorDisplay.textContent = pickedColor
//     //hide three bottom div when click on easy mode
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected")
//     easyBtn.classList.remove("selected")
//     numberOfSquares = 6
//     colors = generateRandomColors(numberOfSquares)
//     pickedColor = pickColor()
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function(){
    reset();
})



function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.background = color;

    }
}

function pickColor(){
    //pick a random number
    var random = Math.floor(Math.random() * colors.length)
    //use the number to access the color
    return colors[random]
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors to array
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        randomColor()
        arr.push(randomColor())
    }
    //return that array 
    return arr;

}

function randomColor(){
    //pick a red from 0 -255
    var r = Math.floor(Math.random() * 256)
    //green 0 -255
    var g = Math.floor(Math.random() * 256)
    //blue from 0 -255
    var b = Math.floor(Math.random() * 256)
    //format "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}