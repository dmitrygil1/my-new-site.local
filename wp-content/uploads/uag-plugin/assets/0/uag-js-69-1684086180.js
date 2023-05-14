document.addEventListener("DOMContentLoaded", function(){ var selector = document.querySelectorAll( '.uagb-block-5e1b9464' );
if ( selector.length > 0 ) {

	var blockquote__tweet = selector[0].getElementsByClassName("uagb-blockquote__tweet-button");

	if ( blockquote__tweet.length > 0 ) {

		blockquote__tweet[0].addEventListener("click",function(){	
			var request_url = "https://twitter.com/share?url="+ encodeURIComponent("http://my-new-site.local")+"&text="+("You've landed on the best news site of your life (just kidding).<br>However, given that it was created in a couple of hours, you can estimate the approximate speed \/ quality of work")+"&via="+("");
			window.open( request_url );
		});
	}
}
window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"4c940411","reCaptchaEnable":false,"reCaptchaType":"v2","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":"","afterSubmitCcEmail":"","afterSubmitBccEmail":"","afterSubmitEmailSubject":"Form Submission","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Please fill up the above captcha.","confirmationUrl":""}, '.uagb-block-4c940411', 69 );
});
window.addEventListener("DOMContentLoaded", function(){
	UAGBTimelineClasses( {"block_id":"ea67d895-f706-462c-a6e9-06e96415acd9","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-ea67d895-f706-462c-a6e9-06e96415acd9' );
});
window.addEventListener("resize", function(){
	UAGBTimelineClasses( {"block_id":"ea67d895-f706-462c-a6e9-06e96415acd9","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-ea67d895-f706-462c-a6e9-06e96415acd9' );
});
 });