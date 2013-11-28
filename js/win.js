function winstate()
{	
	var hitmiddle=false
	var repeat=true
	
	this.setup = function() {
		//player = new jaws.Sprite({image: "haditrans.png", x: playerpos, y:500,speed:15})
		player = new jaws.Sprite({image: img_player, x: playerpos, y:500,speed:15})
		player.resizeTo(84,170);
		cigaro.pause();
		britney.play()
	}

	this.update=function(){





	if(hitmiddle==false){	
		if(player.x<(jaws.width/2-player.width/2))
		{
			player.x+=4
			

		}

		else if(player.x>(jaws.width/2-player.width/2))
		{
			player.x-=4
			

		}

		if(player.y>(jaws.height/2-player.height/2))
		{
			player.y-=4
		}

		if((player.x<jaws.width/2-player.width/2+3)&&(player.x>jaws.width/2-player.width/2-3) && (player.y>(jaws.height/2-player.height/2)-3) )
		{
			hitmiddle=true
		}
	}
	else
	{	changingstate=false
		player.x-=player.speed
    forceInsideCanvas(player)
    if(player.x==jaws.width -player.width  || player.x==0)
    {
      player.speed=-player.speed
    }


    if(repeat==true)
    {  for(var i=0;i<20;i++){
    	setTimeout(function(){ammolist.push(new Ammo_Single()) }, Math.random()*2000)
    				}
    				repeat=false
    }


  ammolist.forEach(function(sprite, index){       

 		if(sprite.y>jaws.height)
        { ammolist.removeIf(ammoisoutsidecanvas)
         // ammolist.push(new Ammo_Single())
        if(changingstate==false){setTimeout(function(){ammolist.push(new Ammo_Single()) }, Math.random()*2000)}
        }

      									 })

	}
}

	

	this.draw=function()
	{	jaws.context.clearRect(0,0,jaws.width,jaws.height)
		player.draw()
		ammolist.draw()
		jaws.context.fillStyle = 'red';
        jaws.context.font = 'italic bold 40px sans-serif';
        jaws.context.textBaseline = 'bottom';
        jaws.context.fillText("YOU WIN YOU SACK OF LARD!", jaws.width/2-300, 200);

	}
}