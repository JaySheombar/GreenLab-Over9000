
//shuffle 亂數排序dom========================
(function($){
    $.fn.shuffle = function() {
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
        return $(shuffled);
    };
})(jQuery);


$(function(){
	//有上稿才出現
	if($("#hot-trip .piece").length > 0){
		$("#hot-trip").show();
	}
	
	//調用shuffle 亂數排序
	$(".block_travel .part_travel_pictxt .piece").shuffle();

	//GA 點擊追蹤
	ga('create', 'UA-52510577-12', 'auto', {'name': 'cheeseAD'});
	ga('cheeseAD.require', 'displayfeatures');
	ga('cheeseAD.send', 'pageview');
	$("#hot-trip .pic a").click(function() {
		ga("cheeseAD.send", "event", ""+$(this).parent().text()+"", "Logo圖", ""+location.hostname+"", {'nonInteraction': 0});
	});
	$("#hot-trip h3 a").click(function() {
		//ga("cheeseAD.send", "event", "啟示廣告-出國趣", ""+$(this).text()+"", ""+location.hostname+"", {'nonInteraction': 0});
		ga("cheeseAD.send", "event", ""+$(this).parent().parent().find(".pic").text()+"", ""+$(this).parent().index()+"-"+$(this).text()+"", ""+location.hostname+"", {'nonInteraction': 0});
	});
});