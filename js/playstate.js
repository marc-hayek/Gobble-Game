 function PlayState() {

 

     

      // var createpop=function(pic)
      // {
      //   var pops=new jaws.sprite({image:pic, x:player.x, y: player.y})
      //   return pops
      // }








      this.setup = function() {

       // var imgtest=document.getElementById('imgtest');
     // player = new jaws.Sprite({image: "haditrans.png", x: 300, y:500})
       player = new jaws.Sprite({image: img_player, x: 300, y:500})
       player.resizeTo(84,170);
      player.can_fire = true
      $("#ammo_sidebar_image").css("background","url(images/icecream.png) no-repeat center center")
      openingmusic.pause();
      ymca.play();



        
      
       
      
// add initial starting ammo to list
        while(ammonumber--)
        {
          
          
              
          setTimeout(function(){ammolist.push(new Ammo_Single()) }, Math.random()*5000)


        }

        while(enemynumber--)
        {
          setTimeout(function(){createenemy()},Math.random()*5000)
         
        }
        jaws.on_keydown("esc",  function() { jaws.switchGameState(MenuState) })
        jaws.preventDefaultKeys(["up", "down", "left", "right", "space"])



        
          
      

      }

      this.update = function() {

        ymca.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
     //console.log(jaws.game_loop.runtime())
        //player movements, speed up with shift
        playerpos=player.x
        if(jaws.pressed("left"))  { player.x -= playerspeed;}
        if(jaws.pressed("left")&&jaws.pressed("shift")){player.x -= playerspeed; if(playerspeed<20){playerspeed++} }
        jaws.on_keyup("left",function(){playerspeed=8;})
        jaws.on_keyup("shift",function(){playerspeed=8;})

        if(jaws.pressed("right"))  { player.x += playerspeed; }
        if(jaws.pressed("right")&&jaws.pressed("shift")){player.x += playerspeed; if(playerspeed<20){playerspeed++} }
        jaws.on_keyup("right",function(){playerspeed=8;})
        jaws.on_keyup("shift",function(){playerspeed=8;})
    


if(changingstate==true && ammolist.length==0 && bullets.length==0 && enemylist.length==0 && poplist.length==0 && explodelist.length==0)
{
  jaws.switchGameState(BossState)
}

     

        if(jaws.pressed("f")){
         changingstate=true
         ymca.pause()
       alarm.play();
           }



           
       // console.log(jaws.game_loop.runtime())
       if(jaws.game_loop.runtime()>120000)
       {
        changingstate=true
        ymca.pause()
        alarm.play();

       }


if(changingstate==false)
{
        if(jaws.pressed("space")) { 


          if(select==1){
            if(ammo1_amount>0){
          if(player.can_fire) {
      
           bullets.push( new jaws.Sprite({image: "images/icecream.png", x: player.x + player.width/2 , y: player.y, type: select} ) )
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
          
           bullets.push( new jaws.Sprite({image: "images/coke.png", x: player.x + player.width/2 , y: player.y, type: select} ) )
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
           bullets.push( new jaws.Sprite({image: "images/pizza.png", x: player.x + player.width/2 , y: player.y, type: select} ) )
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
            bullets.push( new jaws.Sprite({image: "images/bucket.png", x: player.x + player.width/2 , y: player.y, type: select+1} ))
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
        if(jaws.pressed("1")){select=1; $("#ammo_sidebar_image").css("background","url(images/icecream.png) no-repeat center center")}
        if(jaws.pressed("2")){select=2; $("#ammo_sidebar_image").css("background","url(images/coke.png) no-repeat center center")}
        if(jaws.pressed("3")){select=3; $("#ammo_sidebar_image").css("background","url(images/pizza.png) no-repeat center center")}
        if(jaws.pressed("4")){select=4; $("#ammo_sidebar_image").css("background","url(images/bucket.png) no-repeat center center")}
       // if(jaws.pressed("z")){if(select>1){select-=1}}
        //if(jaws.pressed("x")){if(select<4){select+=1}}
        jaws.on_keydown("z",function(){if(select>1){select-=1}else{select=4}

          if(select==1)
        { console.log("changing evertim");
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

        });
        jaws.on_keydown("x",function(){if(select<4){select+=1}else{select=1}

          if(select==1)
        { console.log("changing evertim");
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
        });
 

       // if(jaws.game_loop.runtime()>20000){jaws.switchGameState(BossState, {fps: 40})}





bullets.forEach(function(sprite,index)
{

  sprite.y-=4

})    
        
//console.log(jaws.collideManyWithMany(bullets,enemylist))



//delete and create ammo if exits canvas
ammolist.forEach(function(sprite, index){       
if (collisiondetect(sprite,player))
      {
        //ammolist.removeIf(collisiondetect2)
        ammolist.remove(sprite)
        munch.pause();
        munch.play()
        if(changingstate==false){
        setTimeout(function(){ammolist.push(new Ammo_Single()) }, Math.random()*5000);}


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
        if(changingstate==false){setTimeout(function(){ammolist.push(new Ammo_Single()) }, Math.random()*5000)}
        }

       }

       )

       
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

 enemylist.forEach(function(sprite,index)
 {
  

//console.log(jaws.collideManyWithMany(ammolist,enemylist))
  if (jaws.collideOneWithOne(sprite, player))
  { 
    hit.pause();
    hit.play();
    enemylist.remove(sprite)
   if(changingstate==false){setTimeout(function(){createenemy()},Math.random()*5000)}
   health-=(sprite.type+1)
   if(health<0 || health==0){health=0;setTimeout(function(){jaws.switchGameState(gameoverstate)},300)}
   poplist.push(new jaws.Sprite({image:healthpopselector[sprite.type], x:player.x, y: player.y, alpha:1}))
   
   player.alpha=0.5
   setTimeout(function(){player.alpha=1},50)
  

  }

  if(sprite.y>jaws.height)
  {
    enemylist.remove(sprite)
    if(changingstate==false){setTimeout(function(){createenemy()},Math.random()*5000)}
  }
  sprite.y+= sprite.speed
 // console.log(Math.floor(sprite.type))



 }
        )
       //ammolist.removeIf(function(){checkhit(sprite,player)})
     
      

       
        

       


        forceInsideCanvas(player)
        bullets.removeIf(bulletisOutsideCanvas) // delete items for which isOutsideCanvas(item) is true

        jaws.collideManyWithMany(bullets,enemylist).forEach(function(pair,index)
        {
          bullets.remove(pair[0])
          enemylist.remove(pair[1])

           explodelist.push(new jaws.Sprite({image: "images/explode.png", x:(pair[1].x), y:(pair[1].y), alpha:1}))
            bomb.pause()
           bomb.play()
          setTimeout(function(){createenemy()},Math.random()*5000)
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

       // var frame=10;
        

       // fps.innerHTML = jaws.game_loop.fps
       
      $(document).ready(function(){
       $("#ammo1").text(ammo1_amount);
       $("#ammo2").text(ammo2_amount);
       $("#ammo3").text(ammo3_amount);
       $("#ammo4").text(ammo4_amount);
       $("#ammotype").text(select);
       $("#fps").text(jaws.game_loop.fps);

              });

      }

      this.draw = function() {
        
        jaws.context.clearRect(0,0,jaws.width,jaws.height)
       


        player.draw()
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

      // jaws.context.rect(800, 40, 200, 100);
      // jaws.context.fillStyle = 'red';
      // jaws.context.fill();
      // jaws.context.lineWidth = 6;
      // jaws.context.strokeStyle = 'black';
      // jaws.context.stroke();
      // jaws.context.clearRect(0,0,jaws.width,jaws.height)

      


        
        //ammolist.draw()  // will call draw() on all items in the list
      }



    }