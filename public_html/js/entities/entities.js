////////////////////////////////////////////////////////////////////////////////
////////                    PLAYER                   ///////////////////////////
////////////////////////////////////////////////////////////////////////////////

game.PlayerEntity = me.ObjectEntity.extend({
    init: function(x,y,settings){
        settings.image = "player1-spritesheet";
        settings.spritewidth = "72";
        settings.spriteheight = "92";
        this.parent(x,y,settings);
        
        this.collidable = true; // make colidable
        this.renderable.addAnimation("idle", [3]);//creates an animation an chooses the start image
        this.renderable.addAnimation("walk", [ 4, 5, 6, 7, 8, 9, 10, 11 ]);
        
        this.renderable.setCurrentAnimation("idle");//uses the animation we CREATED above
        this.setVelocity(5,20);
        // add walking
        
    },
    
    update: function(){
          if(me.input.isKeyPressed("right")){
              this.vel.x += this.accel.x*me.timer.tick;
              this.renderable.setCurrentAnimation("walk");
          }
          else if(me.input.isKeyPressed("left")){
              this.vel.x -= this.accel.x*me.timer.tick;
          }
          else{
              this.vel.x = 0;
          }
          if (me.input.isKeyPressed("up")  && !this.falling && !this.jumping){
              this.vel.y -= this.vel.y + this.accel.y*me.timer.tick;
              this.jumping=true;
          }
          var collision =  this.collide();//check on each update if there was a collision store in collision variable
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
        
        this.setVelocity(5,20);
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
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
          if (me.input.isKeyPressed("up")  && !this.falling && !this.jumping){
              this.vel.y -= this.vel.y + this.accel.y*me.timer.tick;
              this.jumping=true;
 
          }
          
          this.updateMovement();
          return true;
          
          
    }
    
});


////////////////////////////////////////////////////////////////////////////////
////////                    LEVEL TRIGGER     //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////
game.LevelTrigger=me.ObjectEntity.extend({
    init: function (x,y,settings){
        this.parent(x,y,settings); //create the object
        this.collidable = true;  // once initialized set to true so that it's collidable
        this.level = settings.level; // stores whatever is in the entity (in this case triggerenetity)_ 's settings which we defined as level02 in this case
    },
    
    onCollision:function(){//rather than update, thsi executes when there's a collision
    this.collidable = false; // once collided set future collidabilyt to false
    me.levelDirector.loadLevel.defer(this.level);//calls the variable stored above in the init function this.level=settings.level
    me.state.current().reestPlayer().defer;//defer waits for previous thing to (loadlevel)finish loading before this thing (players)
    }
}); 