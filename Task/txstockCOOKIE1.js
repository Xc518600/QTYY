//独立COOKIE文件     ck在``里面填写，多账号换行
let userheaderVal= `oA0GbjoYaQfA8TjMIjGXRpoMp1rs&_appName=ios&_dev=iPad4,7&_devId=bc12e3cee3811d84059cb4d3b32b8be34eace0be&_appver=8.9.0&_ifChId=&_isChId=1&_osVer=12.5.1&openid=oA0GbjoYaQfA8TjMIjGXRpoMp1rs&fskey=v0aaf63c222606eec28ddbe73acd9ba4&appid=wxcbc3ab3807acb685&access_token=43_5dFldSzKbqY2N8J9IaL8L051auff-Qe0l6zZRSQUzFrIEV_ZJ8os64Bqycv_te_yl79mZqvVkM4qXyrSqX41hHhnYx6IsoV2439cztJwUps&buildType=store&check=11&_idfa=&lang=zh_CN`

let userkeyVal= `pgv_pvid=6880693083; ts_last=/activity/page/welwareCenter/; ts_sid=6524732294; ts_uid=1672624676`

let cashheaderVal= `1`

let signheaderVal= `oA0GbjoYaQfA8TjMIjGXRpoMp1rs&fskey=v0aaf63c222606eec28ddbe73acd9ba4&channel=1&access_token=43_5dFldSzKbqY2N8J9IaL8L051auff-Qe0l6zZRSQUzFrIEV_ZJ8os64Bqycv_te_yl79mZqvVkM4qXyrSqX41hHhnYx6IsoV2439cztJwUps&_appName=ios&_appver=8.9.0&_osVer=12.5.1&_devId=bc12e3cee3811d84059cb4d3b32b8be34eace0be`

let signkeyVal= `pgv_info=ssid=s5036641764; pgv_pvid=6880693083; ts_last=/activity/page/guessRiseFall/; ts_sid=3983213642; ts_uid=1249145774`

let taskheaderVal= `&_dev=iPad4,7&_devId=bc12e3cee3811d84059cb4d3b32b8be34eace0be&_appver=8.9.0&_ifChId=&_isChId=1&_osVer=12.5.1&openid=oA0GbjoYaQfA8TjMIjGXRpoMp1rs&fskey=v0aaf63c222606eec28ddbe73acd9ba4&appid=wxcbc3ab3807acb685&access_token=43_5dFldSzKbqY2N8J9IaL8L051auff-Qe0l6zZRSQUzFrIEV_ZJ8os64Bqycv_te_yl79mZqvVkM4qXyrSqX41hHhnYx6IsoV2439cztJwUps&buildType=store&check=11&_idfa=&lang=zh_CN`

let taskkeyVal= `pgv_info=ssid=s6176207872; pgv_pvid=6880693083; ts_last=/activity/page/welwareCenter/; ts_sid=6524732294; ts_uid=1672624676`

let wxtaskkeyVal= ``


let cookieArr = {
  userheaderVal: userheaderVal,
  userkeyVal: userkeyVal,
  cashheaderVal: cashheaderVal,
  signheaderVal: signheaderVal,
  signkeyVal: signkeyVal,
  taskheaderVal: taskheaderVal, 
  taskkeyVal: taskkeyVal,
  wxtaskkeyVal: wxtaskkeyVal, 
}

module.exports =  cookieArr
