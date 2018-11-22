/*
  auther:f7
  date:2013.11-12
*/
requirejs.config({
    paths: {
        jquery: [
            './jquery-1.10.2.min'
        ],
        jPlayer: 'http://english.china.com/voicePlayer/jquery.jplayer.min', //2013版音频播放器，by ck
        jPlayer271: 'http://english.china.com/voicePlayer/jquery.jplayer-2.7.1.min', //2014版音频播放器，by ck
        jqueryui: 'http://english.china.com/voicePlayer/jquery-ui', //2014版音频播放器，by ck
        languageNav: 'http://english.china.com/js/languageNav', //二期语言菜单, 
        tab: './tab.min',
        scroll: './freescroll',
        clearPhoto: './clearPhotos',
        fixed: './fixedLimit.min',
        radio: './radiolist'
    },
    shim: {
        'jPlayer': ['jquery'], //2013版音频播放器，by ck
        'jqueryui': ['jquery'], //2014版音频播放器，by ck
        'jPlayer271': ['jqueryui'], //2014版音频播放器，by ck
        'languageNav': ['jquery'], //二期语言菜单, ck
        'radio': ['http://english.cri.cn/cribb/list.js']
    }
});

/**
 * 执行页面中需要用到的特殊模块
 * @return
 */
if (typeof(collectMethod) != "undefined") {
    for (var i = 0, l = collectMethod.length; i < l; i++) {
        collectMethod[i]();
    };
};


/**
 * 是否新窗口打开控制台
 * @ 0为当前窗口打开， 1为新开窗口
 */
var Target = Target || {};
Target.data = Target.data || {};
Target.data._default = 0; // 缺省连接设置【以下设置中未涉及到的内容将属于缺省范围】
Target.data.content = 0; // 内容页链接【权重低于外链】
Target.data.search = 1; // 搜索结果页
Target.data.language = 0; // 语种导航设置
Target.data.nav = 0; // 顶部导航栏设置
Target.data.map = 0; // sitemap设置【权重高于内容】
Target.data.link = 1; // 友情链接设置【理论上在外链中包含】
Target.data.about = 1; // 关于中华网
Target.data.pages = 0; // 分页设置【包含列表分页、终极分页、组图上下页、大图上下及缩略图】
Target.data.outer = 1; // 外链设置【权重高于内容】
/**
 * 初始化Target
 * @return
 */
Target.init = function() {
    var d = $("body"),
        as = d.find("a"),
        domain = "china.com",
        that = this;
    // 缺省处理
    this.set(d.find("a"), this.data._default);
    // 内容页链接处理
    if (typeof(this.data.content) === "number" && this.data.content !== this.data._default) {
        this.set(d.find(".item a, .item-phototext a, .item-video a, .figure-news a, .video-tit a, .video-play-item a, .focusTopic a, .page-main li a"), this.data.content);
    };
    // Search处理【不会跟_default比对，直接处理】
    if (typeof(this.data.search) === "number") {
        this.set($("#web-search"), this.data.search);
    };
    // 语种处理
    if (typeof(this.data.language) === "number" && this.data.language !== this.data._default) {
        this.set(d.find(".page-select-language-list a"), this.data.language);
    };
    // 导航栏处理
    if (typeof(this.data.nav) === "number" && this.data.nav !== this.data._default) {
        //this.set($("#page-nav a"), this.data.nav);
        this.set(d.find("#page-nav a").not(".ext"), this.data.nav);
    };
    // sitemap处理【不会跟_default比对，因为class与内容部分重叠，所以必须执行来提高权重】
    if (typeof(this.data.map) === "number") {
        this.set(d.find(".page-map a"), this.data.map);
    };
    // 友情链接处理
    if (typeof(this.data.link) === "number" && this.data.link !== this.data._default) {
        this.set(d.find(".page-link a"), this.data.link);
    };
    // 关于中华网处理
    if (typeof(this.data.about) === "number" && this.data.about !== this.data._default) {
        this.set(d.find(".page-foot-link a"), this.data.about);
    };
    // 分页处理
    if (typeof(this.data.pages) === "number" && this.data.pages !== this.data._default) {
        this.set(d.find(".pages a, #clearPhotoPre, #clearPhotoNext, #clearPhotoMiniList a, #chan_gallery a, #chan_multipageNumN a"), this.data.pages);
    };
    // 外链处理【不会跟_default比对，直接处理，权重最高，所以放在最后处理】
    if (typeof(this.data.outer) === "number") {
        as.each(function() {
            var _domain = $(this).attr("href");

            if (_domain && _domain.indexOf("http:") >= 0) {
                _domain = _domain.replace("http:\/\/", "");
                // _domain = _domain.replace("mms:\/\/", "");
                _domain = _domain.substring(0, _domain.indexOf("\/"));
                _domain = _domain.substring(_domain.length - domain.length);

                if (_domain != domain && _domain.indexOf("mms:") < 0) {
                    that.set($(this), that.data.outer);
                };
            };
        });
    };
};
/**
 * 设置Target
 * @param {type} elems 节点数组
 * @param {[type]} type  [0或1]0为当前，1为新开
 */
Target.set = function(elems, type) {
    if (typeof(elems) != "object" || elems.length < 1) {
        return false
    };
    var type = type || 0;
    elems.each(function() {
        if (type === 0) {
            $(this).removeAttr("target");
        } else if (type === 1) {
            $(this).attr("target", "_blank");
        };
    });
};



