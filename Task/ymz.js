/*
软件名称:羊毛赚 商店搜索下载 羊毛英汉词典
更新时间：2021-02-23 @肥皂
脚本说明：羊毛赚
脚本为
完成广告任务
完成视频任务
每天有一块的收益
每天运行一次即可

本脚本以学习为主！
使用方法:
首次运行脚本，会提示获取body
进入看广告任务，在任务界面停留三分钟，倒计时结束提示获取广告body成功
进入看视频任务，观看玩一组视频，共五个左右，结束提示获取视频body成功

TG电报群: https://t.me/hahaha8028
注意:
必须要扫描二维码下载，下载完毕之后在扫描二维码点打开羊毛赚才可以加载出任务界面

二维码下载地址 https://raw.githubusercontent.com/age174/-/main/A6021BD8-081E-4BAF-A0E6-14198AA23EB5.jpeg

我的邀请码 : 10008612  感谢大佬们填写 

2.7 修复一些错误，判断广告和视频的body是否获取
2.23加入自动提现 ，自己去抓提现的body，需要提现多少就点击多少的金额提现获取数据
注意:需要提现的请用新的重写替换以前的重写抓取提现的body
新的重写在下方

脚本每天运行一次即可

羊毛赚
圈X配置如下，其他软件自行测试，羊毛赚没有任务界面请务必复制上面的二维码链接到浏览器打开保存扫码，然后到扫码结果上打开
[task_local]
#羊毛赚
15 10 * * * https://raw.githubusercontent.com/age174/-/main/ymz.js, tag=羊毛赚, img-url=https://s3.ax1x.com/2021/02/06/yYzYWR.png, enabled=true


[rewrite_local]
#羊毛赚
^http://ymz.iphonezhuan.com/ url script-request-body https://raw.githubusercontent.com/age174/-/main/ymz.js



#loon
^http://ymz.iphonezhuan.com/ script-path=https://raw.githubusercontent.com/age174/-/main/ymz.js, requires-body=true, timeout=10, tag=羊毛赚



#surge

羊毛赚 = type=http-request,pattern=^http://ymz.iphonezhuan.com/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/ymz.js,script-update-interval=0




[MITM]
hostname = ymz.iphonezhuan.com


*/
const $ = new Env('羊毛赚');
let ymzurl = $.getdata('ymzurl')
let ymzhd = $.getdata('ymzhd')
let ymzbody = $.getdata('ymzbody')
let ymzbody1 = $.getdata('ymzbody1')
let ymztxbody = $.getdata('ymztxbody')
let ymzurlArr = [], ymzhdArr = [], ymzbodyArr = [], ymzbody1Arr = [], ymztxbodyArr = []
!(async () => {
  if (typeof $request !== "undefined") {
    await ymzck()
   
  } else {
    if ($.isNode()) {
  COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
  console.log(
    `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
  );
if (
    process.env.YMZURL &&
    process.env.YMZURL.indexOf(COOKIES_SPLIT) > -1
  ) {
    ymzurl = process.env.YMZURL.split(COOKIES_SPLIT);
  } else {
    ymzurl = process.env.YMZURL.split();
  }
  if (
    process.env.YMZHD &&
    process.env.YMZHD.indexOf(COOKIES_SPLIT) > -1
  ) {
    ymzhd = process.env.YMZHD.split(COOKIES_SPLIT);
  } else {
    ymzhd = process.env.YMZHD.split();
  }
  if (
    process.env.YMZBODY &&
    process.env.YMZBODY.indexOf(COOKIES_SPLIT) > -1
  ) {
    ymzbody = process.env.YMZBODY.split(COOKIES_SPLIT);
  } else {
    ymzbody = process.env.YMZBODY.split();
  }
  if (
    process.env.YMZBODY1 &&
    process.env.YMZBODY1.indexOf(COOKIES_SPLIT) > -1
  ) {
    ymzbody1 = process.env.YMZBODY1.split(COOKIES_SPLIT);
  } else {
    ymzbody1 = process.env.YMZBODY1.split();
  }	
  if (
    process.env.YMZTXBODY &&
    process.env.YMZTXBODY.indexOf(COOKIES_SPLIT) > -1
  ) {
    ymztxbody = process.env.YMZTXBODY.split(COOKIES_SPLIT);
  } else {
    ymztxbody = process.env.YMZTXBODY.split();
  }
	
  Object.keys(ymzurl).forEach((item) => {
        if (ymzurl[item]) {
          ymzurlArr.push(ymzurl[item])
        }
    });
    Object.keys(ymzhd).forEach((item) => {
        if (ymzhd[item]) {
          ymzhdArr.push(ymzhd[item])
        }
    });

Object.keys(ymzbody).forEach((item) => {
        if (ymzbody[item]) {
          ymzbodyArr.push(ymzbody[item])
        }
    });
    Object.keys(ymzbody1).forEach((item) => {
        if (ymzbody1[item]) {
          ymzbody1Arr.push(ymzbody1[item])
        }
    });

Object.keys(ymztxbody).forEach((item) => {
        if (ymztxbody[item]) {
          ymztxbodyArr.push(ymztxbody[item])
        }
    });
  	
} 
 
    console.log(`------------- 共${ymzhdArr.length}个账号-------------\n`)
      for (let i = 0; i < ymzhdArr.length; i++) {
        if (ymzhdArr[i]) {
         
          ymzurl = ymzurlArr[i];
          ymzhd = ymzhdArr[i];
          ymzbody = ymzbodyArr[i];
          ymzbody1 = ymzbody1Arr[i];
          ymztxbody = ymztxbodyArr[i];

          $.index = i + 1;
          console.log(`\n开始【羊毛赚${$.index}】`)
            
    for (let i = 0; i < 6; i++) {     
        console.log(`\n羊毛赚开始执行第${i+1}组任务！💦`); 
	await ymzqd();
	console.log(`\n等待一分钟开始执行下一组任务💦`);      
        await $.wait(60000);
    }
  await ymztx()
  }
  console.log(`\n🌝等待3秒钟开始执行第${$.index + 1}个帐号💦`); 
  await $.wait(3000);
  }       
$.msg("","","羊毛赚任务已全部完成！")
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//羊毛赚数据获取
function ymzck() {
   if ($request.url.indexOf("addaction") > -1&&$request.body.indexOf("taskid=1") > -1){
  $.setdata(JSON.stringify($request.url),'ymzurl')
    $.log(ymzurl)
    $.setdata(JSON.stringify($request.headers),'ymzhd')
$.log(ymzhd)
    $.setdata($request.body,'ymzbody')
$.log(ymzbody)
   $.msg($.name,"","羊毛赚广告数据获取成功！")
  }
if ($request.url.indexOf("addaction") > -1&&$request.body.indexOf("taskid=2") > -1){
  $.setdata($request.body,'ymzbody1')
$.log(ymzbody1)
   $.msg($.name,"","羊毛赚视频数据获取成功！")
    }
if ($request.url.indexOf("submitwithdraw") > -1){
  $.setdata($request.body,'ymztxbody')
$.log(ymztxbody)
   $.msg($.name,"","羊毛赚提现数据获取成功！")
  
}
}




//羊毛赚视频     
function ymzsp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://ymz.iphonezhuan.com/addaction',
        headers : JSON.parse(ymzhd),
        body : ymzbody1,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('羊毛赚视频回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 410){
        console.log('羊毛赚视频回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



//羊毛赚提现    
function ymztx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://ymz.iphonezhuan.com/submitwithdraw',
        headers : JSON.parse(ymzhd),
        body : ymztxbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('羊毛赚提现回执:成功🌝 '+result.msg)
}
if(result.statuscode !== 200){
        console.log('羊毛赚提现回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//羊毛赚广告
function ymzqd(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof ymzbody === "undefined") {
        $.msg($.name,"",'请先获取羊毛赚广告body!😓',)
        //$.done()
	return
      }
let url = {
        url : 'http://ymz.iphonezhuan.com/addaction',
        headers : JSON.parse(ymzhd),
        body : ymzbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('羊毛赚广告回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 410){
        console.log('羊毛赚广告回执:失败🚫 '+result.msg)}
//await ymzgg() 

      console.log(`羊毛赚执行广告任务结束！💦\n等待10秒开始执行视频任务`)
      if (typeof ymzbody1 === "undefined") {
        $.msg($.name,"",'请先获取羊毛赚视频body!😓',)
        //$.done()
	return
      }    
await $.wait(10000);
await ymzsp()
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}



function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
