// JavaScript Document
function showdiv() {
    var bg = document.getElementById("bg");
    var d = document.getElementById("hiddiv");
    if (d.style.display == 'none') {
        d.style.display = '';
        bg.style.background = 'url(/easyfm/images/listen_09.jpg)'
    } else if (d.style.display == '') {
        d.style.display = 'none';
        bg.style.background = '';
    }
}

function program(name, dj, code, djphoto, timestr, day, timestart, timend, intro) {
    this.name = name;
    this.dj = dj;
    this.code = code;
    this.djphoto = djphoto;
    this.timestr = timestr;
    this.day = day.toString();
    this.timestart = timestart;
    this.timend = timend;
    this.intro = intro;
}

var programs = new Array();
var nowplaying = -1;
var nextplaying = -1;

/*
添加节目
programs.push(new program("节目名称", "主持人", "短信代码", "主持人照片地址", "播出时间的星期（汉字）", "星期", "开始时间", "结束时间"));

前五项是用于页面显示的，后三项时播出时间
星期：周一至周六用1-6表现，周日是0，把对应的数量连起来写就行，但如果周日不是单独的，需要最后写周日。比如周一至五写为"12345"
时间：小时2位分2位。比如10点半写为"1030"
*/
programs.push(new program("Today", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "0000", "0200"));

programs.push(new program("Studio+", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "0200", "0400"));

programs.push(new program("On the Record", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "0400", "0430"));

programs.push(new program("Life Upclose", " ", " ", "/cribb/images/play_01.jpg", "Mon", "1", "0430", "0500"));
programs.push(new program("Postcards", " ", " ", "/cribb/images/play_01.jpg", "Tue", "2", "0430", "0500"));
programs.push(new program("Heartbeat", " ", " ", "/cribb/images/play_01.jpg", "Wed", "3", "0430", "0500"));
programs.push(new program("Music+", " ", " ", "/cribb/images/play_01.jpg", "Tue", "4", "0430", "0500"));
programs.push(new program("Horizons", " ", " ", "/cribb/images/play_01.jpg", "Fri", "5", "0430", "0500"));
programs.push(new program("Sounds of the Week", " ", " ", "/cribb/images/play_01.jpg", "Sat", "6", "0430", "0500"));
programs.push(new program("Biz Buzz", " ", " ", "/cribb/images/play_01.jpg", "Sun", "0", "0430", "0500"));

programs.push(new program("Chinese Theatre", " ", " ", "/cribb/images/play_01.jpg", "Mon - Fri", "12345", "0500", "0530"));
programs.push(new program("Alight on Literature", " ", " ", "/cribb/images/play_01.jpg", "Sat - Sun", "60", "0500", "0530"));

programs.push(new program("NP Select", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "0530", "0600"));

programs.push(new program("On the Record", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "0600", "0630"));

programs.push(new program("Special English", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "0630", "0700"));

programs.push(new program("The Beijing Hour(live)", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "0700", "0800"));

programs.push(new program("Roundtable", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "0800", "0900"));

programs.push(new program("The Beijing Hour", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "0900", "1000"));

programs.push(new program("Today(live)", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "1000", "1200"));

programs.push(new program("NP Select ", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "1200", "1230"));

programs.push(new program("Special English", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "1230", "1300"));

programs.push(new program("Spotlight", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "1300", "1330"));

programs.push(new program("Chinese Theatre", " ", " ", "/cribb/images/play_01.jpg", "Mon - Fri", "12345", "1330", "1400"));
programs.push(new program("Alight on Literature", " ", " ", "/cribb/images/play_01.jpg", "Sat - Sun", "60", "1330", "1400"));

programs.push(new program("Studio+(live)", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "1400", "1600"));

programs.push(new program("Today", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "1600", "1800"));

programs.push(new program("Roundtable", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "1800", "1900"));

programs.push(new program("The Beijing Hour(live)", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "1900", "2000"));

programs.push(new program("Studio+", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "2000", "2200"));

programs.push(new program("Speical English ", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "2200", "2230"));

programs.push(new program("Life Upclose", " ", " ", "/cribb/images/play_01.jpg", "Mon", "1", "2230", "2300"));
programs.push(new program("Postcards", " ", " ", "/cribb/images/play_01.jpg", "Tue", "2", "2230", "2300"));
programs.push(new program("Heartbeat", " ", " ", "/cribb/images/play_01.jpg", "Wed", "3", "2230", "2300"));
programs.push(new program("Music+", " ", " ", "/cribb/images/play_01.jpg", "Tue", "4", "2230", "2300"));
programs.push(new program("Horizons", " ", " ", "/cribb/images/play_01.jpg", "Fri", "5", "2230", "2300"));
programs.push(new program("Sounds of the Week", " ", " ", "/cribb/images/play_01.jpg", "Sat", "6", "2230", "2300"));
programs.push(new program("Biz Buzz", " ", " ", "/cribb/images/play_01.jpg", "Sun", "0", "2230", "2300"));

programs.push(new program("Exploring Music", " ", " ", "/cribb/images/play_01.jpg", "Mon - Sun", "1234560", "2300", "2400"));

function showprogram() {
    var st = new Date();
    var wd = (st.getUTCDay() + (st.getUTCHours() >= 16 ? 1 : 0)) % 7;
    var nt = ((st.getUTCHours() + 8) % 24) * 100 + st.getUTCMinutes();
    var pg;
    for (var i = 0; i < programs.length; i++) {
        pg = programs[i];
        if ((pg.day.indexOf(wd) > -1) && (nt >= pg.timestart) && (nt < pg.timend) && (i != nowplaying)) {
            setValue("title", pg.name);
            //setValue("dj", pg.dj);
            //setValue("intro", pg.intro);
            //var it=document.getElementById("photo");
            //if (it) it.src=pg.djphoto;
            setValue("playtime", pg.timestart.slice(0, 2) + ":" + pg.timestart.slice(2, 4) + " - " + pg.timend.slice(0, 2) + ":" + pg.timend.slice(2, 4) + " " + pg.timestr + "<br>");
            nowplaying = i;
            //alert(nowplaying.timend);
            nextlist(programs[nowplaying].timend);
            break;
        }
    }
    setTimeout(showprogram, 300000);
}

function nextlist(next) {
    var st = new Date();
    var wd = (st.getUTCDay() + (st.getUTCHours() >= 16 ? 1 : 0)) % 7;
    var nt = ((st.getUTCHours() + 8) % 24) * 100 + st.getUTCMinutes();
    var pg;

    for (var i = 0; i < programs.length; i++) {
        pg = programs[i];
        if ((pg.day.indexOf(wd) > -1) && (next >= pg.timestart) && (next < pg.timend)) {
            setValue("nexttitle", pg.name);
            //setValue("nextdj", pg.dj);
            //setValue("nextcode", pg.code);

            setValue("nexttime", pg.timestart.slice(0, 2) + ":" + pg.timestart.slice(2, 4) + " - " + pg.timend.slice(0, 2) + ":" + pg.timend.slice(2, 4) + " " + pg.timestr + "<br>");
            break;
        }
    }

}

function setValue(s1, s2) {
    var it = document.getElementById(s1);
    if (it) it.innerHTML = s2;
}

showprogram();