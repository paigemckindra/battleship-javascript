
//Asks the user what difficulty that they want a sets the grid according to those numbers
//The higher the number the bigger the grid and harder the game
function start(){
    var difficulty = readInt("How difficult would you like your program. 2 being the easiest. 5 being the hardest.");
    var newGrid = new Grid(difficulty+1,difficulty+1);
    newGrid.init(0);
    println("Welcome to Battleship! Try and guess where the computers battleship is in " + (difficulty*2-1)+ " guesses");
    playGame(newGrid,difficulty);
   
}
// This function plays the battleship game 
// Computer picks a random position and compares the computers position and the position the user picked 
function playGame(newGrid,difficulty){
    var randomCol = Randomizer.nextInt(0,difficulty-1);
    var randomRow = Randomizer.nextInt(0, difficulty-1);
    var rows = newGrid.numRows();       
    var cols = newGrid.numCols();
    var i =1;
    var win = false;
    while(i <= difficulty*2-1){
    var inputRow = readInt("Guess the row number:");
    var inputCol= readInt("Guess the column number:");
   if(inputRow== randomRow && inputCol == randomCol ){
        println("Congrats! You sunk my battleship!"); 
        win = true;
           
        break;
    } else if  (inputRow < 0 || inputRow > rows-1 ||inputCol > cols-1 || inputCol < 0) {
        println("Your guess is off the grid");
    } else if (newGrid.get(inputRow,inputCol)== "X"){
        println("You've already guessed that");
    } else {
        println("You missed my battleship");
        println("You've taken " + i + " turns");
        newGrid.set(inputRow,inputCol,"X");
       
    }
    distancePoint(inputRow,randomRow,inputCol,randomCol);
    
    boardPrint(newGrid);
    i++;
    
}
photoMedal(win);
}
function distancePoint(inputRow,randomRow,inputCol,randomCol){
    var abs = Math.abs(inputRow -randomRow);
    var abs2 = Math.abs(inputCol- randomCol);
    var distance = (abs + abs2);
    println("You are " + distance + " spots away");
    if(distance >=4){
        println("You're Cold");
    } else if (distance == 3){
        println("You're warm");
    } else {
        println("You're Hot");
 
}
}
function photoMedal(win){
if(win == true){
    println("You won!");
    var photo = new WebImage("https://images.vexels.com/media/users/3/127644/isolated/preview/586432b0ddcece9d215598a81cf32ccd-first-place-gold-medal-by-vexels.png");
    photo.setSize(300,150);
    photo.setPosition(100,100);
    add(photo);
} else {
    println("You lost");
}
}
// This function prints and updates the board 
function boardPrint(newGrid){
    var row2 = newGrid.numRows();
    var col2 = newGrid.numRows();
   for(var row = 0; row <= row2-1; row++){
       for(var col =0; col <= col2-1; col++){
           var elem = newGrid.get(row,col);
           print(elem + "");
       }
     println("");
   } 
}