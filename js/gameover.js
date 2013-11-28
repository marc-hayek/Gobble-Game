function gameoverstate()
{
	this.setup = function() {
		cigaro.pause();
		ymca.pause();
		alarm.pause();
		end.play();

	}

	this.update=function(){

		//setTimeout(function(){jaws.switchGameState(MenuState)},62000)
		setTimeout(function(){my_function()},62000)
		function my_function(){
        window.location = location.href;
  	}

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

   




/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////




	}

	this.draw=function()
	{	jaws.context.clearRect(0,0,jaws.width,jaws.height)
		jaws.context.fillStyle = 'red';
        jaws.context.strokeStyle='black'
        jaws.context.font = 'bold 50pt terminal';
        jaws.context.textBaseline = 'bottom';
        jaws.context.fillText('YOU LOST FATASS!', jaws.width/2-300, 200)
	}

}