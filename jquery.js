/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
var myplugin;
$('a#afficher').click(function(){
     if(!myplugin){
	  myplugin = $('#p1').cprogress({
	       percent: 10, // starting position
	       img1: 'v1.png', // background
	       img2: 'v2.png', // foreground
	       speed: 200, // speed (timeout)
	       PIStep : 0.05, // every step foreground area is bigger about this val
	       limit: 20, // end value
	       loop : false, //if true, no matter if limit is set, progressbar will be running
	       showPercent : true, //show hide percent
	       onInit: function(){console.log('onInit');},
	       onProgress: function(p){console.log('onProgress',p);}, //p=current percent
	       onComplete: function(p){console.log('onComplete',p);}
	  });
     }
});
});