require(["jquery"], function() {
    // set target
    Target.init();

    // Reset menu current state
    resetmenu();
    // Search button hover
    $("#page-top .web-search-but").hover(function() {
        $(this).addClass("web-search-but-hover");
    }, function() {
        $(this).removeClass("web-search-but-hover");
    });

    // Language hover
    //20141205wb
    //languageInit();

    // Focus hover
    $("#page-focus").hover(function() {
        $("#page-focus .page-focus-prevnext").show();
    }, function() {
        $("#page-focus .page-focus-prevnext").hide();
    });

    // Latest news
    if (document.getElementById("page-latest")) {
        clickShowMore($("#page-latest .item-phototext, #page-latest .item-onlytext"), "#page-latest-show-more", "#page-latest-click-more", 10, 5, 2);
    };

    // page-latest[common] No photo State
    /*
    $(".page-latest-body .item-phototext").each(function() {
        var _img = $(this).find("img"),
            src = _img.attr("src"),
            domain = "http://english.china.com/";
        if ( window.location.href.indexOf(domain) > -1 ) {
            src = src.replace(domain, "");
        };
        
        if ( _img.length <= 0 || src == "{image_url}" || !src ) {
            $(this).addClass("item-onlytext");
        };
    });
     */

    // Video hover
    // 由于使用了PNG半透明图片，IE8的BUG，不能设置opacity
    /*$("#page-video-right .item").hover(function() {
        $(this).find(".item-text").css("display", "block");
    }, function() {
        $(this).find(".item-text").css("display", "none");
    });*/

    // Down photos hover
    $("#page-photos").hover(function() {
        $("#page-photos .page-focus-prevnext").show();
    }, function() {
        $("#page-photos .page-focus-prevnext").hide();
    });


    // Video init
    if ($(".video-left-mod").length > 0) {
        $(".video-left-mod").each(function(i, v) {
            clickShowMore($(this).find(".item-video"), $(this).find(".video-left-mod-more a").eq(0), $(this).find(".video-left-mod-more a").eq(1), 2, 2, 2);
        });
    };

    // Video article right hot hover
    $(".video-article-right .item").hover(function() {
        $(this).addClass("item-hover");
    }, function() {
        $(this).removeClass("item-hover");
    });

    // page-photo-shade hover
    $(".page-photo-shade .item").hover(function() {
        $(this).addClass("item-hover");
    }, function() {
        $(this).removeClass("item-hover");
    });

    // Photos Show more init
    if ($(".photos-mod").length > 0) {
        $(".photos-mod").each(function(i, v) {
            clickShowMore($(this).find(".item"), $(this).find(".video-left-mod-more a").eq(0), $(this).find(".video-left-mod-more a").eq(1), 4, 4, 2);
        });
    };

    // Audio Show more init
    if ($(".audio-photos-mod").length > 0) {
        $(".audio-photos-mod").each(function(i, v) {
            clickShowMore($(this).find(".item"), $(this).find(".video-left-mod-more a").eq(0), $(this).find(".video-left-mod-more a").eq(1), 9, 3, 2);
        });
    };


    // News focus
    if (document.getElementById("page-news-focus")) {
        require(["tab"], function() {
            var newsFocus = new Tab();
            newsFocus.init({
                handle: $("#page-news-focus .page-news-focus-console a"),
                content: $("#page-news-focus .page-news-focus-body .focusTopic"),
                current: "current",
                mode: "mouseover",
                speed: 4000,
                what: "0",
                delay: 200
            });
        });
    };

    // News index tab
    if (document.getElementById("news-index-tab")) {
        require(["tab"], function() {
            var travelTab = new Tab();
            travelTab.init({
                handle: $("#news-index-tab .list-child-nav span, #news-index-tab .list-child-nav a"),
                content: $("#news-index-tab .page-latest-body"),
                current: "current",
                mode: "mouseover",
                what: "0",
                delay: 200
            });
        });

        if ($("#news-index-tab .page-latest-body").length > 0) {
            $("#news-index-tab .page-latest-body").each(function(i, v) {
                clickShowMore($(this).find(".item-phototext"), $(this).find(".page-latest-more a").eq(0), $(this).find(".page-latest-more a").eq(1), 15, 5, 2);
            });
        };
    };

    // time ago
    timeAgo($(".page-latest-body .hide"));


    // Travel
    travelMoreInit();
    // Travel City show more init
    if (document.getElementById("travel-city-index")) {
        clickShowMore($("#travel-city-index .item-phototext"), $("#travel-city-index .page-latest-more a").eq(0), $("#travel-city-index .page-latest-more a").eq(1), 10, 5, 2);
    };
    // Travel index tab
    if (document.getElementById("travel-index-tab")) {
        require(["tab"], function() {
            var travelTab = new Tab();
            travelTab.init({
                handle: $("#travel-index-tab .list-child-nav span"),
                content: $("#travel-index-tab .page-latest-body"),
                current: "current",
                mode: "mouseover",
                what: "0",
                delay: 200
            });
        });

        if ($("#travel-index-tab .page-latest-body").length > 0) {
            $("#travel-index-tab .page-latest-body").each(function(i, v) {
                clickShowMore($(this).find(".item-phototext"), $(this).find(".page-latest-more a").eq(0), $(this).find(".page-latest-more a").eq(1), 10, 5, 2);
            });
        };
    };
    // Travel index data init
    /*
    if ( document.getElementById("data_105_112_119") ) {
        setIdGroupData("data_105_112_119", function(elem) {
            travelSetDataShowMore(elem);
        });
    };
    if ( document.getElementById("data_107_114_121") ) {
        setIdGroupData("data_107_114_121", function(elem) {
            travelSetDataShowMore(elem);
        });
    };
    if ( document.getElementById("data_109_116_123") ) {
        setIdGroupData("data_109_116_123", function(elem) {
            travelSetDataShowMore(elem);
        });
    };
    if ( document.getElementById("data_230_232_234") ) {
        setIdGroupData("data_230_232_234", function(elem) {
            travelSetDataShowMore(elem);
        });
    };
    function travelSetDataShowMore(elem) {
        var elem = elem.parentNode;
        if ( elem ) {
            clickShowMore($(elem).find(".item-phototext"), $(elem).find(".page-latest-more a").eq(0), $(elem).find(".page-latest-more a").eq(1), 10, 5, 2);
        };
    };*/


    // Life
    // Life tab
    if (document.getElementById("life-index-tab")) {
        require(["tab"], function() {
            var lifeFocus = new Tab();
            lifeFocus.init({
                handle: $("#life-index-tab .list-child-nav a"),
                content: $("#life-index-tab .life-index-tab-body"),
                current: "current",
                mode: "click",
                what: "0"
            });
        });
    };

    // Life show more init
    if (document.getElementById("life-index-tab")) {
        $("#life-index-tab .life-index-tab-body").each(function(i, v) {
            clickShowMore($(this).find(".item-phototext"), $(this).find(".page-latest-more a").eq(0), $(this).find(".page-latest-more a").eq(1), 10, 5, 2);
        });
    };

    // 让列表页归属分类隐藏
    if ($(".pages").length > 0) {
        $(".item-phototext .item-type").each(function() {
            $(this).find("strong").hide();
            $(this).find("em").eq(0).css({
                "padding-left": "0px"
            });
        });
    };

    // china hand data  20150512.wb
    if (document.getElementById('newsJson')) {
        setJson('newsJson');
    };

    // china hand Img  20150521.wb
    chPicShow('chBigPic');

    // china hand data  20150612.wb
    if (document.getElementById('newsListJson')) {
        setJson('newsListJson', 'scroll', 9);
    };

    // china hand message+map 20150728.wb
    /*    if(document.getElementById('chinaHandArticle')){
            $('.ch_article_content_summary').after('<div class="meg-show-btn">More information<i></i></div>');
            $('.ch_article_content>.meg-show-btn').click(function(){
                $(this).toggleClass('msb-curr');
                $(this).siblings('.ch_article_content_message').toggle();
            });
        };*/

});

