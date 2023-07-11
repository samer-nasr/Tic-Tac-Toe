
let playerTurn = true;
let board = ["","","","","","","","",""];  
let buttons = [".b1",".b2",".b3",".b4",".b5",".b6",".b7",".b8",".b9"];
let score = [0,0];
let gameHasEnd = false;

fillBoard();
    $(buttons[0]).click(function(){ 
        if(playerTurn && board[0] == ""){ 
            board[0] = "X";
            fillBoard();
            checkWin();
            playerTurn = false;
            computerTurn();  
        }
    });

    $(buttons[1]).click(function(){ 
        if(playerTurn && board[1] == ""){ 
            board[1] = "X";
            fillBoard();
            checkWin();
            playerTurn = false; 
            computerTurn();
        }
    });

    $(buttons[2]).click(function(){ 
        if(playerTurn && board[2] == ""){ 
            board[2] = "X";
            fillBoard();
            checkWin();
            playerTurn = false; 
            computerTurn();
        }
    });

    $(buttons[3]).click(function(){ 
        if(playerTurn && board[3] == ""){ 
            board[3] = "X";
            fillBoard();
            checkWin();
            playerTurn = false;
             computerTurn();
        }
    });

    $(buttons[4]).click(function(){ 
        if(playerTurn && board[4] == ""){ 
            board[4] = "X";
            fillBoard();
            checkWin();
            playerTurn = false; 
            computerTurn();
        }
    });

    $(buttons[5]).click(function(){ 
        if(playerTurn && board[5] == ""){ 
            board[5] = "X";
            fillBoard();
            checkWin();
            playerTurn = false; 
            computerTurn();
        }
    });

    $(buttons[6]).click(function(){ 
        if(playerTurn && board[6] == ""){ 
            board[6] = "X";
            fillBoard();
            checkWin();
            playerTurn = false;
            computerTurn();
        }
    });

    $(buttons[7]).click(function(){ 
        if(playerTurn && board[7] == ""){ 
            board[7] = "X";
            fillBoard();
            checkWin();
            playerTurn = false; 
            computerTurn();
        }
    });

    $(buttons[8]).click(function(){ 
        if(playerTurn && board[8] == ""){ 
            board[8] = "X";
            fillBoard();
            checkWin();
            playerTurn = false; 
            computerTurn();
        } 
    });

function computerTurn(){ 
    var x = (Math.random()*10);
    x = x.toFixed();
    if(x > 1){ 
        x-=2;
    }
    
    if(board[x] == ""){ 
        board[x] = "O";
    }else{ 
        computerTurn();
    }
    playerTurn = true;
    fillBoard();
    checkWin();
}

function checkWin(){
    fillBoard();
    if( board[0] == board[1] && board[1] == board[2] ){ 
        if(board[0] == "X"){ 
            $(".result").text("Player Win");
            score[0]+=1;
            gameHasEnd = true;
        }else if(board[0] == "O"){ 
            $(".result").text("Computer Win");
            score[1]+=1;
            gameHasEnd = true;
        }

    }else if( board[3] == board[4] && board[4] == board[5] ){ 
        if(board[3] == "X"){ 
            $(".result").text("Player Win");
            score[0]+=1;
            gameHasEnd = true;
        }else if(board[3] == "O"){ 
            $(".result").text("Computer Win");
            score[1]+=1;
            gameHasEnd = true;
        }

    }else if( board[6] == board[7] && board[7] == board[8] ){ 
        if(board[6] == "X"){ 
            $(".result").text("Player Win");
            score[0]+=1;
            gameHasEnd = true;
        }else if(board[6] == "O"){ 
            $(".result").text("Computer Win");
            score[1]+=1;
            gameHasEnd = true;
        }

    } else if( board[0] == board[3] && board[3] == board[6] ){ 
        if(board[0] == "X"){ 
            $(".result").text("Player Win");
            score[0]+=1;
            gameHasEnd = true;
        }else if(board[0] == "O"){ 
            $(".result").text("Computer Win");
            score[1]+=1;
            gameHasEnd = true;
        }

    } else if( board[1] == board[4] && board[4] == board[7] ){ 
        if(board[1] == "X"){ 
            $(".result").text("Player Win");
            score[0]+=1;
            gameHasEnd = true;
        }else if(board[1] == "O"){ 
            $(".result").text("Computer Win");
            score[1]+=1;
            gameHasEnd = true;
        }

    } else if( board[2] == board[5] && board[5] == board[8] ){ 
        if(board[2] == "X"){ 
            $(".result").text("Player Win");
            score[0]+=1;
            gameHasEnd = true;
        }else if(board[2] == "O"){ 
            $(".result").text("Computer Win");
            score[1]+=1;
            gameHasEnd = true;
        }

    } else if( board[0] == board[4] && board[4] == board[8] ){ 
        if(board[0] == "X"){ 
            $(".result").text("Player Win");
            score[0]+=1;
            gameHasEnd = true;
        }else if(board[0] == "O"){ 
            $(".result").text("Computer Win");
            score[1]+=1;
            gameHasEnd = true;
        }

    } else if( board[2] == board[4] && board[4] == board[6] ){ 
        if(board[2] == "X"){ 
            $(".result").text("Player Win");
            score[0]+=1;
            gameHasEnd = true;
        }else if(board[2] == "O"){ 
            $(".result").text("Computer Win");
            score[1]+=1;
            gameHasEnd = true;
        }

    } else if(board[0] !="" && board[1] !=" " && board[2] !=""
        &&    board[3] !="" && board[4] !=" " && board[5] !=""
        &&    board[6] !="" && board[7] !=" " && board[8] !=""){ 
        $(".result").text("Game Tie");
        gameHasEnd = true;
        
    }

    if(gameHasEnd){ 
        reset();
    }
}

function fillBoard(){ 
    $(".score").text("Player "+score[0] +" - "+score[1]+" Computer");
    for(var i = 0 ; i < 9 ; i++){
        $(buttons[i]).text(board[i]);
        if(board[i] == "X"){ 
            $(buttons[i]).css("background-color" ,"red");
        }else if(board[i] == "O"){ 
            $(buttons[i]).css("background-color" ,"blue");
        }
    }
}

function reset(){ 
    gameHasEnd = false;
    board = ["","","","","","","","",""];
    for(var i = 0 ; i < 9 ; i++){ 
        $(buttons[i]).css("background-color" , "white");
    }
    fillBoard();
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }