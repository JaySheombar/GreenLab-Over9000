//initialize
$(function(){
    if ($.cookie('liveShowClose') == null) {
        $.cookie("liveShowClose", 0, { expires: 1 , path:"/" , domain: "ettoday.net" });
    }
});

//close btn
$(function(){
    $('#etnews_live_player .close').click(function(){        
        $('#etnews_live_player').remove();        
        ga("AllWeb.send", "event", "開框關閉鈕",""+$(this).attr('href')+"");//trackevent
        var date = new Date();
        var minutes = 60;
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        $.cookie("liveShowClose", 1, { expires: date , path:"/" , domain: "ettoday.net" });        
    })
});

//load play video
$(function(){
    if ($.cookie('liveShowClose')==1) {
        $('#etnews_live_player').remove();        
    } else {
        $('#etnews_live_player').css('display','flex');
    }
});

//for hinet CDN call
if (window.addEventListener) {
    window.addEventListener ("message", receive, false);
} else {
    if (window.attachEvent) {
        window.attachEvent("onmessage",receive, false);
    }
}

function receive(event){
    var data = event.data;
    if(typeof(window[data.func]) == "function"){
        window[data.func].call(null, data.params[0], data.params[1]);
    }
}

function videoMessage(vid,title){
    $("#video_title").text(title);
    // $("#video_title").attr('href' , "//boba.ettoday.net/videonews/"+vid);
    // $("#video_url").attr('href' , "//boba.ettoday.net/videonews/"+vid);
}


//slide sidemenu
$(function(){
    var etLiveVideo = $('#etnews_live_player .box_2');
    etLiveVideo.find('.slidmenu').click(function(){
        $(this).toggleClass('move');
    })
})