// Focus init
require(["scroll"], function() {
    if (document.getElementById("page-focus-body")) {
        new Scroll("page-focus-body", {
            "move": "w",
            "prev": "page-focus-prev",
            "next": "page-focus-next",
            "slider": "page-focus-console",
            "mode": "mouseover",
            "rest": 4000,
            // "auto":false,
            "speed": 20,
            "initCallback": function(that) {
                // that.elem.getElementsByTagName("div")[0].style.position = "relative";
            }
        });
    };

    if (document.getElementById("page-photos-body")) {
        new Scroll("page-photos-body", {
            "move": "w",
            "prev": "page-photos-prev",
            "next": "page-photos-next",
            "slider": "page-photos-console",
            "mode": "click",
            // "rest":4000,
            "auto": false,
            "speed": 20,
            "initCallback": function(that) {
                var imgs = that.elem.getElementsByTagName("img"),
                    smallElems = document.getElementById("page-photos-console").getElementsByTagName("a");
                for (var i = 0, l = imgs.length; i < l; i++) {
                    smallElems[i].innerHTML = "<img src='" + imgs[i].src + "' />";
                };
            }
        });
    };
});


// Clear photos init
if (document.getElementById("clearPhotoShow") && document.getElementById("clearPhotoMiniList")) {
    require(["clearPhoto"], function() {
        ClearPhotoShow.ClearPhoto({
            "lastgo": "http://english.china.com/photos-hot.html"
        });
    });
};

/**
 * Language hover
 * @return
 */
//20141205wb
require(["languageNav"], function() {
    new languageNav();
});
/*function languageInit() {
    var selectLan = $("#page-top .page-select-language"),
        showLan = $("#page-top .page-show-language"),
        selectList = $("#page-top .page-select-language-list"),
        lanElem = selectLan[0],
        timer;
    
    lanElem.onmouseover = function() {
        clearTimeout(timer);
        showLan.hide();
        selectList.animate({height: 'show'}, 250);
    };
    lanElem.onmouseout = function() {
        timer = setTimeout(function() {
            showLan.show();
            selectList.hide();
        }, 300);
    };
};*/

/**
 * Travel More hover
 * @return
 */
function travelMoreInit() {
    if (!document.getElementById("travel-child-more-list") || !document.getElementById("travel-child-more")) {
        return false
    };
    var select = $("#travel-child-more"),
        show = $("#travel-child-more-list"),
        elem = select[0],
        timer;

    elem.onmouseover = function() {
        clearTimeout(timer);
        select.addClass("travel-child-more-hover");
        show.animate({
            height: 'show'
        }, 100);
    };
    elem.onmouseout = function() {
        timer = setTimeout(function() {
            clearTimeout(timer);
            show.hide();
            select.removeClass("travel-child-more-hover");
        }, 300);
    };
    show[0].onmouseover = function() {
        clearTimeout(timer);
        select.addClass("travel-child-more-hover");
        show.animate({
            height: 'show'
        }, 100);
    };
    show[0].onmouseout = function() {
        timer = setTimeout(function() {
            clearTimeout(timer);
            show.hide();
            select.removeClass("travel-child-more-hover");
        }, 300);
    };
};



/**
 * Latest news
 * @param  {HTMLElement Array} items     operational element all
 * @param  {HTMLElement} showMore     Show more element
 * @param  {[HTMLElement]} [clickMore]    [Click more element]
 * @param  {Number} base      First load Number
 * @param  {Number} page      Every time load Number
 * @param  {[Number]} max       Click show Number
 * @return
 */
