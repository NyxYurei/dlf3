class BackGround{
    constructor(){
     this.back = createSprite (windowWidth/2, windowHeight/2, 50, 50);
     this.back.addImage ("backIdle", backImg);
     this.ground = createSprite(801, 706, 50, 50);
     this.ground.addImage ("ground", groundImg);
     this.plataform1 = createSprite (310, 215, 50, 50);
     this.plataform1.addImage ("p1", p1Img);
     this.plataform1.scale = 0.23;
     this.plataform2 = createSprite (1230, 215, 50, 50);
     this.plataform2.addImage ("p2", p2Img);
     this.plataform2.scale = 0.23;
     this.plataform3 = createSprite (1030, 369, 50, 50);
     this.plataform3.addImage ("p3", p3Img);
     this.plataform3.scale = 0.15;
     this.plataform4 = createSprite (539, 369, 50, 50);
     this.plataform4.addImage ("p4", p4Img);
     this.plataform4.scale = 0.15;
     this.MenuButton = createButton ("Menu");
    }
 
    setElementsPosition(){
        this.MenuButton.position(width/2 +630, height/2 + 300);
    }

    setElementsStyle() {
        this.MenuButton.class ("button1");
    }

     display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.mousepressedMenu();
     }

     mousepressedMenu(){
   
      this.MenuButton.mousePressed(() => {
        gameState = 0;
        this.MenuButton.hide();
        menu = new Menu();
        menu.display();
      })



     }
}