class Magic{
  constructor(game){
    this.game = game;
    this.column = 0;
    this.row=0;
  }

  paint(){
    const context = this.game.context;

    context.save();

    context.fillStyle = 'yellow';
    context.fillRect(this.column * GRID_SIZE,this.row * GRID_SIZE,100,context.canvas.height);
    
    context.restore();
  }
}