function clickShowMore(items, showMore, clickMore, base, page, max) {
    var showMore = $(showMore),
        clickMore = $(clickMore),
        max = (max || 2) + 1,
        count = 0;
    if (!items || !showMore || !clickMore || !base || !page) {
        return false
    };

    show();

    function show() {
        var c = base + count * page;

        items.each(function(i, v) {
            if (i < c) {
                $(v).show();
            };
        });

        // 条数少于基础值时不显示show more按钮
        if (items.length <= base || items.length < c) {
            showMore.css("display", "none");
            if (clickMore.length > 0) {
                clickMore.css("display", "none")
            };
            return false;
        };

        count++;
        if (count >= max) {
            showMore.css("display", "none");
            if (clickMore.length > 0) {
                clickMore.css("display", "block")
            };
        } else {
            showMore.css("display", "block");
            if (clickMore.length > 0) {
                clickMore.css("display", "none")
            };
        };
    };

    // Event click
    showMore.on("click", function() {
        show();
    });

    // Remove click event
    if (showMore[0]) {
        showMore[0].onclick = function() {
            return false
        };
    };
};

/**
 * Reset menu current state
 * @return
 */
function resetmenu() {
    var url_menus = ["com/news", "com/video", "com/audio", "com/photos", "com/travel", "com/lifestyle", "com/chinese"],
        page_menus = ["News", "Video", "Audio", "Photos", "Travel", "Lifestyle", "Learn Chinese"],
        _lis = document.getElementById("page-nav").getElementsByTagName("a"),
        url = window.location.href,
        current;

    for (var i = 0, l = url_menus.length; i < l; i++) {
        if (url.indexOf(url_menus[i]) >= 0) {
            current = i;
            break;
        };
    };

    for (var i = 0, l = _lis.length; i < l; i++) {
        if (_lis[i].innerHTML == page_menus[current]) {
            _lis[i].parentNode.className = "current";
        };
    };
};


function dateFormat(date, format) {
    var o = {
        "M+": date.getMonth() + 1, //month
        "d+": date.getDate(), //day
        "h+": date.getHours(), //hour
        "m+": date.getMinutes(), //minute
        "s+": date.getSeconds(), //second
        "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
        "S": date.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
        };
    };
    return format;
};
// 18 minutes ago
function timeAgo(items) {
    if (typeof(items) != "object" || items.length <= 0) {
        return false
    };
    items.each(function() {
        var old = $(this).prev(),
            oldTime = new Date(old.html()),
            newTime = new Date($(this).html());
        if (old.html().indexOf("/") >= 0) {
            old.html(cpuAgoTime(oldTime, newTime));
        };
    });
};

function cpuAgoTime(old, now) {
    var re,
        second = parseInt((now.getTime() - old.getTime()) / 1000),
        d, h, m;
    if (second < 0) {
        return "";
    };
    if (second >= 60 * 60 * 24) {
        d = parseInt(second / (60 * 60 * 24));
        // re = d == 1 ? d + " day ago" : d + " days ago";
        re = d == 1 ? d + " day ago" : dateFormat(old, "yyyy-MM-dd hh:mm");
    };
    if (second >= 60 * 60 && second < 60 * 60 * 24) {
        h = parseInt(second / (60 * 60));
        re = h == 1 ? h + " hour ago" : h + " hours ago";
    };
    if (second >= 60 && second < 60 * 60) {
        m = parseInt(second / 60);
        re = m == 1 ? m + " minute ago" : m + " minutes ago";
    };
    return re;
};



/**
 * 右侧Fixed效果
 * @return
 */
require(["jquery", "fixed"], function() {
    // 仅在一个右侧排版时启用
    if ($(".page-right").length <= 0 || $(".page-right").length > 1) {
        if (typeof(rightModInit) == "function") {
            rightModInit()
        };
        return false;
    };
    // 左右高度差异较小时不启用效果
    if ($(".page-left").height() - $(".page-right").height() < 50) {
        if (typeof(rightModInit) == "function") {
            rightModInit()
        };
        return false;
    };
    var elem = $(".page-right")[0],
        _width = $(elem).width(),
        _bottom = 0,
        _div;

    /*_div.innerHTML = elem.innerHTML;
    elem.innerHTML = "";
    elem.appendChild(_div);
    elem.style.textAlign = "left";*/ // 修正IE7位置偏移

    if ($(".page-right-fixed").length > 0) {
        _div = $(".page-right-fixed")[0];
    } else {
        _div = document.createElement("div");
        _div.innerHTML = elem.innerHTML;
        elem.innerHTML = "";
        elem.appendChild(_div);
        elem.style.textAlign = "left";
    }

    if ($(".page-link").length > 0) {
        _bottom += $(".page-link")[0].scrollHeight;
    };
    _bottom += $(".page-map")[0].scrollHeight + $(".page-footer")[0].scrollHeight + parseInt($(".page-main").css("padding-bottom"));

    if ($(window).height() > $(".page-right div").eq(0).height()) {
        $(_div).attr({
            "fixed-win-top-start": "0",
            "fixed-bottom-stop": _bottom
        });
    } else {
        $(_div).attr({
            "fixed-win-bottom-start": "0",
            "fixed-bottom-stop": _bottom
        });
    };

    $(_div).css({
        "width": _width + "px"
    });
    new FixedModule(_div);

    if (typeof(rightModInit) == "function") {
        rightModInit()
    };
});



/**
 * 顶部Fixed效果
 * @return
 */
