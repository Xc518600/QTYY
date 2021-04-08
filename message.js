const axios = require("axios");

const SCKEY = process.env.SCKEY;//server酱的SCKEY
const QMSG_KEY = process.env.QMSG_KEY;// Qmsg酱的KEY
const TG_API = process.env.TG_API; // telegram的api,例：https://api.telegram.org/bot123456:ABCDEFG(替换为你的token)/sendMessage?chat_id=123456(替换为你的id)

exports.send = async function (title, content) {
    if (SCKEY) {
        await server(title, content)
    }
    if (QMSG_KEY) {
        await qMsg(title + '\n' + content)
    }
    if (TG_API) {
        await tgBot(title + '\n' + content)
    }
}

// server酱
function server(title, content) {
    return new Promise(async (resolve) => {
        try {
            content = content.replace(/[\n\r]/g, '\n\n');
            let url = `https://sc.ftqq.com/${SCKEY}.send`
            let res = await axios.post(url, `text=${title}&desp=${content}`)
            if (res.data.errmsg === 'success') {
                console.log('server酱：发送成功!')
            } else {
                console.log('server酱：发送失败!')
                console.log(res.data)
            }
        } catch (err) {
            console.log('server酱：发送失败!' + err)
        }
        resolve();
    });
}

// Qmsg酱
function qMsg(msg) {
    return new Promise(async (resolve) => {
        try {
            let url = `https://qmsg.zendee.cn/send/${QMSG_KEY}?msg=${encodeURI(msg)}`
            let res = await axios.get(url)
            if (res.data.code === 0) {
                console.log("Qmsg酱：发送成功!");
            } else {
                console.log("Qmsg酱：发送失败!");
                console.log(res.data.reason);
            }
        } catch (err) {
            console.log('Qmsg酱：发送失败!' + err)
        }
        resolve();
    });
}

// telegram
function tgBot(msg) {
    return new Promise(async (resolve) => {
        try {
            let url = `${TG_API}&text=${encodeURI(msg)}`;
            let res = await axios.get(url);
            if (res.data.ok) {
                console.log("Tg：发送成功!");
            } else {
                console.log("Tg：发送失败!");
                console.log(res.data);
            }
        } catch (err) {
            console.log("Tg：发送失败!" + err);
        }
        resolve();
    });
}
