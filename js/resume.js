"use strict";

(function (window, undefined){

	var clientDevice = 'desktop';

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		clientDevice = 'mobile';
	}

	// Java Javascript Node.js PHP C# SQL jQuery React Angular Socket.IO AWS Wowza Twilio
	// REST Caching Microservices Git UI/UX Responsiveness
	var workMap = {
		'wk-modiface' : ['sk-nodejs', 'sk-php', 'sk-javascript', 'sk-sql', 'sk-jquery', 'sk-aws', 'sk-twilio', 'sk-rest', 'sk-caching', 'sk-microservices', 'sk-git', 'sk-uiux', 'sk-responsiveness'],
		'wk-novantas' : ['sk-java', 'sk-javascript', 'sk-sql', 'sk-angular', 'sk-rest', 'sk-caching', 'sk-microservices', 'sk-git', 'sk-uiux'],
		'wk-yeplive' : ['sk-php', 'sk-javascript', 'sk-nodejs', 'sk-sql', 'sk-jquery', 'sk-socketio', 'sk-aws', 'sk-wowza', 'sk-rest', 'sk-caching', 'sk-git', 'sk-uiux', 'sk-responsiveness'],
		'wk-zulily' : ['sk-java', 'sk-javascript', 'sk-nodejs', 'sk-sql', 'sk-csharp', 'sk-angular', 'sk-rest', 'sk-caching', 'sk-microservices', 'sk-git', 'sk-uiux', 'sk-responsiveness'],
		'wk-interset' : ['sk-javascript', 'sk-nodejs', 'sk-sql', 'sk-jquery', 'sk-aws', 'sk-rest', 'sk-git', 'sk-uiux', 'sk-responsiveness'],
		'wk-tdsb' : ['sk-javascript', 'sk-jquery'],
		'wk-blackberry' : [],
		'wk-tiercon' : [],
		'wk-teknion' : [],
		'wk-clubhousegolf' : ['sk-javascript', 'sk-php', 'sk-angular', 'sk-react', 'sk-rest', 'sk-caching', 'sk-git', 'sk-uiux', 'sk-responsiveness', 'sk-sql'],
		'wk-wheelzo' : ['sk-javascript', 'sk-nodejs', 'sk-jquery', 'sk-rest', 'sk-git', 'sk-sql'],
		'wk-cubicwork' : ['sk-javascript', 'sk-php', 'sk-jquery', 'sk-sql', 'sk-uiux']
	}

	var skillMap = {};

	for(var workKey in workMap){
		workMap[workKey].forEach(function(skillKey, id){
			if(skillMap[skillKey] && skillMap[skillKey].indexOf(workKey) == -1){
				skillMap[skillKey].push(workKey);
			}
			else if(!skillMap[skillKey]){
				skillMap[skillKey] = [workKey];
			}
		});
	}

	var $switchWork = $(".switch-wk");
	var $switchSkill = $(".switch-sk");

	function highlightWorks(event){
		$switchWork.css("opacity", "0.2");
		$switchSkill.css("opacity", "0.2");
		$(event.currentTarget).css("opacity", "1");
		skillMap[event.currentTarget.id].forEach(function(item, index){
			$('#' + item).css("opacity", "1");
		});
	}

	function highlightSkills(event){
		$switchWork.css("opacity", "0.2");
		$switchSkill.css("opacity", "0.2");
		$(event.currentTarget).css("opacity", "1");
		workMap[event.currentTarget.id].forEach(function(item, index){
			$('#' + item).css("opacity", "1");
		});
	}

	function resetOpacity(){
		$switchWork.css("opacity", "1");
		$switchSkill.css("opacity", "1");
	}

	$(document).ready(function(){
		if(clientDevice == 'desktop'){
			$switchWork.hover(highlightSkills, resetOpacity);
			$switchSkill.hover(highlightWorks, resetOpacity);
		}
	});

	var containerWidth = document.getElementById("top-container").offsetWidth;

	$('#skillbar').css('width', containerWidth);

	var scrollTop     = $(window).scrollTop(),
	    elementOffset = $('#skillbar').offset().top,
	    distance      = (elementOffset - scrollTop) - 4;

	var offsetHeight = document.getElementById('skillbar').offsetHeight;

	var $skillbarButtonBorder = $('#skillbarButtonBorder');
	var $skillbar = $('#skillbar'); 
	var $experience = $('#experience'); 
	var $switchTitle = $('#switch-title');

	$(window).scroll(function(e){
	  var isPositionFixed = ($skillbar.css('position') == 'fixed');
	  if($(this).scrollTop() > distance && !isPositionFixed){ 
	    $skillbar.css({'position': 'fixed', 'top': '0px'});
	    $skillbarButtonBorder.css('visibility', 'visible');
	    $experience.css('top', offsetHeight + 'px');
	    $switchTitle.css('opacity', '1');
	  }
	  if($(this).scrollTop() < distance && isPositionFixed){
	    $skillbar.css({'position': 'relative', 'top': '0px'}); 
	    $skillbarButtonBorder.css('visibility', 'hidden');
	    $experience.css('top', '0');
	    $switchTitle.css('opacity', '0');
	  } 
	});

}(this));