
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ranlv.lvfacn.com/api.php/Share/withdraw?access_token=f2e1d57418bb3d6a0439b494f3468a75&amount=1&is_act=1&member_id=194774&user_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJSYW5sdiBKV1QiLCJpYXQiOjE2MTMzNzk0OTgsImV4cCI6MzIyNjc1ODk5NiwiYXVkIjoiUmFubHYiLCJzdWIiOiJSYW5sdiIsImRhdGEiOnsibWVtYmVyX2lkIjoxOTQ3NzQsImF2YXRhciI6Imh0dHA6XC9cL3Jhbmx2Lmx2ZmFjbi5jb21cL3N0YXRpY1wvbW9kdWxlXC9hZG1pblwvaW1nXC9kZWZhdWx0X2hlYWQuanBnIiwibmlja25hbWUiOiJcdTc1MjhcdTYyMzcwNzQ2NTgyOSIsIm1vYmlsZSI6IjE3NjEyODEzODQ0In19.p97TxVYTm73xK7XHn1_7jTCUThAA4F0ROioKxtjZZ60`;
const method = `POST`;
const headers = {
'Cookie' : `acw_tc=b482708b16136755869727348e9f047c44e593e403d1bf75f362e3734d`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `ranlv.lvfacn.com`,
'User-Agent' : `ran lu shi pin/1.0.49 (iPhone; iOS 14.1; Scale/3.00)`,
'Accept-Language' : `zh-Hans-CN;q=1`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);

$notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

