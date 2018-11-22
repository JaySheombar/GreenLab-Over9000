/*
  Auther:f7
  Date:2012.05
  Editor:2013.04.25
  Versions:2.3.2
*/
function Scroll(elem, o) {
    if (!(this instanceof Scroll)) {
        return new Scroll(elem, o);
    };
    if (!this.g(elem)) {
        return false
    };
    this.o = o || {};
    this.elem = this.g(elem);
    this.prevElement = this.o.prev ? this.g(this.o.prev) : "";
    this.nextElement = this.o.next ? this.g(this.o.next) : "";
    this.move = this.o.move || "w";
    this.speed = this.o.speed || 30;
    this.o.auto === undefined ? this.o.auto = true : this.o.auto;
    this.o.animation === undefined ? this.o.animation = true : this.o.animation;
    this.o.loop === undefined ? this.o.loop = false : this.o.loop;
    this.o.mode === undefined ? this.o.mode = "click" : this.o.auto;
    this.modWidth = 0;
    this.isStop = 0;
    this.timer = "";
    this.axes = this.o.move && (this.o.move == "n" || this.o.move == "N" || this.o.move == "s" || this.o.move == "S") ? "scrollTop" : "scrollLeft";
    this.isES = this.o.auto !== false && (this.o.move == "e" || this.o.move == "E" || this.o.move == "s" || this.o.move == "S"), this.o.slider !== undefined ? this.o.range = this.axes == "scrollLeft" ? this.elem.clientWidth : this.elem.clientHeight : this.o.range;
    this.init();
};
Scroll.prototype.init = function() {
    var that = this,
        mytime = "",
        scroll = this.axes,
        index = parseInt(this.o.index || 0);
    if (!this.initHTML()) {
        return false
    };
    this.elem.onmouseover = function() {
        clearTimeout(mytime);
        that.stop();
    };
    this.elem.onmouseout = function() {
        mytime = setTimeout(function() {
            that.start()
        }, 100);
    };
    this.prev();
    this.next();
    this.resetPrevNext();
    this.slider();
    (this.o.auto === true || this.o.loop === true) && this.o.slider === undefined ? this.elem[scroll] = this.modWidth > 0 ? this.modWidth + index : this.elem.scrollHeight / 2 + index : this.elem[scroll] = index;
    if (this.o.initCallback) {
        this.o.initCallback(that)
    };
    setTimeout(function() {
        that.action();
    }, this.o.rest || this.speed || 1000);
    if (window.addEventListener) {
        window.addEventListener("focus", function() {
            that.start()
        }, false);
        window.addEventListener("blur", function() {
            that.stop()
        }, false);
    };
};
Scroll.prototype.initHTML = function() {
    var contentHTML = this.elem.innerHTML,
        allWidthElem, innerWidthElem;
    if (this.axes == "scrollTop") {
        if (this.elem.scrollHeight <= parseInt(this.getStyle(this.elem, "height"))) {
            return false;
        };
        if ((this.o.auto === true || this.o.loop === true) && !this.o.slider) {
            this.elem.innerHTML += this.elem.innerHTML;
        };
    } else {
        this.elem.style.textAlign = "left";
        allWidthElem = document.createElement("div");
        innerWidthElem = document.createElement("div");
        allWidthElem.style.position = "absolute";
        allWidthElem.style.width = "99999px";
        (document.all) ? innerWidthElem.style.styleFloat = "left": innerWidthElem.style.cssFloat = "left";
        this.elem.innerHTML = "";
        this.elem.appendChild(allWidthElem);
        allWidthElem.appendChild(innerWidthElem);
        innerWidthElem.innerHTML = contentHTML;
        this.modWidth = innerWidthElem.scrollWidth;
        allWidthElem.style.position = "";
        allWidthElem.style.overflow = "hidden";
        this.allWidthElem = allWidthElem;
        if ((this.o.auto === true || this.o.loop === true) && this.modWidth > parseInt(this.getStyle(this.elem, "width")) && !this.o.slider) {
            allWidthElem.innerHTML = contentHTML + contentHTML;
            allWidthElem.style.width = this.modWidth * 2 + "px";
        } else {
            allWidthElem.innerHTML = contentHTML;
            allWidthElem.style.width = this.modWidth + "px";
        };
    };
    return true;
};
Scroll.prototype.slider = function() {
    if (this.o.slider === undefined) {
        return false
    };
    var elem = this.g(this.o.slider),
        showRange = this.elem.clientWidth,
        allRange = this.elem.scrollWidth,
        count, _a, _text, mytime = "",
        that = this,
        sliderTimer = "";
    if (this.axes == "scrollTop") {
        showRange = this.elem.clientHeight, allRange = this.elem.scrollHeight;
    };
    count = Math.floor(allRange / showRange);
    if (allRange % showRange > 0) {
        count++;
    };
    if (this.axes == "scrollLeft") {
        this.allWidthElem.style.width = count * showRange + "px";
    };
    for (var i = 0; i < count; i++) {
        _a = document.createElement("a");
        _a.setAttribute("href", "#");
        _text = document.createTextNode(i + 1);
        elem.appendChild(_a);
        _a.appendChild(_text);
        _a.onclick = function() {
            return false
        };
        (function(i) {
            that.on(_a, that.o.mode, function() {
                if (that.o.mode == "mouseover") {
                    clearTimeout(sliderTimer);
                    sliderTimer = setTimeout(function() {
                        that.goToScreen(i);
                        that.stop();
                    }, 250);
                } else {
                    that.goToScreen(i);
                    that.stop();
                }
            });
            that.on(_a, "mouseover", function() {
                clearTimeout(mytime);
                that.stop();
            });
            that.on(_a, "mouseout", function() {
                clearTimeout(sliderTimer);
                mytime = setTimeout(function() {
                    that.start()
                }, 100);
            });
        })(i);
    };
    this.setSliderState();
};
Scroll.prototype.goToScreen = function(count) {
    if (this.o.slider === undefined) {
        return false
    };
    var theCount, elem = this.g(this.o.slider),
        _as = elem.getElementsByTagName("a");
    for (var i = 0, l = _as.length; i < l; i++) {
        if (_as[i].className == "current") {
            theCount = i;
        }
    };
    this.action(count - theCount);
};
Scroll.prototype.setSliderState = function() {
    if (this.o.slider === undefined) {
        return false
    };
    var elem = this.g(this.o.slider),
        items = elem.getElementsByTagName("a"),
        showRange = this.elem.clientWidth,
        pastRange = this.elem[this.axes],
        count;
    if (this.axes == "scrollTop") {
        showRange = this.elem.clientHeight;
    };
    count = Math.floor(pastRange / showRange);
    for (var i = 0, l = items.length; i < l; i++) {
        items[i].className = "";
    };
    items[count].className = "current";
};
Scroll.prototype.action = function(c) {
    if (this.isStop == 1 && !c) {
        return false
    };
    if (c == 0) {
        return false
    };
    var that = this,
        scroll = this.axes,
        range = this.isES ? -parseInt(this.o.range) : parseInt(this.o.range),
        n = this.isES ? -1 : 1,
        finish;
    clearTimeout(this.timer);
    if (c) {
        this.isStop = 1;
        finish = this.elem[scroll] + parseInt(this.o.range) * c;
        animation();
    } else if (this.o.rest) {
        this.isStop = 1;
        finish = this.elem[scroll] + range;
        animation();
    } else if (!this.o.rest && this.o.auto != false) {
        this.elem[scroll] += n;
        that.resetScroll();
    };
    if (this.o.auto != false) {
        this.timer = this.o.rest ? setTimeout(function() {
            that.action()
        }, this.o.rest) : setTimeout(function() {
            that.action()
        }, this.speed);
    };

    function animation() {
        that.slowdown(finish, scrollOver);
    };

    function scrollOver() {
        if (that.o.callback) that.o.callback(that);
        that.resetPrevNext();
        if (that.o.slider === undefined) {
            that.resetScroll()
        };
        that.setSliderState();
        that.isStop = 0;
    };
};
Scroll.prototype.resetScroll = function() {
    if (this.o.auto === false && this.o.loop === false) {
        return false
    };
    var start = this.modWidth > 0 ? this.modWidth : this.elem.scrollHeight / 2,
        scroll = this.axes,
        showScope = this.modWidth > 0 ? this.elem.clientWidth : this.elem.clientHeight,
        scrollMax = this.modWidth > 0 ? this.modWidth * 2 - showScope : this.elem.scrollHeight - showScope;
    if (this.elem[scroll] == 0) {
        this.elem[scroll] = start;
    };
    if (this.elem[scroll] == scrollMax) {
        this.elem[scroll] = start - showScope;
    };
};
Scroll.prototype.resetPrevNext = function() {
    if (this.o.auto === true || this.o.loop === true) {
        return false
    };
    if (this.o.slider !== undefined) {
        return false
    };
    if (this.move == "w" || this.move == "W" || this.move == "e" || this.move == "E") {
        if (this.elem.scrollWidth <= this.elem.offsetWidth) return false;
    } else {
        if (this.elem.scrollHeight <= this.elem.offsetHeight) return false;
    };
    var axes = this.axes,
        maxTopScope = this.modWidth > 0 ? this.modWidth : this.elem.scrollHeight,
        boxDcope = this.modWidth > 0 ? this.elem.clientWidth : this.elem.clientHeight,
        prevElem = this.g(this.o.prev),
        nextElem = this.g(this.o.next);
    if (prevElem) {
        this.elem[axes] == 0 ? prevElem.className = prevElem.className.replace(/\s*prevCurrent/g, "") : prevElem.className.indexOf("prevCurrent") < 0 ? prevElem.className += " prevCurrent" : "";
    };
    if (nextElem) {
        this.elem[axes] == maxTopScope - boxDcope ? nextElem.className = nextElem.className.replace(/\s*nextCurrent/g, "") : nextElem.className.indexOf("nextCurrent") < 0 ? nextElem.className += " nextCurrent" : "";
    };
};
Scroll.prototype.stop = function() {
    this.isStop = 1;
    clearTimeout(this.timer);
};
Scroll.prototype.start = function() {
    var that = this,
        time = this.o.rest || this.speed || 1000;
    clearTimeout(this.timer);
    this.isStop = 0;
    this.timer = setTimeout(function() {
        that.action()
    }, time);
};
Scroll.prototype.prev = function() {
    var that = this;
    this.prevElement.onclick = function() {
        return false
    };
    if (this.prevElement && this.o.range && this.isStop == 0) {
        this.on(this.prevElement, "click", function() {
            if (that.isStop == 1) {
                return false
            };
            that.action(-1);
        });
    };
};
Scroll.prototype.next = function() {
    var that = this;
    this.nextElement.onclick = function() {
        return false
    };
    if (this.nextElement && this.o.range && this.isStop == 0) {
        this.on(this.nextElement, "click", function() {
            if (that.isStop == 1) {
                return false
            };
            that.action(1);
        });
    };
};
Scroll.prototype.g = function(elem) {
    return typeof(elem) == "object" ? elem : document.getElementById(elem)
};
Scroll.prototype.on = function(elem, type, listener) {
    type = type.replace(/^on/i, '').toLowerCase();
    var realListener = listener;
    if (elem.addEventListener) {
        elem.addEventListener(type, realListener, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, realListener);
    };
    return elem;
};
Scroll.prototype.getStyle = function(elem, name) {
    if (elem.style[name] != '') return elem.style[name];
    if (!!window.ActiveXObject) return elem.currentStyle[name];
    return document.defaultView.getComputedStyle(elem, "").getPropertyValue(name.replace(/([A-Z])/g, "-$1").toLowerCase());
};
Scroll.prototype.cpu = function(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
};
Scroll.prototype.slowdown = function(finish, _f) {
    if (this.o.slider !== undefined) {
        var max = this.elem.scrollWidth,
            range = this.o.range;
        if (this.axes == "scrollTop") {
            max = this.elem.scrollHeight;
        };
        if (finish > max - range) {
            finish = 0;
        };
        if (finish < 0) {
            finish = max - range;
        };
    };
    var count = 0,
        elem = this.elem,
        plan = this.axes,
        start = elem[plan],
        finish = finish % this.o.range == 0 ? finish : finish % this.o.range + finish,
        space = finish - start,
        speed = this.speed,
        that = this,
        command;

    function place() {
        if (!that.o.animation) {
            elem[plan] = finish;
            if (_f) _f();
            return false;
        };
        elem[plan] = that.cpu(count, start, space, speed);
        count++;
        if (count === speed) {
            clearTimeout(command);
            count = 0;
            elem[plan] = finish;
            if (_f) _f();
            return false;
        };
        command = setTimeout(place, 15);
    };
    place();
};