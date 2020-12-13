#!/usr/bin/env python3
# _*_ coding:utf-8 _*_

# @Time    : 2020/11/29 17:08
# @Author  : TNanko
# @Site    : https://tnanko.github.io
# @File    : setup.py
# @Software: PyCharm

import os
from datetime import datetime, timezone, timedelta

BASE_DIR = os.path.split(os.path.abspath(os.path.realpath(__file__)))[0]

def get_standard_time():
    """
    获取utc时间和北京时间
    :return:
    """
    # <class 'datetime.datetime'>
    utc_datetime = datetime.utcnow().replace(tzinfo=timezone.utc)  # utc时间
    beijing_datetime = utc_datetime.astimezone(timezone(timedelta(hours=8)))  # 北京时间
    return utc_datetime, beijing_datetime

# if __name__ == '__main__':
#     get_standard_time()