require(["jquery", "fixed"], function() {
    if ($(".page-head").length <= 0 || $(".page-head").length > 1) {
        return false
    };

    var fixedElem = document.createElement("div"),
        elem = $(fixedElem),
        copyTop,
        closeTopElem = document.createElement("span"),
        topHTML = $(".page-head")[0].innerHTML;

    // 原始顶端放大镜
    $("#page-nav .page-openSearch a")[0].onclick = function() {
        $("#web-search .web-search-keyword").focus();
        return false;
    };

    if (document.getElementById("chan_newsDetail")) {
        return false
    };

    // 替换ID【IE低版本会不输出引号】
    topHTML = topHTML.replace('id="page-top"', 'id="page-top-copy"').replace('id="page-nav"', 'id="page-nav-copy"').replace('id="web-search"', 'id="web-search-copy"').replace('id=page-top', 'id=page-top-copy').replace('id=page-nav', 'id=page-nav-copy').replace('id=web-search', 'id=web-search-copy');

    fixedElem.innerHTML = topHTML;

    fixedElem.id = "fixedHead";
    $("body")[0].appendChild(fixedElem);

    copyTop = $("#page-top-copy");
    copyTop.find(".page-select-language").remove();
    // copyTop.find(".page-top-time").css("visibility", "hidden");
    copyTop.find(".page-top-right").css("padding-right", "30px");
    copyTop.css({
        "overflow": "hidden"
    });
    copyTop.hide();
    $(copyTop).parent().css({
        "height": "auto"
    });

    topSearchCheck("web-search-copy");

    // 添加fixed中的关闭顶部按钮
    copyTop.find(".page-top")[0].appendChild(closeTopElem);
    $(closeTopElem).css({
        "position": "absolute",
        "right": "0",
        "top": "5px",
        "cursor": "pointer",
        "width": "17px",
        "height": "17px",
        "background": "url('http://english.china.com/img/headClose.png') no-repeat"
    });
    closeTopElem.onclick = function() {
        closeTop();
    };

    // fixed中的放大镜
    elem.find(".page-openSearch a")[0].onclick = function() {
        openTop();
        return false;
    };

    elem.css({
        "text-align": "left",
        "width": "100%",
        "position": "absolute",
        "top": $(".page-head .page-top-bg").height() + "px",
        "z-index": "999",
        "visibility": "hidden"
    });
    elem.attr({
        "fixed-win-top-start": "0"
    });

    new FixedModule(fixedElem, {
        "startScrollCallback": function() {
            elem.css({
                "visibility": "visible"
            });
            elem.find(".small-logo").animate({
                width: 'show'
            }, 200);
        },
        "restorationCallback": function() {
            elem.css({
                "visibility": "hidden"
            });
            elem.find(".small-logo").animate({
                width: 'hide'
            }, 200);
        },
        "callback": function() {
            if (copyTop.css("display") == "block") {
                closeTop();
            };
        }
    });

    function openTop() {
        $("#page-top-copy").css({
            display: 'block'
        });
        // $("#page-top-copy").animate({height:'show'}, 200);
        $("#page-nav-copy .small-logo").animate({
            width: 'hide'
        }, 200);
        $("#page-top-copy .web-search-keyword").focus();
    };

    function closeTop() {
        $("#page-top-copy").css({
            display: 'none'
        });
        // $("#page-top-copy").animate({height:'0px'}, 200);
        $("#page-nav-copy .small-logo").animate({
            width: 'show'
        }, 200);
        $("#page-top-copy .web-search-keyword").focus();
    };
});


/**
 * 右侧效果初始化【可使用JQ】
 * @return
 */
function rightModInit() {
    /**
     * 执行排行榜模块【由于右侧改变DOM，所以该操作必须放在右侧执行完后的回调再执行】
     * @return
     */
    if (typeof(collectMethod_rank) != "undefined") {
        for (var i = 0, l = collectMethod_rank.length; i < l; i++) {
            collectMethod_rank[i]();
        };
    };

    // Video hover
    $(".item-video").hover(function() {
        $(this).addClass("item-video-hover");
    }, function() {
        $(this).removeClass("item-video-hover");
    });

    // 初始化英语广播
    if (document.getElementById("title") && document.getElementById("nexttitle")) {
        require(["radio"], function() {});
    };

};

/**
 * 初始化多个分类组合的数据
 * @param {String} id CMS输出的存储数据URL的隐藏节点
 * @param {[Function]} callback [设置完成数据后的回调] 接受一个参数，为插入内容的节点
 */
function setIdGroupData(id, callback) {
    if (!document.getElementById(id)) {
        return false
    };
    var _in = document.getElementById(id),
        data_url = _in.value,
        elem = _in.parentNode,
        data,
        _html;

    require([data_url], function() {
        data = window[id];
        _html = "";
        for (var i = 0, l = data.length; i < l; i++) {
            if (!data[i].back_pic || data[i].back_pic == "") {
                _html += '<div class="item-phototext item-onlytext">';
            } else {
                _html += '<div class="item-phototext">';
                _html += '<div class="item-photo"><a href="' + data[i].location + '"><img src="' + data[i].back_pic + '"></a></div>';
            };
            _html += '<div class="item-text">';
            _html += '<div class="item-type">';
            if (data[i].smalltitle && data[i].smalltitle.length > 0) {
                _html += '<span class="item-link">';
                for (var j = 0, le = data[i].smalltitle.length; j < le; j++) {
                    _html += '<a href="' + data[i].smalltitle[j].url + '">' + data[i].smalltitle[j].title + '</a>';
                };
                _html += '</span>';
            };
            if (data[i].crumbshow && data[i].crumbshow != "undefined") {
                _html += '<strong><a href="' + data[i].crumburl + '">' + data[i].crumbshow + '</a></strong>';
            };
            _html += '</div>';
            _html += '<h3 class="item-tit"><a href="' + data[i].location + '">' + data[i].title + '</a></h3>';
            _html += '<p class="item-infor">' + data[i].summary + '</p>';
            _html += '</div>';
            _html += '</div>';
        };
        elem.innerHTML = _html;

        if (callback) {
            callback(elem)
        };
    });
};


