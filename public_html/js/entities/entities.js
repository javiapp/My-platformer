////////////////////////////////////////////////////////////////////////////////
////////                    PLAYER                   ///////////////////////////
////////////////////////////////////////////////////////////////////////////////

game.PlayerEntity = me.ObjectEntity.extend({
    init: function(x,y,settings){
        settings.image = "player1-spritesheet";
        settings.spritewidth = "72";
        settings.spriteheight = "92";
        this.parent(x,y,settings);
        
        this.setVelocity(5,2);
    },
    
    update: function(){
          if(me.input.isKeyPressed("right")){
              this.vel.x += this.accel.x*me.timer.tick;
          }
          else if(me.input.isKeyPressed("left")){
              this.vel.x -= this.accel.x*me.timer.tick;
          }
          else if(me.input.isKeyPressed("up")){
              this.vel.y -= this.vel.y + this.accel.y*me.timer.tick;
          }
          else{
              this.vel.x = 0;
          }
          this.updateMovement();
          return true;  // makes the update function fire on every tick
    }
});


////////////////////////////////////////////////////////////////////////////////
////////                    SLIME                    ///////////////////////////
////////////////////////////////////////////////////////////////////////////////

game.SlimeEntity = me.ObjectEntity.extend({
  init: function(x,y,settings){
        settings.image = "slime-spritesheet";
        settings.spritewidth = "60";
        settings.spriteheight = "28";
        this.parent(x,y,settings);
        
        this.setVelocity(5,0);
    },    
    
    update: function(){
        
         if(me.input.isKeyPressed("k")){
              this.vel.x += this.accel.x*me.timer.tick;
          }
          else if(me.input.isKeyPressed("j")){
              this.vel.x -= this.accel.x*me.timer.tick;
          }
        else{
              this.vel.x = 0;
          }
          this.updateMovement();
          return true;
    }
    
});