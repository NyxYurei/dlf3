class Player{
    constructor(){
      this.player = createSprite (820, 573, 50, 50);
      this.player.addAnimation ("plyIdle",  playeridleImg);
      this.player.addAnimation ("plyIdleL", playeridleLImg);
      this.player.addAnimation ("plyR", playerImgR);
      this.player.addAnimation ("plyL", playerImgL);
      this.player.scale = 3.1;
      this.player.setCollider("rectangle", 0, -3, 30, 42);
      this.gamewall = createSprite (800, 640, 1203, 20);
      this.gamewall.visible = false;
      this.gamewall1 = createSprite (197, 315, 5, 670);
      this.gamewall1.visible = false;
      this.gamewall2 = createSprite (1403, 315, 5, 670);
      this.gamewall2.visible = false;
      this.gameplataform = createSprite (341, 269, 222, 33);
      this.gameplataform.visible = false;
      this.gameplataform1 = createSprite (1261, 269, 222, 33);
      this.gameplataform1.visible = false;
      this.gameplataform2 = createSprite (559, 403, 143, 23);
      this.gameplataform2.visible = false;
      this.gameplataform3 = createSprite (1050, 403, 143, 23);
      this.gameplataform3.visible = false;
      
     
    //  this.player.debug = true;
 
      
    }

    handleControls(){
      if(keyDown("LEFT_ARROW")){
        this.player.x = this.player.x -5; 
        this.player.changeAnimation("plyR");
      }else {
        this.player.changeAnimation("plyIdleL");
      }
      

      if(keyDown("RIGHT_ARROW")  ){
        this.player.x = this.player.x +5; 
        this.player.changeAnimation("plyL");
      }

      if(keyDown("UP_ARROW")&& this.player.y > 200){
        this.player.y = this.player.y -80; 
  
      }
    }
   
    playerCollide(){
      this.player.velocityY = this.player.velocityY + 1;
      this.player.collide(this.gamewall); 
      this.player.collide(this.gamewall1); 
      this.player.collide(this.gamewall2);
      this.player.collide(this.gameplataform);
      this.player.collide(this.gameplataform1);
      this.player.collide(this.gameplataform2);
      this.player.collide(this.gameplataform3);


    }
}