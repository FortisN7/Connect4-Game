//Images used in design: https://www.seekpng.com/ima/u2e6e6e6q8q8u2q8/ and https://connect.learnpad.com/content/activity.cfm?id=68983
//true means the image is hidden
var redPieceHiddens = [];
var yellowPieceHiddens = [];
var eitherPieceShown= [];
var turn = 1; //red is odd, yellow is even
for(var i=0;i<42;i++)
{
  appendItem(redPieceHiddens, true);
  appendItem(yellowPieceHiddens, true);
  appendItem(eitherPieceShown, true);
}

//Buttons
onEvent("columnButton1","click",function()
{
  setProperty("winner","hidden", true);
  if(turn%2==0)
  {
    checkPlace(1,"yellow");
    checkWin(yellowPieceHiddens);
  }
  else
  {
    checkPlace(1,"red");
    checkWin(redPieceHiddens);
  }
});
onEvent("columnButton2","click",function()
{
  setProperty("winner","hidden", true);
  if(turn%2==0)
  {
    checkPlace(2,"yellow");
    checkWin(yellowPieceHiddens);
  }
  else
  {
    checkPlace(2,"red");
    checkWin(redPieceHiddens);
  }
});
onEvent("columnButton3","click",function()
{
  setProperty("winner","hidden", true);
  if(turn%2==0)
  {
    checkPlace(3,"yellow");
    checkWin(yellowPieceHiddens);
  }
  else
  {
    checkPlace(3,"red");
    checkWin(redPieceHiddens);
  }
});
onEvent("columnButton4","click",function()
{
  setProperty("winner","hidden", true);
  if(turn%2==0)
  {
    checkPlace(4,"yellow");
    checkWin(yellowPieceHiddens);
  }
  else
  {
    checkPlace(4,"red");
    checkWin(redPieceHiddens);
  }
});
onEvent("columnButton5","click",function()
{
  setProperty("winner","hidden", true);
  if(turn%2==0)
  {
    checkPlace(5,"yellow");
    checkWin(yellowPieceHiddens);
  }
  else
  {
    checkPlace(5,"red");
    checkWin(redPieceHiddens);
  }
});
onEvent("columnButton6","click",function()
{
  setProperty("winner","hidden", true);
  if(turn%2==0)
  {
    checkPlace(6,"yellow");
    checkWin(yellowPieceHiddens);
  }
  else
  {
    checkPlace(6,"red");
    checkWin(redPieceHiddens);
  }
});
onEvent("columnButton7","click",function()
{
  setProperty("winner","hidden", true);
  if(turn%2==0)
  {
    checkPlace(7,"yellow");
    checkWin(yellowPieceHiddens);
  }
  else
  {
    checkPlace(7,"red");
    checkWin(redPieceHiddens);
  }
});
onEvent("playAgain", "click", function()
{
  turn=1;
  setProperty("whosTurn", "text", "It is red's turn!");
  for(var i=0;i<42;i++)
  {
    redPieceHiddens[i] = true;
    yellowPieceHiddens[i] = true;
    eitherPieceShown[i] = true;
    setProperty("redPiece"+(i+1),"hidden", true);
    setProperty("yellowPiece"+(i+1),"hidden", true);
  }
  for(var i=1; i<8; i++)
  {
    setProperty("columnButton"+i, "image", "assets/red-piece.png");
    setProperty("columnButton"+i, "hidden", false);
  }
  setProperty("playAgain", "hidden", true);
  setProperty("winner", "hidden", true);
});
onEvent ("redoButton", "click", function()
{
  turn=1;
  setProperty("whosTurn", "text", "It is red's turn!");
  for(var i=0;i<42;i++)
  {
    redPieceHiddens[i] = true;
    yellowPieceHiddens[i] = true;
    eitherPieceShown[i] = true;
    setProperty("redPiece"+(i+1),"hidden", true);
    setProperty("yellowPiece"+(i+1),"hidden", true);
  }
  for(var i=1; i<8; i++)
  {
    setProperty("columnButton"+i, "image", "assets/red-piece.png");
    setProperty("columnButton"+i, "hidden", false);
  }
  setProperty("playAgain", "hidden", true);
  setProperty("winner", "hidden", true);
});



