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
	UAGBForms.init( {"block_id":"4c940411","reCaptchaEnable":false,"reCaptchaType":"v2","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":"","afterSubmitCcEmail":"","afterSubmitBccEmail":"","afterSubmitEmailSubject":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0444\u043e\u0440\u043c\u044b","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u044b\u0448\u0435\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e captcha.","confirmationUrl":""}, '.uagb-block-4c940411', 69 );
});
window.addEventListener("DOMContentLoaded", function(){
	UAGBTimelineClasses( {"block_id":"ea67d895-f706-462c-a6e9-06e96415acd9","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-ea67d895-f706-462c-a6e9-06e96415acd9' );
});
window.addEventListener("resize", function(){
	UAGBTimelineClasses( {"block_id":"ea67d895-f706-462c-a6e9-06e96415acd9","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-ea67d895-f706-462c-a6e9-06e96415acd9' );
});
 });