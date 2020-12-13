#!/usr/bin/env python3
# _*_ coding:utf-8 _*_

# @Time    : 2020/11/29 17:14
# @Author  : TNanko
# @Site    : https://tnanko.github.io
# @File    : notify.py
# @Software: PyCharm
import sys
import os
cur_path = os.path.abspath(os.path.dirname(__file__))
root_path = os.path.split(cur_path)[0]
sys.path.append(root_path)
import requests
import json
import traceback
import time
import hmac
import hashlib
import base64
import urllib.parse
from utils.configuration import read


def bark(bark_machine_code, title, content):
    """
    ios bark app 推送
    :param bark_machine_code:
    :param title:
    :param content:
    :return:
    """
    try:
        print('正在使用 bark 推送消息...', end='')
        response = requests.get(f'https://api.day.app/{bark_machine_code}/{title}/{content}', timeout=15).json()
        if response['code'] == 200:
            print('推送成功！')
        else:
            print('推送失败！')
    except:
        symbol = '-' * 50
        print(f'\n[⚠ /Scripts/utils/notify.py - bark(bark_machine_code, title, content) bark推送错误]')
        # print(f'\n[⚠ /Scripts/utils/notify.py - bark(bark_machine_code, title, content) bark推送错误]\n{symbol}\n{traceback.format_exc()}{symbol}')


def telegram_bot(tg_bot_token, tg_user_id, title, content):
    """
    telegram bot 消息推送
    :param tg_bot_token:
    :param tg_user_id:
    :param title:
    :param content:
    :return:
    """
    try:
        print('正在使用 telegram机器人 推送消息...', end='')
        data = {
            'chat_id': tg_user_id,
            'text': f'{title}\n\n{content}',
            'disable_web_page_preview': 'true'
        }
        response = requests.post(url=f'https://api.telegram.org/bot{tg_bot_token}/sendMessage', data=data, timeout=15).json()
        if response['ok']:
            print('推送成功！')
        else:
            print('推送失败！')
    except:
        symbol = '-' * 50
        print(f'\n[⚠ /Scripts/utils/notify.py - telegram_bot(tg_bot_token, tg_user_id, title, content) telegram_bot推送错误]')
        # print(f'\n[⚠ /Scripts/utils/notify.py - telegram_bot(tg_bot_token, tg_user_id, title, content) telegram_bot推送错误]\n{symbol}\n{traceback.format_exc()}{symbol}')


def dingding_bot(access_token, secret, title, content):
    """
    钉钉机器人推送
    :param access_token:
    :param secret:
    :param title:
    :param content:
    :return:
    """
    try:
        timestamp = str(round(time.time() * 1000))  # 时间戳
        secret_enc = secret.encode('utf-8')
        string_to_sign = '{}\n{}'.format(timestamp, secret)
        string_to_sign_enc = string_to_sign.encode('utf-8')
        hmac_code = hmac.new(secret_enc, string_to_sign_enc, digestmod=hashlib.sha256).digest()
        sign = urllib.parse.quote_plus(base64.b64encode(hmac_code))  # 签名
        print('开始使用 钉钉机器人 推送消息...', end='')
        url = f'https://oapi.dingtalk.com/robot/send?access_token={access_token}&timestamp={timestamp}&sign={sign}'
        headers = {'Content-Type': 'application/json;charset=utf-8'}
        data = {
            'msgtype': 'text',
            'text': {'content': f'{title}\n\n{content}'}
        }
        response = requests.post(url=url, data=json.dumps(data), headers=headers, timeout=15).json()
        if not response['errcode']:
            print('推送成功！')
        else:
            print('推送失败！')
    except:
        symbol = '-' * 50
        print(f'\n[⚠ /Scripts/utils/notify.py - dingding_bot(access_token, secret, title, content) dingding_bot推送错误]')
        # print(f'\n[⚠ /Scripts/utils/notify.py - dingding_bot(access_token, secret, title, content) dingding_bot推送错误]\n{symbol}\n{traceback.format_exc()}{symbol}')


def server_chan(sckey, title, content):
    """
    serverChan机器人推送
    :param sckey:
    :param title:
    :param content:
    :return:
    """
    try:
        data = {
            'text': title,
            'desp': content
        }
        response = requests.post('https://sc.ftqq.com/%s.send' % sckey, data=data, timeout=15)
        print(response.text)
    except:
        symbol = '-' * 50
        print(f'\n[⚠ /Scripts/utils/notify.py - server_chan(sckey, title, content) serverJ推送错误]')
        # print(f'\n[⚠ /Scripts/utils/notify.py - server_chan(sckey, title, content) serverJ推送错误]\n{symbol}\n{traceback.format_exc()}{symbol}')


def send(title, content, notify_mode):
    """
    使用 bark, telegram bot, dingding bot, serverJ 发送手机推送
    :param title:
    :param content:
    :return:
    """
    try:
        config_latest, config = read(skip_check_version=True)  # 调用utils包中的config.py的read函数并且跳过版本检测
        if config['notify']['enable']:
            for i in notify_mode:
                if i == 'bark':
                    # bark
                    bark_machine_code = config['notify']['type']['bark']['BARK_MACHINE_CODE']
                    if bark_machine_code:
                        bark(bark_machine_code=bark_machine_code, title=title, content=content)
                    else:
                        print('未启用 bark')
                    continue
                elif i == 'dingding_bot':
                    # dingding
                    dd_bot_accsee_token = config['notify']['type']['dingding_bot']['DD_BOT_ACCESS_TOKEN']
                    dd_bot_secret = config['notify']['type']['dingding_bot']['DD_BOT_SECRET']
                    if dd_bot_accsee_token and dd_bot_secret:
                        dingding_bot(access_token=dd_bot_accsee_token, secret=dd_bot_secret, title=title, content=content)
                    else:
                        print('未启用 钉钉机器人')
                    continue
                elif i == 'telegram_bot':
                    # telegram_bot
                    tg_bot_token = config['notify']['type']['telegram_bot']['TG_BOT_TOKEN']
                    tg_user_id = config['notify']['type']['telegram_bot']['TG_USER_ID']
                    if tg_bot_token and tg_user_id:
                        telegram_bot(tg_bot_token=tg_bot_token, tg_user_id=tg_user_id, title=title, content=content)
                    else:
                        print('未启用 telegram机器人')
                    continue
                elif i == 'server_chan':
                    # serverChan
                    sckey = config['notify']['type']['server_chan']['SCKEY']
                    if sckey:
                        server_chan(sckey, title, content)
                    else:
                        print('未启用 serverChan')
                    continue
                else:
                    print('此类推送方式不存在')
        else:
            print('未启用消息推送，请在 config.yml 中将 notify - enable 设置为 true')
    except:
        symbol = '-' * 50
        print(f'\n[⚠ /Scripts/utils/notify.py - send(title, content) 错误]\n{symbol}\n{traceback.format_exc()}{symbol}')


def main():
    send('title', 'content', notify_mode=['bark'])


if __name__ == '__main__':
    main()