/**
 * 普通文章中图片处理【包含正常图片和组图模式处理】
 * @param  {[Number]} commonWidth [宽度设置，如果无此参数，宽度默认680]
 * @param  {[Number]} galleryWidth [宽度设置，如果无此参数，宽度默认600]
 * @return
 */
function articlePhotosInit(commonWidth, galleryWidth) {
    var commonWidth = commonWidth || 680,
        galleryWidth = galleryWidth || 600,
        photos,
        page_cur = document.getElementById("article-page-current"),
        page_all = document.getElementById("article-page-all"),
        _prev = document.getElementById("chan_gal_prev"),
        _next = document.getElementById("chan_gal_next"),
        gallery = document.getElementById("currentImg");

    if (!document.getElementById("chan_newsDetail")) {
        return false
    };
    photos = document.getElementById("chan_newsDetail").getElementsByTagName("img");

    // Reset Photos size
    for (var i = 0, l = photos.length; i < l; i++) {

        if (photos[i].width > galleryWidth && document.getElementById("chan_gallery")) {
            photos[i].style.width = galleryWidth + "px";
            photos[i].style.height = "auto";
        } else if (photos[i].width > commonWidth) {
            photos[i].style.width = commonWidth + "px";
            photos[i].style.height = "auto";
        };
    };

    // 处理箭头
    if (page_cur && page_all && _prev && _next) {
        if (page_cur.value - 1 <= 0) {
            _prev.className = "chan_gal_fst";
        } else {
            _prev.className = "chan_gal_prev";
        };

        if (page_cur.value >= page_all.value) {
            _next.className = "chan_gal_lst";
        } else {
            _next.className = "chan_gal_next";
        };

        // 设置箭头定位
        if (gallery) {
            _prev.style.top = (gallery.scrollHeight - _prev.scrollHeight) / 2 + "px";
            _next.style.top = (gallery.scrollHeight - _prev.scrollHeight) / 2 + "px";
        };
    };
};
articlePhotosInit(680, 600);

/**
 * 设置页面中的排行
 * @param {String||HTMLElement} elem   ID或者节点
 * @param {Number} count  显示数量
 * @param {String} url 数据URL
 * @param {[String]} layout [布局，默认为list，包含以下模式：photo, photo2, photo3, video, list]
 * @param {Function} callback 回调函数
 */
function setRank(elem, count, url, layout, callback) {
    var layout = layout || "list",
        elem = typeof(elem) == "object" ? elem : document.getElementById(elem),
        _tar = "",
        listHTML = "",
        photo2HTML = "",
        photo3HTML = "",
        photoHTML = "",
        videoHTML = "",
        domain = "china.com",
        _domain;

    // 结合全局Target配置来进行排行榜Target设置
    if (Target && Target.data && typeof(Target.data.content) === "number") {
        if (typeof(Target) == "object" && Target.data.content === 1) {
            _tar = 'target="_blank"';
        };
    };

    if (typeof(rank) == "object") { // 为加载数据前就存在这个变量则移除
        window["rank"] = "";
    };
    require([url], function() {
        if (typeof(rank) != "object" || rank.length < 1) {
            if (callback) {
                callback()
            };
            return false;
        };

        for (var i = 0, l = rank.length; i < l; i++) {
            if (i >= count) {
                break;
            };

            // 外链是否在新窗口打开
            _domain = rank[i].location;
            if (_domain && _domain.indexOf("http:") >= 0) {
                _domain = _domain.replace("http:\/\/", "");
                _domain = _domain.substring(0, _domain.indexOf("\/"));
                _domain = _domain.substring(_domain.length - domain.length);

                if (typeof(Target) == "object" && _domain != domain && _domain.indexOf("mms:") < 0 && Target.data.outer === 1) {
                    _tar = 'target="_blank"';
                };
            };

            listHTML += '<li><em>' + (i + 1) + '</em><a href="' + rank[i].location + '"' + _tar + '>' + rank[i].title + '</a></li>';
            photoHTML += '<div class="item"><div class="item-photo"><a href="' + rank[i].location + '"' + _tar + '><img src="' + rank[i].oldpic + '" alt="' + rank[i].title + '" /></a></div><div class="item-shade"></div><a href="' + rank[i].location + '" class="item-con"' + _tar + '><div class="item-tit">' + rank[i].title + '</div><div class="item-txt">' + rank[i].summary + '</div></a></div>';
            photo2HTML += '<div class="focusTopic"><div class="focusTopic_pic"><a href="' + rank[i].location + '"' + _tar + '><img src="' + rank[i].oldpic + '" alt="' + rank[i].title + '" /></a></div><div class="focusTopic_cont"><div class="focusTopic_tit"><a href="' + rank[i].location + '"' + _tar + '>' + rank[i].title + '</a></div><div class="focusTopic_txt"></div></div></div>';
            photo3HTML += '<div class="item"><div class="item-photo"><a href="' + rank[i].location + '"' + _tar + '><img src="' + rank[i].oldpic + '" alt="' + rank[i].title + '" /></a></div><div class="item-text"><h3 class="item-tit"><a href="' + rank[i].location + '"' + _tar + '>' + rank[i].title + '</a></h3></div></div>';
            videoHTML += '<div class="item"><div class="item-photo"><a href="' + rank[i].location + '"' + _tar + '><img src="' + rank[i].oldpic + '" /></a><a href="' + rank[i].location + '" class="play"' + _tar + '></a></div><div class="item-text"><h3 class="item-tit"><a href="' + rank[i].location + '"' + _tar + '>' + rank[i].title + '</a></h3><span class="item-time"></span></div></div>';
        };
        switch (layout) {
            case "list":
                setHTML(listHTML);
                break;
            case "photo":
                setHTML(photoHTML);
                break;
            case "photo2":
                setHTML(photo2HTML);
                break;
            case "photo3":
                setHTML(photo3HTML);
                break;
            case "video":
                setHTML(videoHTML);
                break;
            default:
                setHTML(listHTML);
        };

        function setHTML(str) {
            elem.innerHTML = str;
            if (callback) {
                callback()
            };
        };

    });

};


