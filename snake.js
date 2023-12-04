//Creating the game board
var blockSize =25;
var rows = 20;
var cols = 20;
var board;
var context;

//makeing the snake 


window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");//used to draw the board
    
    placeFood();
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update, 1000/10);
}
var snakeX = blockSize*5;
var snakeY = blockSize*5;

var foodX;
var foodY;

var velocityX = 0;
var velocityY = 0;

var snakeBody= [];

function update(){
    context.fillStyle="black";
    context.fillRect(0 ,0, board.width, board.height);
    //the food code
    context.fillStyle="white";
    context.fillRect(foodX,foodY,blockSize,blockSize);
    
    //this will change the place of the food
    if(snakeX==foodX && snakeY==foodY){
        snakeBody.push([foodX, foodY])
        placeFood();
    }

    for(let i = snakeBody.length-1;i>0;i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0]= [snakeX,snakeY]
    }

    //the snake code
    context.fillStyle="red";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
   //this is to addthe length to the body 
    for(let i =0; i < snakeBody.length;i++){
        context.fillRect(snakeBody[i][0],snakeBody[0][i], blockSize,blockSize);
    }
}
//this is the snakees direction code
function changeDirection(e) {
   if(e.code== "ArrowUp" && velocityY !=1){
    velocityX=0;
    velocityY=-1;
   }
   else if(e.code == "ArrowDown" && velocityY !=-1){
    velocityX=0;
    velocityY=1;
   }
   else if(e.code == "ArrowLeft" && velocityX!=1){
    velocityX=-1;
    velocityY=0;
   }
   else if(e.code=="ArrowRight"&& velocityX!=-1){
    velocityX=1;
    velocityY=0;
   }
}


//creaing a function that will make the food move to random places

function placeFood(){
    foodX = Math.floor(Math.random()*cols)*blockSize;
    foodY = Math.floor(Math.random()*rows)*blockSize;
}