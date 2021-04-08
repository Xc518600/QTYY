const message = require('./message');
const UTC8 = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;

// 发送消息通知
exports.sendMessage = function (title, content) {
    message.send(title, content)
}

// 时间格式化
exports.timeNow = function () {
    let date = new Date(UTC8);
    return date.getFullYear() + '年' + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '月' + (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()) + '日';
}