/**
 * 设置页面中的排行
 * 2015版，因排行数据结构有变化
 * @param {String||HTMLElement} elem   ID或者节点
 * @param {Number} count  显示数量
 * @param {String} rankname  显示排行数据变量名
 * @param {String} cmsNodeId  显示cms分类的ID
 * @param {String} url 数据URL
 * @param {[String]} layout [布局，默认为list，包含以下模式：photo, photo2, photo3, video, list]
 * @param {Function} callback 回调函数
 */
function setRank2015(elem, count, rankname, cmsNodeId, url, layout, callback) {
    var layout = layout || "list",
        elem = typeof(elem) == "object" ? elem : document.getElementById(elem),
        _tar = "",
        listHTML = "",
        photo2HTML = "",
        photo3HTML = "",
        photoHTML = "",
        videoHTML = "",
        domain = "china.com",
        _domain;

    // 结合全局Target配置来进行排行榜Target设置
    if (Target && Target.data && typeof(Target.data.content) === "number") {
        if (typeof(Target) == "object" && Target.data.content === 1) {
            _tar = 'target="_blank"';
        };
    };

    if (typeof(rankname) == "object") { // 为加载数据前就存在这个变量则移除
        window["rankname"] = "";
    };
    require([url], function() {

        rankname = eval(rankname + '["' + cmsNodeId + '"].list');

        if (typeof(rankname) != "object" || rankname.length < 1) {
            if (callback) {
                callback()
            };
            return false;
        };

        for (var i = 0, l = rankname.length; i < l; i++) {
            if (i >= count) {
                break;
            };

            // 外链是否在新窗口打开
            _domain = rankname[i].url;
            if (_domain && _domain.indexOf("http:") >= 0) {
                _domain = _domain.replace("http:\/\/", "");
                _domain = _domain.substring(0, _domain.indexOf("\/"));
                _domain = _domain.substring(_domain.length - domain.length);

                if (typeof(Target) == "object" && _domain != domain && _domain.indexOf("mms:") < 0 && Target.data.outer === 1) {
                    _tar = 'target="_blank"';
                };
            };

            listHTML += '<li><em>' + (i + 1) + '</em><a href="' + rankname[i].url + '"' + _tar + '>' + rankname[i].title + '</a></li>';
            photoHTML += '<div class="item"><div class="item-photo"><a href="' + rankname[i].url + '"' + _tar + '><img src="' + rankname[i].imgurl + '" alt="' + rankname[i].title + '" /></a></div><div class="item-shade"></div><a href="' + rankname[i].url + '" class="item-con"' + _tar + '><div class="item-tit">' + rankname[i].title + '</div><div class="item-txt">' + rankname[i].summary + '</div></a></div>';
            photo2HTML += '<div class="focusTopic"><div class="focusTopic_pic"><a href="' + rankname[i].url + '"' + _tar + '><img src="' + rankname[i].imgurl + '" alt="' + rankname[i].title + '" /></a></div><div class="focusTopic_cont"><div class="focusTopic_tit"><a href="' + rankname[i].url + '"' + _tar + '>' + rankname[i].title + '</a></div><div class="focusTopic_txt"></div></div></div>';
            photo3HTML += '<div class="item"><div class="item-photo"><a href="' + rankname[i].url + '"' + _tar + '><img src="' + rankname[i].imgurl + '" alt="' + rankname[i].title + '" /></a></div><div class="item-text"><h3 class="item-tit"><a href="' + rankname[i].url + '"' + _tar + '>' + rankname[i].title + '</a></h3></div></div>';
            videoHTML += '<div class="item"><div class="item-photo"><a href="' + rankname[i].url + '"' + _tar + '><img src="' + rankname[i].imgurl + '" /></a><a href="' + rankname[i].url + '" class="play"' + _tar + '></a></div><div class="item-text"><h3 class="item-tit"><a href="' + rankname[i].url + '"' + _tar + '>' + rankname[i].title + '</a></h3><span class="item-time"></span></div></div>';
        };
        switch (layout) {
            case "list":
                setHTML(listHTML);
                break;
            case "photo":
                setHTML(photoHTML);
                break;
            case "photo2":
                setHTML(photo2HTML);
                break;
            case "photo3":
                setHTML(photo3HTML);
                break;
            case "video":
                setHTML(videoHTML);
                break;
            default:
                setHTML(listHTML);
        };

        function setHTML(str) {
            elem.innerHTML = str;
            if (callback) {
                callback()
            };
        };

    });

};


/**
 * 实现搜索
 * @param  {String||HTMLElement} id Form表单的ID或者form本身
 * @return {[type]}    [description]
 */
