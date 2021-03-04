name: 腾讯自选股

on:
  workflow_dispatch:
  schedule:
    - cron: '0 8 * * *'
  # watch:
  #       types: started
  # repository_dispatch:
  #   types: txstock
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    env:
      URL: "https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/jrtt.js"
      RUNFILE: "txstock.js"
      USERHEADER: ${{ secrets.TXS_USERHEADER }}
      USERKEY: ${{ secrets.TXS_USERKEY }}
      CASHHEADER: ${{ secrets.TXS_CASHHEADER }}
      SIGNHEADER: ${{ secrets.TXS_SIGNHEADER }}
      SIGNKEY: ${{ secrets.TXS_SIGNKEY }}
      TASKHEADER: ${{ secrets.TXS_TASKHEADER }}
      TASKKEY: ${{ secrets.TXS_TASKKEY }}
      WXTASKKEY: ${{ secrets.TXS_WXTASKKEY }}
      PUSH_KEY: ${{ secrets.PUSH_KEY }}
      BARK_PUSH: ${{ secrets.BARK_PUSH }}
      BARK_SOUND: ${{ secrets.BARK_SOUND }}
      TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
      TG_USER_ID: ${{ secrets.TG_USER_ID }}
      DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
      DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}
      IGOT_PUSH_KEY: ${{ secrets.IGOT_PUSH_KEY }}
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        #with:
        #  repository: Sunert/Scripts
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Cache node_modules
        uses: actions/cache@v2 # 使用 GitHub 官方的缓存 Action。
        env:
          cache-name: cache-node-modules
        with:
          path: node_modules
          key: ${{ runner.os }}-${{ env.cache-name }}-${{ hashFiles('package-lock.json') }} # 使用 package-lock.json 的 Hash 作为缓存的 key。也可以使用 package.json 代替
      - name: npm install
        #if: env.JRTTSIGNKEY
        run: |
          npm install
      - name: '运行 【腾讯自选股】'
        #if: env.JRTTSIGNKEY
        run: |
          node Task/txstock.js
