game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;

                me.levelDirector.loadLevel("level01");  // ALWAYS LOAD OBJS AFTER LOADING THE LEVEL OR THE LEVDIRECTOR MAY TRASH THEM!
		 this.resetPlayer();
         
                // add our HUD to the game world
            	this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	},
        
        resetPlayer: function(){
              var player = new game.PlayerEntity(0,420,{});
              var slime = new game.SlimeEntity(1000,550,{});
                me.game.add(player, 3); // add this variable into the "me.game"  // this.z gives it a starting position
                me.game.add(slime, 3); //put on top of background (layer2) 
        }
});
