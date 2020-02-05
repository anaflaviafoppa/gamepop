class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');

    this.keyboardController = new KeyboardController(this);
    this.keyboardController.setKeyBindings();

    this.animation = new Animation(this);

    this.scoreController = 0;
    this.scoreControllerCharacter = 0;
    this.scoreCharacter = 100;

    this.scoreDiva = 100;
    
    this.total={
      spell01: [10,true],
      spell02: [5,false],
      spell03: [5,false],
      spell04: [5,true],
      spell05: [5,false],
      spell06: [5,false]
    }

    this.setControlBindings();

    this.characterMoviment = 'characterIdle'

  }

  cleanCanvas() {
    const context = this.context;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  }

  setControlBindings () {
    const $buttonStart = document.getElementById('btn-start');
    const $buttonReset = document.getElementById('btn-reset');
    const $buttonPause = document.getElementById('btn-pause');
    
    $buttonStart.addEventListener('click', () => {
      this.start();
    });

    $buttonReset.addEventListener('click', () => {
      this.reset();
    });

    $buttonPause.addEventListener('click', () => {
      this.togglePause();
    });

  }

  checkCollision(){
    /*Position Character*/
    const characterX = (this.character.positionX + this.character.startX)*GRID_SIZE;
    const characterY = (this.character.positionY + this.character.startY)*GRID_SIZE;

    /*Position Diva*/
    const divaX = (this.diva.positionX + this.diva.startX)*GRID_SIZE;
    const divaY = (this.diva.positionY + this.diva.startY)*GRID_SIZE;

    
  
      
    /*SPELL 01**************************************/
    if(this.magic){
      if(this.total.spell01[1] === true){
        /* Magic Position */
        const magicX = (this.magic.positionX + this.magic.startX)*GRID_SIZE;
        const magicY = (this.magic.positionY + this.magic.startY)*GRID_SIZE;
    

        /*CHECKCOLLISION*/
        if(
          /*UP*/
          Math.round(characterY) <= Math.round(magicY) + 25 &&
          Math.round(characterX) + 50 >= Math.round(magicX) &&

          /*BOTTOM*/
          Math.round(characterY) + 50 > Math.round(magicY) 
          ){
        
          if(this.scoreController === 1){
            if(this.magic || this.magic02 || this.magic03){

              /*TOTAL CONTROLLER - Total number cant be negative*/ //SPELL 01//
              if(this.total.spell01[0]>=0){
              
              /*LIFE */
              this.scoreCharacter-= this.magic.power;

              document.getElementById('score-character').style.width = this.scoreCharacter.toString() + '%';

              }//this.total.spell01>=0 

              this.scoreController = 0;
            }
          }//this.magic
          
        }
        
      }//if(collision)
     
    }//if(this.magic)

    /*SPELL 02**************************************/
    if(this.magic02){
      if(this.total.spell02[1] === true){
        /* Magic Position */
        const magicX = (this.magic02.positionX + this.magic02.startX)*GRID_SIZE;
        const magicY = (this.magic02.positionY + this.magic02.startY)*GRID_SIZE;
    

        /*CHECKCOLLISION*/
        if(
          /*UP*/
          Math.round(characterY) <= Math.round(magicY) + 25 &&
          Math.round(characterX) + 50 >= Math.round(magicX) &&

          /*BOTTOM*/
          Math.round(characterY) + 50 > Math.round(magicY) 
          ){
        
          if(this.scoreController === 1){
            
              /*CHECKCOLLISION SPELL 02*/
              if(this.total.spell02[0]>=0){
              
                /*LIFE */
                this.scoreCharacter-= this.magic02.power;

                document.getElementById('score-character').style.width = this.scoreCharacter.toString() + '%';
    
              }//this.total.spell02>=0
    
              this.scoreController = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic)

    /*SPELL 03**************************************/
    if(this.magic03){
      if(this.total.spell03[1] === true){
        /* Magic Position */
        const magicX = (this.magic03.positionX + this.magic03.startX)*GRID_SIZE;
        const magicY = (this.magic03.positionY + this.magic03.startY)*GRID_SIZE;
    

        /*CHECKCOLLISION*/
        if(
          /*UP*/
          Math.round(characterY) <= Math.round(magicY) + 25 &&
          Math.round(characterX) + 50 >= Math.round(magicX) &&

          /*BOTTOM*/
          Math.round(characterY) + 50 > Math.round(magicY) 
          ){
        
          if(this.scoreController === 1){
            
              /*CHECKCOLLISION SPELL 03*/
              if(this.total.spell03[0]>=0){
              
                /*LIFE */
                this.scoreCharacter-= this.magic03.power;

                document.getElementById('score-character').style.width = this.scoreCharacter.toString() + '%';
    
              }//this.total.spell03>=0
    
              this.scoreController = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic03)


    /*SPELL 04**************************************/
    if(this.magic04){
      if(this.total.spell04[1] === true){
        /* Magic Position */
        const magicX = (this.magic04.positionX + this.magic04.startX)*GRID_SIZE;
        const magicY = (this.magic04.positionY + this.magic04.startY)*GRID_SIZE;
        /*
        console.log('-------------------')
        console.log(magicY + 25);
        console.log('=>');
        console.log(divaY);
        console.log(divaX+50);
        console.log('>=')
        console.log(magicX);
        console.log(divaY +50)
        console.log('>');
        console.log(magicY);
        console.log(magicX +25);
        console.log('>=');
        console.log(divaX);
        debugger;*/

        /*CHECKCOLLISION*/
        if(
          /*UP*/
          Math.round(divaY) <= Math.round(magicY) + 25 &&
          Math.round(divaX) + 50 >= Math.round(magicX) &&

          /*BOTTOM*/
          Math.round(divaY) + 50 > Math.round(magicY) &&
          Math.round(magicX)+25 >= Math.round(divaX)
          ){
        
          if(this.scoreControllerCharacter === 1){
              
              /*CHECKCOLLISION SPELL 04*/
              if(this.total.spell04[0]>=0){
                
                /*LIFE */
                this.scoreDiva-= this.magic04.power;

                document.getElementById('score-diva').style.width = this.scoreDiva.toString() + '%';
    
              }//this.total.spell04>=0
    
              this.scoreControllerCharacter = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic04)

    /*SPELL 05**************************************/
    if(this.magic05){
      if(this.total.spell05[1] === true){
        /* Magic Position */
        const magicX = (this.magic05.positionX + this.magic05.startX)*GRID_SIZE;
        const magicY = (this.magic05.positionY + this.magic05.startY)*GRID_SIZE;
        /*
        console.log('-------------------')
        console.log(magicY + 25);
        console.log('=>');
        console.log(divaY);
        console.log(divaX+50);
        console.log('>=')
        console.log(magicX);
        console.log(divaY +50)
        console.log('>');
        console.log(magicY);
        console.log(magicX +25);
        console.log('>=');
        console.log(divaX);
        debugger;*/

        /*CHECKCOLLISION*/
        if(
          /*UP*/
          Math.round(divaY) <= Math.round(magicY) + 25 &&
          Math.round(divaX) + 50 >= Math.round(magicX) &&

          /*BOTTOM*/
          Math.round(divaY) + 50 > Math.round(magicY) &&
          Math.round(magicX)+25 >= Math.round(divaX)
          ){
        
          if(this.scoreControllerCharacter === 1){
              
              /*CHECKCOLLISION SPELL 05*/
              if(this.total.spell05[0]>=0){
               
                /*LIFE */
                this.scoreDiva-= this.magic05.power;
          
                document.getElementById('score-diva').style.width = this.scoreDiva.toString() + '%';
    
              }//this.total.spell05>=0
    
              this.scoreControllerCharacter = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic05)


    
    /*SPELL 05**************************************/
    if(this.magic05){
      if(this.total.spell05[1] === true){
        /* Magic Position */
        const magicX = (this.magic05.positionX + this.magic05.startX)*GRID_SIZE;
        const magicY = (this.magic05.positionY + this.magic05.startY)*GRID_SIZE;
        /*
        console.log('-------------------')
        console.log(magicY + 25);
        console.log('=>');
        console.log(divaY);
        console.log(divaX+50);
        console.log('>=')
        console.log(magicX);
        console.log(divaY +50)
        console.log('>');
        console.log(magicY);
        console.log(magicX +25);
        console.log('>=');
        console.log(divaX);
        debugger;*/

        /*CHECKCOLLISION*/
        if(
          /*UP*/
          Math.round(divaY) <= Math.round(magicY) + 25 &&
          Math.round(divaX) + 50 >= Math.round(magicX) &&

          /*BOTTOM*/
          Math.round(divaY) + 50 > Math.round(magicY) &&
          Math.round(magicX)+25 >= Math.round(divaX)
          ){
        
          if(this.scoreControllerCharacter === 1){
              
              /*CHECKCOLLISION SPELL 05*/
              if(this.total.spell05[0]>=0){
                
                /*LIFE */
                this.scoreDiva-= this.magic05.power;
          
                document.getElementById('score-diva').style.width = this.scoreDiva.toString() + '%';
    
              }//this.total.spell05>=0
    
              this.scoreControllerCharacter = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic05)

    /*SPELL 06**************************************/
    if(this.magic06){
      if(this.total.spell06[1] === true){
        /* Magic Position */
        const magicX = (this.magic06.positionX + this.magic06.startX)*GRID_SIZE;
        const magicY = (this.magic06.positionY + this.magic06.startY)*GRID_SIZE;
        /*
        console.log('-------------------')
        console.log(magicY + 25);
        console.log('=>');
        console.log(divaY);
        console.log(divaX+50);
        console.log('>=')
        console.log(magicX);
        console.log(divaY +50)
        console.log('>');
        console.log(magicY);
        console.log(magicX +25);
        console.log('>=');
        console.log(divaX);
        debugger;*/

        /*CHECKCOLLISION*/
        if(
          /*UP*/
          Math.round(divaY) <= Math.round(magicY) + 25 &&
          Math.round(divaX) + 50 >= Math.round(magicX) &&

          /*BOTTOM*/
          Math.round(divaY) + 50 > Math.round(magicY) &&
          Math.round(magicX)+25 >= Math.round(divaX)
          ){
        
          if(this.scoreControllerCharacter === 1){
              
              /*CHECKCOLLISION SPELL 06*/
              if(this.total.spell06[0]>=0){
                
                /*LIFE */
                this.scoreDiva-= this.magic06.power;
          
                document.getElementById('score-diva').style.width = this.scoreDiva.toString() + '%';
    
              }//this.total.spell06>=0
    
              this.scoreControllerCharacter = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic06)



    

    
    
  }//CheckColision

  gameOver(){
    if(this.scoreCharacter <= 0){
      document.getElementById('character-loose').style.display = 'inline';
      document.getElementById('diva-loose').style.display = 'none';   
    }
 
    if(this.scoreDiva <= 0){
      document.getElementById('character-loose').style.display = 'none';
      document.getElementById('diva-loose').style.display = 'inline'; 
    }
  }


  runLogic() {
    this.diva.runLogic();

    this.character.runLogic();

    if (this.magic) {
      this.magic.runLogic();
    }

    if (this.magic02) {
      this.magic02.runLogic();
    }

    if(this.magic03){
      this.magic03.runLogic();
    }

    if(this.magic04){
      this.magic04.runLogic();
    }

    if(this.magic05){
      this.magic05.runLogic();
    }

    if(this.magic06){
      this.magic06.runLogic();
    }

    if(this.magicCharacter){
      this.magicCharacter.runLogic();
    }
  }

  paint(timestamp) {
    this.cleanCanvas();

    this.diva.changeImage(this.characterMoviment,timestamp);

    this.character.changeImage(this.characterMoviment,timestamp);
    

    if (this.magic) {
      this.magic.paint();
    }

    if(this.magic02){
      this.magic02.paint();
    }

    if(this.magic03){
      this.magic03.paint();
    }

    if(this.magic04){
      this.magic04.paint();
    }

    if(this.magic05){
      this.magic05.paint();
    }

    if(this.magic06){
      this.magic06.paint();
    }

    if(this.magicCharacter) {
      this.magicCharacter.paint();
    }
  }

  loop(timestamp) {
    this.runLogic();
    this.paint(timestamp);
    this.checkCollision();
    this.gameOver();

    if(this.isRunning){
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
    
  }

  start () {
    this.reset();
    //this.loop();
  }


  reset() {
    this.diva = new Diva(this, 10, 0,-8,INICIAL_DX,INICIAL_DY,'pink', divaImages);
    this.character = new Diva(this,10, 0,-8,INICIAL_CX,INICIAL_CY, 'green', characterImages);

    if (!this.isRunning) {
      this.isRunning = true;
      this.loop();
    }
    
  }

  togglePause () {
    if (this.isRunning === false) {
      this.isRunning = true;
      this.loop();
    }else if(this.isRunning === true){
      this.isRunning = false;
    }
  }

}
