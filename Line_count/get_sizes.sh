#!/bin/bash
declare -a websites=("http://www.yandex.ru/" "http://www.xnxx.com/" "http://www.popads.net/" "http://www.microsoft.com/" "http://www.xvideos.com/" "http://www.youtube.com/" "http://www.ask.com/" "http://www.paypal.com/" "http://www.instagram.com/" "http://www.tianya.cn/" "http://www.twitter.com/" "http://www.apple.com/" "http://www.quora.com/" "http://www.whatsapp.com/" "http://www.coccoc.com/" "http://www.theguardian.com/" "http://www.ettoday.net/" "http://www.hao123.com/" "http://www.cnn.com/" "http://www.amazonaws.com/" "http://www.china.com/")

for i in "${websites[@]}"
do
  node scraper.js $i
done
