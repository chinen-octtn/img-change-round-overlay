# 画像切り替えサンプル

画像が重なって切り替わるアニメーションのサンプルです。

## ローカル開発時の動作確認済み環境

- macOS Big Sur 11.6.1
- node v16.13.0
- npm v8.1.0

### VS Code 拡張機能(Extensions)

[Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)を推奨環境としています。

タスクと連携のため下記 Extensions を追加してください。

- EditorConfig for VS Code
- Prettier - Code formatter
- Styelint
- ESLint

### ローカル開発環境の起動

初回のみ

```
npm i
```

```
npm start
```

2 回目以降

```
npm start
```

## ディレクトリ構成

`/src/` で開発用ファイルを管理します。

`/docs/` に各種変換/コンパイル/ビルドしたファイルが格納されます。
`/docs/` 配下のファイルは直接編集してはいけません。

gitignore で除外していますが Heroku 等の deploy 環境で Git に含む必要がある場合は、gitignore を編集してください。

ローカルサーバーでは `/docs/` ディレクトリをドキュメントルートとして表示します。
