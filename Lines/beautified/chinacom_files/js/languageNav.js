/**
 * Language hover
 * @return
 */
function languageNav() {
    if (!document.getElementById("page-select-language")) {
        return false;
    };
    var langTxt = ["Language", "Français", "язык", "Idiomas", "Bahasa Melayu", "Lựa chọn ngôn ngữ", "ພາສາລາ​ວ", "ភាសា​ខ្មែរ", "ภาษา", "Bahasa", "Pumili ng wika", "ျမန္မာဘာသာ", "言語", "언어", "Монгол", "नेपाली भाषा", "भाषा", "বাংলা", "Dil Seçin", "فارسی", "اللغة العربية"],
        langDomain = ["english", "french", "russian", "espanol", "malay", "vietnamese", "laos", "cambodian", "thai", "indonesian", "filipino", "myanmar", "japanese", "korean", "mongol", "nepal", "hindi", "bengali", "turkish", "persian", "arabic"],

        selectLan = $("#page-top .page-select-language"),
        showLan = $("#page-top .page-show-language"),
        selectList = $("#page-top .page-select-language-list"),
        selectTit = $("#page-top .page-select-language-tit"),
        lanElem = selectLan[0],
        _domain = document.domain.split('.')[0],
        _e = $.inArray(_domain, langDomain),
        _i,
        timer;

    if (_e != -1) {
        _i = _e;
    };

    showLan.html(langTxt[_i]);
    selectTit.find('i').html(langTxt[_i]);

    lanElem.onmouseover = function() {
        clearTimeout(timer);
        showLan.hide();
        selectTit.show();
        selectList.animate({
            height: 'show'
        }, 250);
    };
    lanElem.onmouseout = function() {
        timer = setTimeout(function() {
            showLan.show();
            selectTit.hide();
            selectList.hide();
        }, 300);
    };

};