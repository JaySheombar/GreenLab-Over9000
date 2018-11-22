

//logo_ettoday =======================================
(function(){
	var etLogoRightNow = new Date();

	//第一個時間 
	var etLogoStartTime = new Date(2018, 10-1, 30, 0, 0, 0); // 結束時間 (年,月(0-11),日,時,分,秒)
	var etLogoEndTime = new Date(2018, 10-1, 31, 23, 59, 59); // 結束時間 (年,月(0-11),日,時,分,秒)
	var etLogoSrc = "https://static.ettoday.net/style/ettoday2017/images/logo/halloween-2018.gif"; 
	
	//第一個時間 
	var etLogoStartTime2 = new Date(2018, 11-1, 1, 0, 0, 0); // 結束時間 (年,月(0-11),日,時,分,秒)
	var etLogoEndTime2 = new Date(2018, 11-1, 1, 23, 59, 59); // 結束時間 (年,月(0-11),日,時,分,秒)
	var etLogoSrc2 = "https://static.ettoday.net/style/ettoday2017/images/logo/anniversary-2018.gif"; 
	
	
	if (etLogoRightNow > etLogoStartTime && etLogoRightNow < etLogoEndTime) {
		//上檔期間-節慶Logo
		document.write('<a href="https://www.ettoday.net/?from=logo" title="回首頁"><img src="'+etLogoSrc+'" border="0" alt="ETtoday新聞雲"/></a>');
	}else if (etLogoRightNow > etLogoStartTime2 && etLogoRightNow < etLogoEndTime2) {
		//上檔期間-節慶Logo
		document.write('<a href="https://www.ettoday.net/?from=logo" title="回首頁"><img src="'+etLogoSrc2+'" border="0" alt="ETtoday新聞雲"/></a>');
	}
	else{
		//下檔期間-預設Logo
		document.write('<a href="https://www.ettoday.net/?from=logo" title="回首頁"><img src="//static.ettoday.net/style/ettoday2017/images/logo_ettoday.png" border="0" alt="ETtoday新聞雲"/></a>');
	}
})();





