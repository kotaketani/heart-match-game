# ふたりの心あてゲーム

GitHub Pages で公開できる静的アプリです。  
リアルタイム相互プレイは `GitHub Pages + Supabase Realtime` を前提にしています。

## できること

- 同じ端末で交互に遊ぶローカルモード
- 2人が別端末から入るオンラインモード
- ルームコード共有
- 回答、予想、結果のリアルタイム同期

## GitHub Pages で公開する手順

1. このリポジトリを GitHub に push する
2. GitHub の `Settings > Pages` を開く
3. `Deploy from a branch` を選ぶ
4. ブランチは `main`、フォルダは `/ (root)` を選ぶ
5. 数分待つと公開 URL が発行される

## Supabase 設定

GitHub Pages だけではリアルタイム通信ができないため、Supabase Realtime を使います。

1. Supabase で新規プロジェクトを作る
2. `Project Settings > API` で以下を確認する
   - `Project URL`
   - `anon public key`
3. ルートの `config.js` を編集する

```js
window.APP_CONFIG = {
  supabaseUrl: "https://YOUR_PROJECT.supabase.co",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY",
};
```

4. Supabase の Realtime が有効になっていることを確認する

この実装は Broadcast/Presence ベースなので、追加のテーブル作成は不要です。

## 使い方

1. 公開 URL を2人で開く
2. `オンライン` を選ぶ
3. 片方がルーム作成、もう片方が同じコードで参加
4. それぞれ自分の役割を `彼女` / `あなた` で選ぶ
5. どちらかが開始すると、回答と予想が同期される

## 注意

- Supabase の URL と anon key を入れないとオンライン機能は使えません
- anon key は公開クライアント用キーなので、GitHub Pages 上で使う前提です
- ルーム状態はメモリ同期なので、両者がページを閉じるとセッションは消えます
