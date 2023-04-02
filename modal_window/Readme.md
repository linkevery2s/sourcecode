![screen](https://user-images.githubusercontent.com/23306970/229340166-d0197df9-9b16-457e-a8a2-5dc3d80ce0ee.jpg)


# モーダルウィンドウを表示するAPI(jQuery不要)

jQueryを使わずに、モーダルウィンドウを表示するAPIを作成してみました。


# 作ったきっかけ

WEBアプリを開発しているのですが、作るたびにCSSやJavaScriptを作成しないといけなかったので、「だったらAPIにしちゃおう！」と思ったわけです。


# 使い方
1. CDN読み込み
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/linkevery2s/sourcecode/modal_window/main.css">
<script src="https://cdn.jsdelivr.net/gh/linkevery2s/sourcecode/modal_window/main.js"></script>
```

2. html記述

```
<div class="modal js-modal">
　　<div class="modal_bg" onClick="closed()"></div>
　　　　<div class="modal_content"><span class="closed" onClick="closed()">×</span>
　　　　　　　Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
　　　　　　　tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
　　　　　　　quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
　　　　　　　consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
　　　　　　　cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
　　　　　　　proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
　　　　</div>
</div>
```
3. スタイルはお好みで
CSSで、"modal_content"を修正すれば、OKです。

```
  .modal_content{
    background: #ffffff;
    padding: 10px;
  }
```

MITライセンスです。自由にご利用ください。
