#!/usr/bin/env python3
# _*_ coding:utf-8 _*_

# @Time    : 2020/11/30 1:13
# @Author  : TNanko
# @Site    : https://tnanko.github.io
# @File    : configuration.py
# @Software: PyCharm
import sys
import os
cur_path = os.path.abspath(os.path.dirname(__file__))
root_path = os.path.split(cur_path)[0]
sys.path.append(root_path)
import yaml
import requests
import traceback
from setup import BASE_DIR

def check_version():
    """
    配置文件版本监测
    :return:
    """
    # url = 'https://cdn.jsdelivr.net/gh/TNanko/Scripts/master/config/config.yml.example'
    url = 'https://raw.fastgit.org/TNanko/Scripts/master/config/config.yml.example'
    try:
        response = requests.get(url=url, headers={'Connection': 'close'}, timeout=(5, 10)).text
        config_latest = yaml.load(response, Loader=yaml.FullLoader)  # <class 'dict'>
        print('获取最新配置文件版本成功！')
        return config_latest
    except:
        print('请求超时，获取最新配置文件版本失败！请检查当前网络是否可以访问 github')
        return

def compare_version(config_latest, config_current):
    try:
        # 是否跳过配置文件版本检测
        if not config_current['skip_check_config_version']:
            if config_latest:
                if config_current['version'] < config_latest['version']:
                    print(f"检测到最新的配置文件版本号为{config_latest['version']}，当前配置文件版本号：{config_current['version']}，可能出现新的脚本配置或者当前版本配置变更\n访问 https://raw.githubusercontent.com/TNanko/Scripts/master/config/config.yml.example 查看最新配置文件")
                else:
                    print('当前配置文件为最新版本')
            else:
                print('未获取到最新配置文件的版本号')
            return config_latest, config_current
        else:
            print('参数 skip_check_config_version = true 跳过配置文件版本检测...')
    except:
        print('程序运行异常，跳过配置文件版本检测...')
        return None, config_current

def read(skip_check_version=False):
    """
    支持 github action 和本地文件读取（github action 未测试）
    :return: 返回配置信息
    """
    if 'CONFIG' in os.environ:
        config_current = yaml.load(os.environ['CONFIG'], Loader=yaml.FullLoader)
        # 配置文件的版本检测
        config_latest = None
        if not skip_check_version:
            config_latest = check_version()
            config_latest, config_current = compare_version(config_latest=config_latest, config_current=config_current)
        # 报错或者跳过版本检测直接返回当前配置
        return config_latest, config_current
    else:
        path = BASE_DIR + '/config/config.yml'
        with open(path, mode='r', encoding='utf-8') as obj:
            config_current = yaml.load(obj, Loader=yaml.FullLoader)  # <class 'dict'>
            config_latest = None
            if not skip_check_version:
                # 配置文件的版本检测
                config_latest = check_version()
                config_latest, config_current = compare_version(config_latest=config_latest, config_current=config_current)
            return config_latest, config_current


if __name__ == '__main__':
    print(read())
    # check_version()
