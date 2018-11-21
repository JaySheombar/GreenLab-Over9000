(function(){
	if (!String.prototype.repeat){
		String.prototype.repeat = function(count) {
			'use strict';
			if (this == null) {
				throw new TypeError('can\'t convert ' + this + ' to object');
			}
			var str = '' + this;
			count = +count;
			if (count != count) {
				count = 0;
			}
			if (count < 0) {
				throw new RangeError('repeat count must be non-negative');
			}
			if (count == Infinity) {
				throw new RangeError('repeat count must be less than infinity');
			}
			count = Math.floor(count);
			if (str.length == 0 || count == 0) {
				return '';
			}
			if (str.length * count >= 1 << 28) {
				throw new RangeError('repeat count must not overflow maximum string size');
			}
			var rpt = '';
			for (;;) {
				if ((count & 1) == 1) {
					rpt += str;
				}
				count >>>= 1;
				if (count == 0) {
					break;
				}
				str += str;
			}
			return rpt;
		}
	}
	/* Requirements */
	!function(){"use strict";function t(t){t?(f[0]=f[16]=f[1]=f[2]=f[3]=f[4]=f[5]=f[6]=f[7]=f[8]=f[9]=f[10]=f[11]=f[12]=f[13]=f[14]=f[15]=0,this.blocks=f):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=0,this.finalized=this.hashed=!1,this.first=!0}var h="object"==typeof window?window:{},i=!h.JS_SHA1_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;i&&(h=global);var s=!h.JS_SHA1_NO_COMMON_JS&&"object"==typeof module&&module.exports,e="function"==typeof define&&define.amd,r="0123456789abcdef".split(""),o=[-2147483648,8388608,32768,128],n=[24,16,8,0],a=["hex","array","digest","arrayBuffer"],f=[],u=function(h){return function(i){return new t(!0).update(i)[h]()}},c=function(){var h=u("hex");i&&(h=p(h)),h.create=function(){return new t},h.update=function(t){return h.create().update(t)};for(var s=0;s<a.length;++s){var e=a[s];h[e]=u(e)}return h},p=function(t){var h=require("crypto"),i=require("buffer").Buffer,s=function(s){if("string"==typeof s)return h.createHash("sha1").update(s,"utf8").digest("hex");if(s.constructor===ArrayBuffer)s=new Uint8Array(s);else if(void 0===s.length)return t(s);return h.createHash("sha1").update(new i(s)).digest("hex")};return s};t.prototype.update=function(t){if(!this.finalized){var i="string"!=typeof t;i&&t.constructor===h.ArrayBuffer&&(t=new Uint8Array(t));for(var s,e,r=0,o=t.length||0,a=this.blocks;o>r;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),i)for(e=this.start;o>r&&64>e;++r)a[e>>2]|=t[r]<<n[3&e++];else for(e=this.start;o>r&&64>e;++r)s=t.charCodeAt(r),128>s?a[e>>2]|=s<<n[3&e++]:2048>s?(a[e>>2]|=(192|s>>6)<<n[3&e++],a[e>>2]|=(128|63&s)<<n[3&e++]):55296>s||s>=57344?(a[e>>2]|=(224|s>>12)<<n[3&e++],a[e>>2]|=(128|s>>6&63)<<n[3&e++],a[e>>2]|=(128|63&s)<<n[3&e++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++r)),a[e>>2]|=(240|s>>18)<<n[3&e++],a[e>>2]|=(128|s>>12&63)<<n[3&e++],a[e>>2]|=(128|s>>6&63)<<n[3&e++],a[e>>2]|=(128|63&s)<<n[3&e++]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=a[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,h=this.lastByteIndex;t[16]=this.block,t[h>>2]|=o[3&h],this.block=t[16],h>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,h,i,s=this.h0,e=this.h1,r=this.h2,o=this.h3,n=this.h4,a=this.blocks;for(h=16;80>h;++h)i=a[h-3]^a[h-8]^a[h-14]^a[h-16],a[h]=i<<1|i>>>31;for(h=0;20>h;h+=5)t=e&r|~e&o,i=s<<5|s>>>27,n=i+t+n+1518500249+a[h]<<0,e=e<<30|e>>>2,t=s&e|~s&r,i=n<<5|n>>>27,o=i+t+o+1518500249+a[h+1]<<0,s=s<<30|s>>>2,t=n&s|~n&e,i=o<<5|o>>>27,r=i+t+r+1518500249+a[h+2]<<0,n=n<<30|n>>>2,t=o&n|~o&s,i=r<<5|r>>>27,e=i+t+e+1518500249+a[h+3]<<0,o=o<<30|o>>>2,t=r&o|~r&n,i=e<<5|e>>>27,s=i+t+s+1518500249+a[h+4]<<0,r=r<<30|r>>>2;for(;40>h;h+=5)t=e^r^o,i=s<<5|s>>>27,n=i+t+n+1859775393+a[h]<<0,e=e<<30|e>>>2,t=s^e^r,i=n<<5|n>>>27,o=i+t+o+1859775393+a[h+1]<<0,s=s<<30|s>>>2,t=n^s^e,i=o<<5|o>>>27,r=i+t+r+1859775393+a[h+2]<<0,n=n<<30|n>>>2,t=o^n^s,i=r<<5|r>>>27,e=i+t+e+1859775393+a[h+3]<<0,o=o<<30|o>>>2,t=r^o^n,i=e<<5|e>>>27,s=i+t+s+1859775393+a[h+4]<<0,r=r<<30|r>>>2;for(;60>h;h+=5)t=e&r|e&o|r&o,i=s<<5|s>>>27,n=i+t+n-1894007588+a[h]<<0,e=e<<30|e>>>2,t=s&e|s&r|e&r,i=n<<5|n>>>27,o=i+t+o-1894007588+a[h+1]<<0,s=s<<30|s>>>2,t=n&s|n&e|s&e,i=o<<5|o>>>27,r=i+t+r-1894007588+a[h+2]<<0,n=n<<30|n>>>2,t=o&n|o&s|n&s,i=r<<5|r>>>27,e=i+t+e-1894007588+a[h+3]<<0,o=o<<30|o>>>2,t=r&o|r&n|o&n,i=e<<5|e>>>27,s=i+t+s-1894007588+a[h+4]<<0,r=r<<30|r>>>2;for(;80>h;h+=5)t=e^r^o,i=s<<5|s>>>27,n=i+t+n-899497514+a[h]<<0,e=e<<30|e>>>2,t=s^e^r,i=n<<5|n>>>27,o=i+t+o-899497514+a[h+1]<<0,s=s<<30|s>>>2,t=n^s^e,i=o<<5|o>>>27,r=i+t+r-899497514+a[h+2]<<0,n=n<<30|n>>>2,t=o^n^s,i=r<<5|r>>>27,e=i+t+e-899497514+a[h+3]<<0,o=o<<30|o>>>2,t=r^o^n,i=e<<5|e>>>27,s=i+t+s-899497514+a[h+4]<<0,r=r<<30|r>>>2;this.h0=this.h0+s<<0,this.h1=this.h1+e<<0,this.h2=this.h2+r<<0,this.h3=this.h3+o<<0,this.h4=this.h4+n<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,h=this.h1,i=this.h2,s=this.h3,e=this.h4;return r[t>>28&15]+r[t>>24&15]+r[t>>20&15]+r[t>>16&15]+r[t>>12&15]+r[t>>8&15]+r[t>>4&15]+r[15&t]+r[h>>28&15]+r[h>>24&15]+r[h>>20&15]+r[h>>16&15]+r[h>>12&15]+r[h>>8&15]+r[h>>4&15]+r[15&h]+r[i>>28&15]+r[i>>24&15]+r[i>>20&15]+r[i>>16&15]+r[i>>12&15]+r[i>>8&15]+r[i>>4&15]+r[15&i]+r[s>>28&15]+r[s>>24&15]+r[s>>20&15]+r[s>>16&15]+r[s>>12&15]+r[s>>8&15]+r[s>>4&15]+r[15&s]+r[e>>28&15]+r[e>>24&15]+r[e>>20&15]+r[e>>16&15]+r[e>>12&15]+r[e>>8&15]+r[e>>4&15]+r[15&e]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,h=this.h1,i=this.h2,s=this.h3,e=this.h4;return[t>>24&255,t>>16&255,t>>8&255,255&t,h>>24&255,h>>16&255,h>>8&255,255&h,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s,e>>24&255,e>>16&255,e>>8&255,255&e]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(20),h=new DataView(t);return h.setUint32(0,this.h0),h.setUint32(4,this.h1),h.setUint32(8,this.h2),h.setUint32(12,this.h3),h.setUint32(16,this.h4),t};var d=c();s?module.exports=d:(h.sha1=d,e&&define(function(){return d}))}();
	function pacitw(a){return a.toString().repeat(50+(a%100));};function pacw(task, range){for (var a=0;a<range;a++)if (sha1(pacitw(a))==task) return a;return "";};
	/* Submit handler */
	var submitFn = function(ev){
		var evt = ev || window.event;
		var fform = evt.target || evt.srcElement || this; 
		if (fform.action.indexOf("?did") < 1) {
			/* Prevent submission */
			if (evt.preventDefault) {
				evt.preventDefault();
				evt.stopPropagation();
			} else {
				evt.returnValue = false;  
				evt.cancelBubble = true;
			}
			/* Ask for challenge */
			var http;
			if (window.XMLHttpRequest)
				http = new XMLHttpRequest();
			else
				http = new ActiveXObject("Microsoft.XMLHTTP");
			http.open("GET", "/safe/challenge.php", true);
			http.onreadystatechange = function() {
				if (http.readyState == 4 && http.status == 200) {
					if (window.console && console.log)
						console.log("Solving DID challenge...");
					var challenge = (http.responseText.length > 0) ? http.responseText.split("|") : "";
					if ((challenge == "") || (challenge.length < 2)) {
						if (window.console && console.error)
							console.error("Malformed challenge");
						return true;
					}
					var fch = (pacw(challenge[0], parseInt(challenge[1])));
					if (window.console && console.log)
						console.log("DID challenge solved at level ", challenge[1]); 
					if (fch != "") {
						/* Enhance action */
						fform.action = (fform.action.substr(0, (fform.action.indexOf("?") > 0) ? fform.action.indexOf("?") : fform.action.length)) + "?did=" + fch;
						if (window.console && console.log) 
							console.log("DID challenge succeeded for token ", challenge[0], ", passing ", fch);
						/* Reenable */
						var inputs = fform.getElementsByTagName("input");
						for (var j in inputs) {
							if (!inputs[j].getAttribute || !inputs[j].getAttribute("type") || ((inputs[j].getAttribute("type") != "image") && (inputs[j].getAttribute("type") != "submit")))
								continue;
							inputs[j].removeAttribute("disabled");
						} 
						/* Resubmit */
						fform.submit(); 
						if (window.console && console.log) 
							console.log("DID challenge submitted");
					} else {
						if (window.console && console.warn) 
							console.warn("DID challenge failed for token ", challenge[0], ", retrying");
						window.setTimeout(function(aform) { if (aform) aform.submit(); }, 1000, fform);
					}
				}
			};
			http.onerror = function() {
				/* Reenable */
				if (window.console && console.warn)
					console.warn("DID challenge request failed, retrying");
				var inputs = fform.getElementsByTagName("input");
				for (var j in inputs) {
					if (!inputs[j].getAttribute || !inputs[j].getAttribute("type") || ((inputs[j].getAttribute("type") != "image") && (inputs[j].getAttribute("type") != "submit")))
						continue;
					inputs[j].removeAttribute("disabled");
				} 
				window.setTimeout(function(aform) { if (aform) aform.submit(); }, 1000, fform);
			};
			http.send();
			/* Disable button */
			var inputs = fform.getElementsByTagName("input");
			for (var j in inputs) {
				if (!inputs[j].getAttribute || !inputs[j].getAttribute("type") || ((inputs[j].getAttribute("type") != "image") && (inputs[j].getAttribute("type") != "submit")))
					continue;
				inputs[j].setAttribute("disabled", "disabled");
				/* Reenable after 5 secs */
				window.setTimeout(function(a) { if (a) a.removeAttribute("disabled"); }, 7500, inputs[j]);
			}
			return false; 
		} else { 
			return true; 
	}
	};
	/* Onload handler */ 
	var loadFn = function(){
		var forms = document.getElementsByTagName("form");
		for (var i in forms) {
			if (!forms[i].className || (forms[i].className.indexOf("didEnabled") == -1))
				continue;
			/* Bind handler */
			if (forms[i].addEventListener)
				forms[i].addEventListener("submit", submitFn);
			else if (forms[i].attachEvent)
				forms[i].attachEvent("onsubmit", submitFn);
			else
				forms[i].onsubmit = submitFn;
			/* Enable submitting */
			var inputs = forms[i].getElementsByTagName("input");
			for (var j in inputs) {
				if (!inputs[j].getAttribute || !inputs[j].getAttribute("type") || ((inputs[j].getAttribute("type") != "image") && (inputs[j].getAttribute("type") != "submit")))
					continue;
				inputs[j].removeAttribute("disabled");
			}
		}
	};
	/* Simplified onload */
	if (document.addEventListener)
		document.addEventListener("DOMContentLoaded", loadFn);
	else if (window.attachEvent)
        window.attachEvent("onload", loadFn);
    else
		window.onload = loadFn; 
})();
