function BossState()
{
  var start=false;
  var bosshealth=100
  var bosshealthtext
  var dropstate=1
  var droptype=0
  var isdropping=false
  var rounds=0;
  var hitleft=false
  var hitright=false
  var shotnumber=1
  var candrop=true
  var candropammo=true


  this.setup = function()

  {   
     // boss = new jaws.Sprite({image: "enemy2.png", x: 500, y:-180})
      boss = new jaws.Sprite({image: img_enemy, x: 500, y:-180})
     // player = new jaws.Sprite({image: "haditrans.png", x: playerpos, y:500})
       player = new jaws.Sprite({image: img_player, x: playerpos, y:500})
      player.can_fire = true
      player.resizeTo(84,170);
      boss.resizeTo(84,170);
      boss.speed=4

  }

  this.update= function()
  {
    cigaro.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

 

    playerpos=player.x
   
    if(boss.y<0)
    {
      boss.y+=1
    }
    else
    {
      changingstate=false
      alarm.pause()
      cigaro.play()
      moveBoss(boss)
    }

if(changingstate==false){
if(candropammo==true){
      candropammo=false
      setTimeout(function(){candropammo=true; ammolist.push(new Ammo_Single())}, (Math.random()+0.6)*3000)
    }
}


if(boss.x==0 && boss.speed<0)
{
  hitleft=true
  hitright=false


}

if(boss.x==jaws.width-boss.width && boss.speed>0)
{
  hitright=true
  hitleft=false

}





    if(boss.x==0 && isdropping==false && rounds==0 && dropstate==1)
    {
      isdropping=true
    }

    if(dropstate==3)
    {
       if(candrop==true){
      candrop=false
      setTimeout(function(){candrop=true; bossdrops(boss,(Math.floor(Math.random()*enemytypes)), 0)}, (Math.random()+0.2)*2000)
    }

    }
  


    if(isdropping)
    {
      if(dropstate==1){
      
      if(rounds==0)
     { droptype=0
      bossdrops(boss, droptype,0)
      isdropping=false
      // console.log(boss.x+ "  "+ (jaws.width-boss.width))
       if(hitright)
      {
        rounds=1;
        
      }
    else{
    var sett1=  setTimeout(function(){isdropping=true},1100)
     }
      
    }

    if(rounds==1)
    { 
      droptype=1
      bossdrops(boss, droptype, 0)
      isdropping=false
       if(hitleft){rounds=2;}
      else{var sett2= setTimeout(function(){ isdropping=true},1100)}
     
      

    }

    if(rounds==2)
    {window.clearTimeout(sett2)
      droptype=2
      bossdrops(boss, droptype, 0)
      isdropping=false
       if(hitright)
      {
        rounds=3;
       
      } 
else{
    var sett3 = setTimeout(function(){isdropping=true},1100)}
    

    }

    if(rounds==3)
    {
      isdropping=false
      if(bosshealth<=70 && bosshealth>40)
      {dropstate=2; setTimeout(function(){isdropping=true; },12000)}
      if(bosshealth<=40){dropstate=3;boss.speed=10; setTimeout(function(){isdropping=true},10000)}
      else{setTimeout(function(){rounds=0},5000)}

    }

    }

    else if(dropstate==2)
    { window.clearTimeout(sett3)
      window.clearTimeout(sett1)
      window.clearTimeout(sett2)
      
      droptype=0;
      

      bossdrops(boss,droptype,0)
      bossdrops(boss,droptype,5)
      bossdrops(boss,droptype,-5)
      bossdrops(boss,droptype,10)
      bossdrops(boss,droptype,-10)
      isdropping=false
      var timetoshoot
      if(shotnumber<3){timetoshoot= 400} else{shotnumber=0;timetoshoot=4000}
     var sett4= setTimeout(function(){isdropping=true;shotnumber+=1; }, timetoshoot )
      if(bosshealth<=40){dropstate=3; boss.speed=10; setTimeout(function(){isdropping=true},10000)}

    }

    else if(dropstate==3)
    {
      window.clearTimeout(sett4)
      isdropping=false
    //  console.log(boss.speed)
      setTimeout(function(){boss.speed=-boss.speed; isdropping=true}, Math.random()*2000)
  
  


    }



    }


    if(jaws.pressed("left"))  { player.x -= playerspeed;}
        if(jaws.pressed("left")&&jaws.pressed("shift")){player.x -= playerspeed; if(playerspeed<20){playerspeed++} }
        jaws.on_keyup("left",function(){playerspeed=8;})
        jaws.on_keyup("shift",function(){playerspeed=8;})

        if(jaws.pressed("right"))  { player.x += playerspeed; }
        if(jaws.pressed("right")&&jaws.pressed("shift")){player.x += playerspeed; if(playerspeed<20){playerspeed++} }
        jaws.on_keyup("right",function(){playerspeed=8;})
        jaws.on_keyup("shift",function(){playerspeed=8;})
        
if(changingstate==false){
        if(jaws.pressed("space")) { 


          if(select==1){
            if(ammo1_amount>0){
          if(player.can_fire) {
      
           bullets.push( new jaws.Sprite({image: "images/icecream.png", x: player.x + player.width/2 , y: player.y, type:select} ) )
            player.can_fire = false
            ammo1_amount-=1;
            setTimeout(function() { player.can_fire = true }, 250)
                            }
                          }
                          else{
                              if(player.can_fire){
                                player.can_fire=false;
                                gunClick.pause();gunClick.play();
                                setTimeout(function() { player.can_fire = true }, 250)
                              }
                            
                              }
                         }

            if(select==2){
            if(ammo2_amount>0){
          if(player.can_fire) {
          
           bullets.push( new jaws.Sprite({image: "images/coke.png", x: player.x + player.width/2 , y: player.y, type:select} ) )
            player.can_fire = false
            ammo2_amount-=1;
            setTimeout(function() { player.can_fire = true }, 250)
                            }
                          }
                          else{
                              if(player.can_fire){
                                player.can_fire=false;
                                gunClick.pause();gunClick.play();
                                setTimeout(function() { player.can_fire = true }, 250)
                              }
                            
                              }
                         }

          if(select==3){
            if(ammo3_amount>0){
          if(player.can_fire) {
           bullets.push( new jaws.Sprite({image: "images/pizza.png", x: player.x + player.width/2 , y: player.y, type:select} ) )
            player.can_fire = false
            ammo3_amount-=1;
            setTimeout(function() { player.can_fire = true }, 250)
                            }
                          }
                          else{
                              if(player.can_fire){
                                player.can_fire=false;
                                gunClick.pause();gunClick.play();
                                setTimeout(function() { player.can_fire = true }, 250)
                              }
                            
                              }
                         }

           if(select==4){
            if(ammo4_amount>0){
          if(player.can_fire) {
            bullets.push( new jaws.Sprite({image: "images/bucket.png", x: player.x + player.width/2 , y: player.y, type:select +1} ))
            player.can_fire = false
            ammo4_amount-=1;
            setTimeout(function() { player.can_fire = true }, 250)
                            }
                          }
                          else{
                              if(player.can_fire){
                                player.can_fire=false;
                                gunClick.pause();gunClick.play();
                                setTimeout(function() { player.can_fire = true }, 250)
                              }
                            
                              }
                         }



}
    }
        if(jaws.pressed("1")){select=1}
        if(jaws.pressed("2")){select=2}
        if(jaws.pressed("3")){select=3}
        if(jaws.pressed("4")){select=4}
       // if(jaws.pressed("z")){if(select>1){select-=1}}
        //if(jaws.pressed("x")){if(select<4){select+=1}}
        jaws.on_keydown("z",function(){if(select>1){select-=1}else{select=4}})
        jaws.on_keydown("x",function(){if(select<4){select+=1}else{select=1}})


        if(select==1)
        {
          $("#ammo_sidebar_image").css("background","url(images/icecream.png) no-repeat center center");

        }
        else if(select==2)
        {
            $("#ammo_sidebar_image").css("background","url(images/coke.png) no-repeat center center");
        }
        else if(select==3)
        {
          $("#ammo_sidebar_image").css("background","url(images/pizza.png) no-repeat center center");
        }
        else
        {
          $("#ammo_sidebar_image").css("background","url(images/bucket.png) no-repeat center center");
        }
 

        $(document).ready(function(){
       $("#ammo1").text(ammo1_amount);
       $("#ammo2").text(ammo2_amount);
       $("#ammo3").text(ammo3_amount);
       $("#ammo4").text(ammo4_amount);
       $("#ammotype").text(select);
       $("#fps").text(jaws.game_loop.fps);

              });


bullets.forEach(function(sprite,index)
{

  sprite.y-=8

})    

forceInsideCanvas(player)

bullets.removeIf(bulletisOutsideCanvas)



jaws.collideOneWithMany(boss,bullets).forEach(function(pair,index)
        {
          bullets.remove(pair)

          bosshealth-=pair.type
          if(bosshealth<0 || bosshealth==0){bosshealth=0;jaws.switchGameState(winstate)}
         // enemylist.remove(pair[1])
         bomb.pause()
          bomb.play()
           explodelist.push(new jaws.Sprite({image: "images/explode.png", x:(pair.x-pair.width/2), y:(pair.y - pair.height/2), alpha:1}))
          
        })

        explodelist.forEach(function(sprite,index)
        {


          if(sprite.alpha>0){
          sprite.alpha-=0.04

        }
        if(sprite.alpha<0)
        {
          sprite.alpha=0
          explodelist.remove(sprite)
        }


        })

 enemylist.forEach(function(sprite,index)
 {
  

//console.log(jaws.collideManyWithMany(ammolist,enemylist))
  if (jaws.collideOneWithOne(sprite, player))
  {
    scream.pause();
    scream.play();
    enemylist.remove(sprite)
   health-=(sprite.type+1)
     if(health<0 || health==0){health=0;setTimeout(function(){jaws.switchGameState(gameoverstate)},300)}
   poplist.push(new jaws.Sprite({image:healthpopselector[sprite.type], x:player.x, y: player.y, alpha:1}))
   
   player.alpha=0.5
   setTimeout(function(){player.alpha=1},50)
  

  }
  
   if(sprite.y>jaws.height)
  {
    enemylist.remove(sprite)
    
  }

  sprite.y+= sprite.speed
  sprite.x+=sprite.xspeed
 // sprite.x+=sprite.xspeed

 // console.log(Math.floor(sprite.type))



 }
        )


jaws.collideManyWithMany(bullets,enemylist).forEach(function(pair,index)
        {
          bullets.remove(pair[0])
          enemylist.remove(pair[1])
          bomb.play()
           explodelist.push(new jaws.Sprite({image: "images/explode.png", x:(pair[1].x), y:(pair[1].y), alpha:1}))
          
        })

poplist.forEach(function(sprite,index)
        {
          

          sprite.y-=2
          if(sprite.alpha>0){
          sprite.alpha-=0.02

        }
        if(sprite.alpha<0)
        {
          sprite.alpha=0
          poplist.remove(sprite)
        }


        })


ammolist.forEach(function(sprite, index){       
if (collisiondetect(sprite,player))
      {
        //ammolist.removeIf(collisiondetect2)
        ammolist.remove(sprite)
        gag.pause();
        gag.play()
        //var pop=new popup(randompopup(sprite.type))
        //poplist.push(pop)
        var pic=randompopup(sprite.type)
        var pops=new jaws.Sprite({image:pic, x:player.x, y: player.y, alpha:1})

        poplist.push(pops)

        score+=sprite.type

      }
    
 if(sprite.y>jaws.height)
        { ammolist.removeIf(ammoisoutsidecanvas)
         // ammolist.push(new Ammo_Single())

        }

       }

       )
        




    

  }

  this.draw=function()
  {
    jaws.context.clearRect(0,0,jaws.width,jaws.height)
    boss.draw();
    player.draw();
    bullets.draw()
    ammolist.draw()
    poplist.draw()
    enemylist.draw()
    explodelist.draw();
    

     jaws.context.fillStyle = 'white';
        jaws.context.font = 'italic bold 30px sans-serif';
        jaws.context.textBaseline = 'bottom';
        jaws.context.fillText('Score:' + score, 50, 100);

        jaws.context.fillStyle = 'white';
        jaws.context.font = 'italic bold 30px sans-serif';
        jaws.context.textBaseline = 'bottom';
        jaws.context.fillText('Health:' + health , 50, 150);
        
         jaws.context.fillStyle = 'white';
        jaws.context.font = 'italic bold 30px sans-serif';
        jaws.context.textBaseline = 'bottom';
        jaws.context.fillText('Boss Health:' + bosshealth , 50, 200);



  }


  function moveBoss(item)
  {
    boss.x-=boss.speed
    forceInsideCanvas(item)
    if(boss.x==jaws.width -item.width  || boss.x==0)
    {
      boss.speed=-boss.speed
    }

  }


  function bossdrops(item, droptype, xsp)
  { var entype=droptype
    var ax=enemyselector[entype]
    var enemy=new jaws.Sprite(
          {
          image:ax,
         x:item.x +item.width/2,
         y:item.height,
         alpha:0.9,
         speed:5,
         type: entype

         
       }
         )

     if (dropstate==2)
     {
      enemy.xspeed=xsp
     }
     else if(dropstate==3)
     {
      enemy.speed=8
      enemy.xspeed=0
     }
     else {enemy.xspeed=0}
     enemylist.push(enemy)
      
    

    return enemy

  }

}