function topSearchCheck(id) {
    var elem = typeof(id) == "object" ? id : document.getElementById(id);

    if (!elem) {
        return false
    };

    elem.onsubmit = function() {
        if (!elem.q.value) {
            alert("No keyword!");
            elem.q.focus();
            return false;
        };
    };
};
topSearchCheck("web-search");

/**
 * 实现中国通关键字列表数据调用
 * @param  {String||HTMLElement} 数据插入位置
 * @param  {Number} 每页显示数量
 * @return
 */
function setJson(id, loadMethod, listNumber) {
    var listId = typeof(id) == "object" ? id : $('#' + id),
        loadingImg = $('<div class="loadingimg" id="loadImg">loadinig...</div>'),
        //htmlUrl = 'http://english.china.com/test/test.do?cid=56&kw=shanghai' || '',
        htmlUrl = window.location.search.substr(1) || '',
        loadMethod = loadMethod || 'click',
        listNumber = listNumber || 9,
        count = 0,
        category = {
            cid: getUrlParam(htmlUrl, 'cid'),
            keyword: getUrlParam(htmlUrl, 'kw')
        };

    init();

    function getUrlParam(href, name) {
        var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)");
        var args = href.match(reg);
        //var args = window.location.search.substr(1).match(reg);
        if (args != null) return unescape(args[2]);
        return null;
    };
    //*** Choose Category And Running Function ***//
    function init() {
        listId.html('');
        if (category.cid) {
            requestData(category.cid, category.keyword);
        } else {
            requestData('9428', '');
        }

        if (loadMethod == 'click') {
            regulatePages('pageStyle');
        } else {
            toBottomLoad();
        }
    };
    //*** Request Data ***//
    function requestData(c, k, p) {
        var p = p || 0,
            c = c || '',
            k = k || '',
            newsUrl = newsData(c, k, p);
        loadingImg.appendTo(listId);
        $.getJSON(newsUrl, mainJson);
    };
    //*** Piece Data Url ***//
    function newsData(c, k, p, f) {
        var f = f || '?',
            p = p || 0,
            u = '';
        u = 'http://rollnews.china.com/interface/crirollnews.php?callback=';
        u += f;
        u += '&method=getNews&groupname=english&page=';
        u += p;
        u += '&limit='
        u += listNumber;
        u += '&categoryids=';
        u += c;
        u += '&keyword=';
        u += k;
        return u;
    };
    //*** Insert Htmlcode Into The Scenes ***//
    function scenesFun(scenes, insert) {
        var scenes = typeof(scenes) == "object" ? scenes : $('#' + scenes);
        scenes.append(insert);
    };
    //*** JsonData Html ***//
    function mainJson(data, status) {
        count = data.count;
        loadingImg.remove();
        $.each(data.info, function(i, info) {
            var _html = '',
                _href = info.url,
                _src = info.review,
                _srcImgArea = [],
                _title = info.title,
                _moretitle = info.moretitle,
                _div = document.createElement('div');
            /*            if(!_src || _src == ''){
                            return true;
                        }*/

            /* 20150515.wb */
            _srcImgArea = _src.split('.');
            _srcImgArea[_srcImgArea.length - 2] = _srcImgArea[_srcImgArea.length - 2] + '_300x250';
            _src = _srcImgArea.join('.');
            /* 20150515.wb */

            _div.className = 'item';
            _html += '<div class="item-photo"><a href="' + _href + '"><img src="' + _src + '" alt="' + _title + '"></a></div>';
            _html += '<div class="item-text"><a href="' + _href + '">' + _title + '</a></div>';
            _html += '<div class="item-type">' + _moretitle + '</div>';
            _div.innerHTML = _html;
            scenesFun(listId, _div);
        });

    };
    //*** Control Pages ***//
    function regulatePages(id) {
        var oId = typeof(id) == "object" ? id : $('#' + id),
            oldNum = 0;
        oId.click(function() {
            if (oldNum == Math.ceil(count / listNumber) - 2) {
                oId.hide();
            }
            //console.log(oldNum + ',' + count);
            oldNum++;
            requestData(category.cid, category.keyword, oldNum);
        });
    };

    function toBottomLoad() {
        var _count = 0;
        $('#pageStyle').hide();
        $(window).scroll(function() {
            if ($(document).scrollTop() + $(window).height() >= $(document).height()) {
                if (_count == Math.ceil(count / listNumber) - 1) {
                    return false;
                } else {
                    _count++;
                    requestData('9428', '', _count);
                }
            }
        });
    };
};

/*中国通列表滚图*/
function chPicShow(id) {
    if (!document.getElementById(id)) return false;
    var scene = $('#' + id),
        moveDiv = $('#chBigPicShow'),
        imgelem = moveDiv.find('a'),
        _n = imgelem.length,
        _w = $(window).width() > 1000 ? $(window).width() : 1000,
        _numb = 0,
        iTimer = null;
    scene.width(_w);
    imgelem.width(_w);
    moveDiv.width(_w * _n);
    autoPlay();
    moveDiv.mouseover(function() {
        clearInterval(iTimer);
    });
    moveDiv.mouseout(function() {
        iTimer = setInterval(autoPlay, 8000);
    });
    $('#chBtnLeft').click(function() {
        _numb++;
        picMove(moveDiv);
    });
    $('#chBtnRight').click(function() {
        _numb--;
        picMove(moveDiv);
    });

    function picMove(id) {
        if (_numb > 0) {
            _numb = -1 * (_n - 1);
        } else if (_numb < -1 * (_n - 1)) {
            _numb = 0;
        }
        id.animate({
            left: _w * _numb
        }, 400);
    };

    function autoPlay() {
        clearInterval(iTimer);
        picMove(moveDiv);
        _numb--;
        iTimer = setInterval(autoPlay, 8000);
    };
}