// #16736
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windowsce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";


  if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {

    var parentId = '',
      id = '',
      url = document.URL,
      slash = /\//g,
      params = url.split("/"),
      domain = window.location.host,
      wapUrl;

    //首页
    if (url.match(slash).length == 3) {
      if (url.indexOf("index.html") == -1) {
        wapUrl = url.replace("http:\/\/", "http:\/\/" + "mobile.");
        window.location.href = wapUrl;
        return;
      } else {
        return false;
      };
    }

    //内容页
    if (params.length >= 3) {
      parentId = params[params.length - 3];
    }
    if (params.length >= 2) {
      dt = params[params.length - 2];
    }
    if (params.length >= 1) {
      id = params[params.length - 1];
    }

    if ( parentId.match(/^\d+$/) && dt.match(/^\d+$/) ) {
      wapUrl = "http://mobile." + domain + "/" + parentId + "/" + dt + "/" + id;
      window.location.href = wapUrl;
    }
    
  }
}

browserRedirect();