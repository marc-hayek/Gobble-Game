
var dropbox = document.getElementById('select_player_box'); 

var dropbox2=document.getElementById('select_enemy_box'); 

window.addEventListener("dragover",function(e){
  e = e || event;
  e.preventDefault();
},false);
window.addEventListener("drop",function(e){
  e = e || event;
  e.preventDefault();
},false);


// Setup drag and drop handlers. 
dropbox.addEventListener('dragenter', stopDefault_over, false); 
dropbox.addEventListener('dragover', stopDefault_over, false); 
dropbox.addEventListener('dragleave', stopDefault_leave, false); 
dropbox.addEventListener('drop', onDrop, false); 

dropbox2.addEventListener('dragenter', stopDefault_over, false); 
dropbox2.addEventListener('dragover', stopDefault_over, false); 
dropbox2.addEventListener('dragleave', stopDefault_leave, false); 
dropbox2.addEventListener('drop', onDrop2, false); 

function stopDefault(e)  
{ 
  e.stopPropagation(); 
  e.preventDefault(); 
} 

function stopDefault_over(e)  
{ 
  e.stopPropagation(); 
  e.preventDefault(); 
  $(this).css("border","4px dashed yellow");
  console.log("over!!!");
} 



function stopDefault_leave(e)  
{ 
  e.stopPropagation(); 
  e.preventDefault();
  $(this).css("border","4px dashed #ccc"); 
} 




function onDrop(e)  
{ 
e.stopPropagation(); 
e.preventDefault(); 
 $(this).css("border","4px dashed #ccc"); 

var readFileSize = 0; 
var files = e.dataTransfer.files; 


file = files[0]; 
readFileSize += file.fileSize; 


// Only process image files. 
var imageType = /image.*/; 

if (!file.type.match(imageType))  
{ 
return; 
} 


var reader = new FileReader(); 


reader.onerror = function(e)  
{ 
alert('Error code: ' + e.target.error); 
}; 


// Create a closure to capture the file information. 
reader.onload = (function(aFile)  
{ 
return function(evt)  
{ 	
	
	//im2.src=event.target.result;
	


	$("#select_player_box p").hide();
	$("#img_player").hide();
	img_player.src=evt.target.result
 	$("#select_player_box").css("background",'url(' + evt.target.result + ') no-repeat center');
 	choose_player=true;
	
	//img.style.background = 'url(' + event.target.result + ') no-repeat center';

	 //dropbox.style.background = 'url(' + event.target.result + ') no-repeat center';
	

//dropbox.src = evt.target.result; 

} 
})(file); 

// Read in the image file as a data url. 
reader.readAsDataURL(file); 

} 


function onDrop2(e)  
{ 
e.stopPropagation(); 
e.preventDefault(); 
 $(this).css("border","4px dashed #ccc"); 

var readFileSize = 0; 
var files = e.dataTransfer.files; 


file = files[0]; 
readFileSize += file.fileSize; 


// Only process image files. 
var imageType = /image.*/; 

if (!file.type.match(imageType))  
{ 
return; 
} 


var reader = new FileReader(); 


reader.onerror = function(e)  
{ 
alert('Error code: ' + e.target.error); 
}; 


// Create a closure to capture the file information. 
reader.onload = (function(aFile)  
{ 
return function(evt)  
{ 	

	
	//im2.src=event.target.result;
	


	$("#select_enemy_box p").hide();
	$("#img_enemy").hide();
	img_enemy.src=evt.target.result
 	$("#select_enemy_box").css("background",'url(' + evt.target.result + ') no-repeat center');
 	choose_enemy=true;
	
	//img.style.background = 'url(' + event.target.result + ') no-repeat center';

	 //dropbox.style.background = 'url(' + event.target.result + ') no-repeat center';
	

//dropbox.src = evt.target.result; 

} 
})(file); 

// Read in the image file as a data url. 
reader.readAsDataURL(file); 

} 


