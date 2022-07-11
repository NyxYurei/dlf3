class Menu{
    constructor(){
        this.menu = createImg("./assets/Menu.png");
        this.gameTitle = createImg("./assets/name.png", "defend the light");
        this.playButton = createButton("Play");
        this.skinButton = createButton("skins");
        this.helpButton = createButton("help");
    }
    
    setElementsPosition() {
       this.menu.position(width / 2 - 800, height / 2 - 385);
       this.gameTitle.position(width / 10, -75);  
       this.playButton.position(width / 2 - 90, height / 2 - 15);
       this.helpButton.position(width / 2 - 200, height / 2 + 90);
       this.skinButton.position(width / 2 + 20, height / 2 + 90);
    }

    setElementsStyle(){
        this.menu.class("gameMenu");
        this.gameTitle.class("gameTitle");
        this.playButton.class("button-49");
        this.skinButton.class("button");
        this.helpButton.class("button");
   
    }

   handleMousePressed() {
    this.playButton.mousePressed(() => {
    this.menu.hide();
    this.playButton.hide();
    this.gameTitle.hide();
    this.helpButton.hide();
    this.skinButton.hide();
    gameState = 1;
     if(gameState == 1){
        game.play();

       
    }
    
    })
}

    display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
    }

}