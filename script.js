
score = 0;
cross = true;

audio = new Audio("music.mp3");
audiogo = new Audio("gameover.mp3");
setTimeout(() => {
    audio.play();
}, 1000);


//Key press function
document.onkeydown = function(e){
    if(e.keyCode==32 )
    {
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(()=>{
            dino.classList.remove("animateDino");
        },700);
    }
    if(e.keyCode==39 )
    {
        dino = document.querySelector(".dino");
        dinoX = parseInt(getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = dinoX + 112 +"px";
    }
    if(e.keyCode==37 )
    {
        dino = document.querySelector(".dino");
        dinoX = parseInt(getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = (dinoX - 112)+"px";
    }
}

//collison code

setInterval(()=>{
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx=window.parseInt(getComputedStyle(dino,null).getPropertyValue("left"));
    dy=window.parseInt(getComputedStyle(dino,null).getPropertyValue("top"));

    ox=window.parseInt(getComputedStyle(obstacle,null).getPropertyValue("left"));
    oy=window.parseInt(getComputedStyle(obstacle,null).getPropertyValue("top"));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX , offsetY);
    if(offsetX<113 && offsetY<52){
        gameOver.innerHTML = "Game Over - reload"
        obstacle.classList.remove("obstacleAni");
        // dino = document.querySelector("dino");
        // dino.classList.add("dinoOver");
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
        
    }
    else if(offsetX<145 && cross){
        score += 1;
        updateScore(score); 
        cross = false;
        setTimeout(() => {
            cross =true;
        }, 700);
        setTimeout(() => {
            aniDur = parseFloat(getComputedStyle(obstacle,null).getPropertyValue("animation-duration"));
            newDur = aniDur - 0.04;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
        
    }
    
},100);

function updateScore(score){
    scoreCount.innerHTML = "Your score: "+score;
}