//Functions
function checkPlace(num, color)
{
    for(var i=0; i<42; i=i+7)
    {
      var number=num+(i);
      if(eitherPieceShown[number-1]==true)
      {
        if(color=="red")
        {
          setProperty("redPiece"+number,"hidden",false);
          redPieceHiddens[number-1]=false;
        }
        if(color=="yellow")
        {
          setProperty("yellowPiece"+number,"hidden",false);
          yellowPieceHiddens[number-1]=false;
        }
        eitherPieceShown[number-1]=false;
        turn++;
        switchPlayers();
        return;
      }
    }
    setProperty("winner","text","Sorry! You can't play your piece there. Try another column!");
    setProperty("winner","hidden", false);
}

function checkWin(list)
{
  //check / diagonal +8
  //15 1
  if((list[15-1]==false)&&(list[15+8-1]==false)&&(list[15+2*8-1]==false)&&(list[15+3*8-1]==false))
    endGame();
  //8 2
  if((list[8-1]==false)&&(list[8+8-1]==false)&&(list[8+2*8-1]==false)&&(list[8+3*8-1]==false))
    endGame();
  if((list[8+8-1]==false)&&(list[8+2*8-1]==false)&&(list[8+3*8-1]==false)&&(list[8+4*8-1]))
    endGame();
  //1 3
  if((list[1-1]==false)&&(list[1+8-1]==false)&&(list[1+2*8-1]==false)&&(list[1+3*8-1]==false))
    endGame();
  if((list[1+8-1]==false)&&(list[1+2*8-1]==false)&&(list[1+3*8-1]==false)&&(list[1+4*8-1]==false))
    endGame();
  if((list[1+2*8-1]==false)&&(list[1+3*8-1]==false)&&(list[1+4*8-1]==false)&&(list[1+5*8-1]==false))
    endGame();
  //2 3
  if((list[2-1]==false)&&(list[2+8-1]==false)&&(list[2+2*8-1]==false)&&(list[2+3*8-1]==false))
    endGame();
  if((list[2+8-1]==false)&&(list[2+2*8-1]==false)&&(list[2+3*8-1]==false)&&(list[2+4*8-1]==false))
    endGame();
  if((list[2+2*8-1]==false)&&(list[2+3*8-1]==false)&&(list[2+4*8-1]==false)&&(list[2+5*8-1]==false))
    endGame();
  //3 2
  if((list[3-1]==false)&&(list[3+8-1]==false)&&(list[3+2*8-1]==false)&&(list[3+3*8-1]==false))
    endGame();
  if((list[3+8-1]==false)&&(list[3+2*8-1]==false)&&(list[3+3*8-1]==false)&&(list[3+4*8-1]==false))
    endGame();
  //4 1
  if((list[4-1]==false)&&(list[4+8-1]==false)&&(list[4+2*8-1]==false)&&(list[4+3*8-1]==false))
    endGame();
  
  //check \ diagonal +6
  //21 1
  if((list[21-1]==false)&&(list[21+6-1]==false)&&(list[21+2*6-1]==false)&&(list[21+3*6-1]==false))
    endGame();
  //14 2
  if((list[14-1]==false)&&(list[14+6-1]==false)&&(list[14+2*6-1]==false)&&(list[14+3*6-1]==false))
    endGame();
  if((list[14+6-1]==false)&&(list[14+2*6-1]==false)&&(list[14+3*6-1]==false)&&(list[14+4*6-1]==false))
    endGame();
  //7 3
  if((list[7-1]==false)&&(list[7+6-1]==false)&&(list[7+2*6-1]==false)&&(list[7+3*6-1]==false))
    endGame();
  if((list[7+6-1]==false)&&(list[7+2*6-1]==false)&&(list[7+3*6-1]==false)&&(list[7+4*6-1]==false))
    endGame();
  if((list[7+2*6-1]==false)&&(list[7+3*6-1]==false)&&(list[7+4*6-1]==false)&&(list[7+5*6-1]==false))
    endGame();
  //6 3
  if((list[6-1]==false)&&(list[6+6-1]==false)&&(list[6+2*6-1]==false)&&(list[6+3*6-1]==false))
    endGame();
  if((list[6+6-1]==false)&&(list[6+2*6-1]==false)&&(list[6+3*6-1]==false)&&(list[6+4*6-1]==false))
    endGame();
  if((list[6+2*6-1]==false)&&(list[6+3*6-1]==false)&&(list[6+4*6-1]==false)&&(list[6+5*6-1]==false))
    endGame();
  //5 2
  if((list[5-1]==false)&&(list[5+6-1]==false)&&(list[5+2*6-1]==false)&&(list[5+3*6-1]==false))
    endGame();
  if((list[5+6-1]==false)&&(list[5+2*6-1]==false)&&(list[5+3*6-1]==false)&&(list[5+4*6-1]==false))
    endGame();
  //4 1
  if((list[4-1]==false)&&(list[4+6-1]==false)&&(list[4+2*6-1]==false)&&(list[4+3*6-1]==false))
    endGame();
  
  //check - +1
  for(var i = 1; i<37; i=i+7)
  {
    if((list[i-1]==false)&&(list[i+1-1]==false)&&(list[i+2*1-1]==false)&&(list[i+3*1-1]==false))
      endGame();
    if((list[i+1-1]==false)&&(list[i+2*1-1]==false)&&(list[i+3*1-1]==false)&&(list[i+4*1-1]==false))
      endGame();
    if((list[i+2*1-1]==false)&&(list[i+3*1-1]==false)&&(list[i+4*1-1]==false)&&(list[i+5*1-1]==false))
      endGame();
    if((list[i+3*1-1]==false)&&(list[i+4*1-1]==false)&&(list[i+5*1-1]==false)&&(list[i+6*1-1]==false))
      endGame();
  }
  
  //check | +7
  for(var i=1; i<8; i++)
  {
    if((list[i-1]==false)&&(list[i+7-1]==false)&&(list[i+2*7-1]==false)&&(list[i+3*7-1]==false))
      endGame();
    if((list[i+7-1]==false)&&(list[i+2*7-1]==false)&&(list[i+3*7-1]==false)&&(list[i+4*7-1]==false))
      endGame();
    if((list[i+2*7-1]==false)&&(list[i+3*7-1]==false)&&(list[i+4*7-1]==false)&&(list[i+5*7-1]==false))
      endGame();
  }
  
  //check tie
  var j = 0;
  for(var i=0;i<42;i++)
  {
    if(eitherPieceShown[i]==false)
    {
      j++;
    }
  }
  if(j==42)
  {
    setProperty("winner","text","The game has ended in a draw!");
    setProperty("winner", "hidden", false);
    setProperty("playAgain", "hidden", false);
    hideButtons();
  }
}

function switchPlayers()
{
  if(getProperty("columnButton1", "image")=="assets/red-piece.png")
  {
    for(var i=1; i<8; i++)
    {
      setProperty("columnButton" + i, "image", "assets/yellow-piece.png");
    }
    setText("whosTurn", "It is yellow's turn!");
  }
  else
  {
    for(var i=1; i<8; i++)
    {
      setProperty("columnButton" + i, "image", "assets/red-piece.png");
    }
    setText("whosTurn", "It is red's turn!");
  }
}

function checkWinner()
{
  turn--;
  if(turn%2==0)
  {
    setText("winner", "Yellow has won! Press the button to play again!");
    setProperty("winner", "hidden", false);
  }
  else
  {
    ("winner", "Red has won! Press the button to play again!");
    setProperty("winner", "hidden", false);
  }
}

function hideButtons()
{
  for(var i=1; i<8; i++)
  {
    setProperty("columnButton"+i, "hidden", true);
  }
  setText("whosTurn","Game over!");
}

function endGame()
{
  checkWinner();
  hideButtons();
  setProperty("playAgain", "hidden", false);
}
