---
templateKey: pages
lang: ja
title: おならでもつうしんできる？ーなるほど！つうしんのしくみー
description: けいたいでんわは、でんぱを使って音をとおくにとどけます。でも、ちかいところであれば、糸を使っても音をとどけることができます。そう、糸でんわですね！じつは、糸だけじゃなく、光や音を使ってもつうしんすることができます。このしくみが分かれば、「おなら」でもつうしんができるかもしれません。このじゅぎょうでは、「おならつうしん」にチャレンジします。みんな，おならでつうしんはできるかな？
tags:
  - おならでもつうしんできる？
  - なるほど！つうしんのしくみ
  - 名古屋大学 夏のテクノロジーフェスティバル
  - NU Tech Festival 2024 Summer
---
# [名古屋大学 夏のテクノロジーフェスティバル](https://tech.imass.nagoya-u.ac.jp/)
# [おならでもつうしんできる？](https://tech.imass.nagoya-u.ac.jp/lecture.html#L4B)
#### なるほど！つうしんのしくみ

- セッションコード：[L4B](https://tech.imass.nagoya-u.ac.jp/lecture.html#L4B)
- 対象：小学（特に低学年・中学年におすすめ）
- 定員：250名
- 会場：名古屋大学　坂田・平田ホール
- 日時：2024年8月28日（水）４時間目（15:20-16:50）
- 担当：[教養教育院](https://www.ilas.nagoya-u.ac.jp)、[工学研究科情報・通信工学専攻](https://www.nuee.nagoya-u.ac.jp)　[教授　山里敬也](../../../team/Takaya-Yamazato)

<!-- ![山里敬也](../../../team/TakayaYamazato2012.jpeg) -->

## 概要

けいたい電話は、電波を使って音を遠くに届けます。でも、近いところであれば、糸を使っても音を届けることができます。そう、糸電話ですね！じつは、糸だけじゃなく、光や音を使っても通信することができます。このしくみが分かれば、「おなら」でも通信ができるかもしれません。この授業では、「おなら通信」にチャレンジします。みんな、おならで通信はできるかな？


> ## 参加される保護者の皆様へのお願い<!-- omit in toc -->
>
> この度は、名古屋大学夏のテクノロジーフェスティバルへご応募くださり、ありがとうございます。
> L4B「おならでもつうしんできる？なるほど！つうしんのしくみ」の講師を務めます、名古屋大学の山里でございます。
>
> さて、この講演では参加者の皆様に実際に「おならの音」を使った通信を試していただく予定です。そこで、皆様に「おならの音」「おならの音」を録音して、ぜひお送りいただきたいと思います。ご家族でも、お友達でも、もちろんペットのおならの音でもかまいません。ご協力いただけますと幸いです。
> 
> 録音した「おならの音」をお送りいただける方はお手数ですが
> 
>    onara@yamazato.nuee.nagoya-u.ac.jp
>
> までご連絡ください。折り返しアップロード用URLをお送りします。
>「おならの音」のご提供は、もちろん任意ですが、多数の方にご協力いただけますと幸いです。
>
>ご提供いただいた「おならの音」は名古屋大学での教育・研究目的（本講演を含む）にのみ利用させていただき、それ以外では利用しません。ご提供いただく方のプライバシーには配慮し、お名前などは一切公表いたしません。公表に差し障りのないイニシャル、ニックネームなどを併せておらせ頂けますと講演中にご紹介できます。
>
>どうぞたくさんの「おならの音」をご提供くださいますよう、お願い申し上げます。
>
>また、当日はおならを模擬した音を出せるものをご持参ください。パフパフと鳴るおもちゃのラッパなどで構いません。もちろん、お子様ご自身が「プーッ」と叫んでもらっても構いません。お子様とご相談の上、ご準備ください。

---

このページでは[名古屋大学 夏のテクノロジーフェスティバル](https://tech.imass.nagoya-u.ac.jp/)の[おならでもつうしんできる？](https://tech.imass.nagoya-u.ac.jp/lecture.html)について、知っておいて欲しいことを書くね。

お父さん、お母さんと一緒に読んでね！

---

## 目次　 <!-- omit in toc -->

- [「おなら通信」チャレンジ！](#fart-challenge)
- [おならでSOSを送ってみよう！（おなら通信のしくみ）](#how-it-works)
- [おならのにおいでも通信はできるの？（デジタル通信の原理）](#smell-communication)
- [もっと早い通信はできるの？（光を使った通信と電波を使った通信）](#wired-and-wireless-communication)

---

<a id="fart-challenge"></a>

## 「おなら通信」チャレンジ！

<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">先生、この授業では「おなら通信」にチャレンジするって書いてあるけど、ほんとうにおならで通信するの？</p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">もちろん。</p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">でも，授業中にみんなが　プッ　プッ　プー　とおならしたら，教室がおならでいっぱいになってたいへんだよ。マスクをもってくるようにアナウンスしなきゃ。</p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">それはこまったなぁ、どうしよう・・・</p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">だいじょうぶだよ。ぼく、くさくないおならのしかた知っているもん。ぜんぜんくさくないよ。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">え、どうやるの、おしえて。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">早寝、早起き、毎日ぐっすりねむること。好ききらいなく、何でもよく食べること。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">なるほど。お肉ばっかり食べていると、つぎの日のおならはくさいからね。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">そう。お肉じゃなくお野菜をたくさん食べるといいよ。それから体をうごかして、運動するのも良いよ。ぼくは毎日ラジオたいそうをやっているよ。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">健康的でいいね。おならくんはすばらしいね！
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">でも、先生、おならって声みたいに出そうとおもっても、　プ〜　って出ないよ。授業のときにおなら出ないかも。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">それはこまったなぁ、おならが出ないと通信もできないぞ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">おならの音を録音して使ったらどう？ぼくのおならは　プ〜　って、明るく元気な音がするよ。録音したおならの音はつかえる？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">いいねぇ。みんなにおならの音を録音して送ってもらおうか。それをつかった通信を考えるね。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">ぼく、おもちゃのラッパを持っているけど、パフパフってぼくのおならの音と似ているよ。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">パフパフラッパならくさくないので教室にもってきてもいいよ。それをつかって「おなら通信」をためしてみよう。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">なんだか、とても楽しそうな授業だね！期待してもいい？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">もちろん！みんなのおならの音で通信しちゃうね。おならの音をたくさん送ってね！
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">うん、わかった。プゥ〜って元気な大きな音のおならを録音できるようにがんばるね！
    </p>
</div>

-------

<a id="how-it-works"></a>

## おならでSOSを送ってみよう！（おなら通信のしくみ）

<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">先生、おならでどうやって通信するの？おしえて。
    </p>
</div><div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">それは授業の日までお楽しみにして。でも、ちょっとだけ教えるね。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">わくわく。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">おならくんはタイタニック号って知ってる？
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">知っているよ。ローザが乗っていた船でしょ。氷山（ひょうざん）にぶつかって沈没（ちんぼつ）するのだよね。ザ・ドラえもんズ スペシャルで読んだよ。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">おぉ、おならくんすごい。よく知っているね。映画の方が有名だと思うけど、ドラえもんにも載っているのだね。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">映画はお母さんが観たことあるって話してた。ヒロインのローズが船の先で手を広げるシーンが有名だって。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そのタイタニック号から世界で初めてSOS信号が送られたんだ。注１）
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">SOS信号？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">SOSは英語で私たちの船を助けてください（Save Our Ship）のことで遭難信号（そうなんしんごう）なんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">そうなんだ。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">ハハハ、しゃれだね。<br>当時はSOS信号を出すのに火花を使ったんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">火花？電波（でんぱ）じゃないの？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そう。火花が出るときに電波（でんぱ）も一緒に出るんだ。電波は遠くまで飛ぶので船から地上まで信号を届けることができるんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">でも、火花でどうやってSOS信号を表したの？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">おならくん、いいところに気づいたね。<br>
    火花を出したり、火花を消したりしたの。そうすると、電波も出たり、出なかったりするでしょ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">なるほど、電波を出したり、出さなかったりしたんだね。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そう。さらに短い時間の火花と少し長い時間の火花とでSOS信号を表したんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">短い火花と長い火花？つまり電波が短い時間ものと長い時間つづくものとでSOS信号を表したの？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">その通り。短い電波は音で表すと「ツ」になるかな。長い時間の電波は「ツー」。その２つの組み合わせで SOS 信号を表したんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">「ツ」と「ツー」。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そう。Sは「ツ」を３回、つまり「ツツツ」。Oは「ツー」を３回、つまり「ツーツーツー」。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">ということは、SOSは「ツツツ　ツーツーツー　ツツツ」になるの？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">その通り。おならくんは素晴らしいね！
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">えへへ。<br>
    ということは、おならでやると「プップップッ　プゥ〜プゥ〜プゥ〜　プップップッ」になるの？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">おぉ、素晴らしい。よく分かったね。<br>
    それにしても、ちょっとだけ種明かしをするつもりだったけど、全部バレちゃったなぁ。ハハハ。
    </p>
</div>

> 注１）上記で「タイタニック号が世界初のSOSを発した」と説明しましたが、実際にはタイタニック号が最初ではありません。タイタニック号の悲劇と併せてSOSが最初と述べている書物も多いことからそのように書きました。印象に残りやすいですしね。より詳しく知りたい方は[Wikipedia](https://ja.wikipedia.org/wiki/SOS)をご覧下さい。
> 

-----

<a id="smell-communication"></a>

## おならのにおいでも通信はできるの？（デジタル通信の原理）

<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">おなら通信分かったもんね、へへへ。でも、SOSをおならでやるのは難しいなぁ。練習してもできないかも。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そうだね、普通の人には難しいと思うよ。でもね、おならで歌を歌うことができる人もいるんだよ。きっとこの人ならSOSも簡単にできると思うよ。このページの最後に紹介するね。
    </p>
</div>

<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">先生、でも、おならの「音」で通信できるのなら、おならの「におい」でも通信はできるの？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">おならくん、いいところに気づいたね。さすがだよ。そう、おならのにおいでも通信はできるよ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">どうやってやるの？教えて。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">おならの音を使った通信では、短いおならの音「ブッ」と長いおならの音「プゥ〜」の２つの音を使ったよね。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">うん。「プッ」と「プゥ〜」だね。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そう。実はこの２つということろがポイントなんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">２つ？何か違うものが２つあれば通信ができるの？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そう、その通り。「プッ」と「プゥ〜」の２つ。あるいは、単に「ブッ」ともう一つは何も音がしないことでも良いよ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">「ブッ」と「しーん（音がしない）」ってこと？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そう。音が「する」か「しない」か。これを「１」と「０」で表すの。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">「する」、「しない」を「１」と「０」？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">その通り。電波の場合だと電波が「ある」か「無い」か。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">ということは、おならのにおいだと「においがする」か「においがしない」なのかな？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">その通り。おならのにおいがする場合を「１」、しない場合を「０」とすれば良いよ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">「１」と「０」ということは、これがデジタルなの？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">さっすが、おならくん、その通りだよ。<br>
    情報を送る方と受け取る方とで２つの区別がつけば、何を使っても通信ができるんだよ。この場合「１」と「０」を使うのでデジタル通信と言うんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">「１」と「０」だからデジタル通信なんだね。すごい。デジタルって言うからもっと難しいのかと思っていたよ。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">実はね、通信の原理としてはデジタル通信がもっとも簡単なの。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">おならのにおいでデジタル通信ができるなんて、ちょっと、びっくりしちゃうな。おならのにおいがする、しないが「１」と「０」を表すのだね。なんだかすごいね！
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">でもね、デジタル通信にはもう一つ大事なことがあるんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">えっ、それは何？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">それはね、時間のことなんだ。どこからどこまでが「１」の時間で、どこからどこまでが「０」の時間なのか、ってこと。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">おならのにおいがする時間としない時間？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そう、その通り。おならくんのおならのにおいはどの位続くのかな？
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">そうだねぁ、だいたい１分ぐらいはにおっているかなぁ。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">なるほど。その場合、「１」あるいは「０」は１分おきに送ればよいね。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">と言うことは、たとえば、「１」「１」と送りたい場合は１分おきに「プゥ〜」「プゥ〜」とおならをすれば良いのかな？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">その通り。「１」「０」「１」の場合で考えてみようか。<br>
    最初は「１」なのでおならを「プゥ〜」、<br>
    次の１分後から２分までは「０」なので、おならをしないで「しーん（音がしない）」、<br>
    最後の２分後から３分までは「１」なので、また「プゥ〜」とおならをすれば良いよ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">なるほど、時計にあわせて１分おきにおならを「する」、「しない」で情報の「１」と「０」を送ることができるのだね。これがデジタル通信なのか！なんだか凄い！
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">でもね、この方法だと「１」はおならのにおいがするからすぐに分かるけど、「０」のところ、つまり「おならをしていない」ことは分かりにくい場合があるんだ。おならのにおいが長く続くこともあるからね。このため、さっきのSOSでは「プッ」と「プゥ〜」の長さの違う２つの信号を使って表現したんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">なるほど、さすが、かしこいね！
    </p>
</div>
<div class="balloon_r">
  <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">デジタル通信は「１」と「０」の２つで情報を伝送できるので簡単なんだけど、「１」と「０」の時間がはっきり分かる正確な時計も必要になるんだ。この時計が必要というところがデジタル通信のポイントなんだよ。
    </p>
</div>

------

<a id="wired-and-wireless-communication"></a>

## もっと早い通信はできるの？（光を使った通信と電波を使った通信）

<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">「おならのにおい」通信は情報を伝送するのに時間がかかるよね。なぜ時間がかかると思う？
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">それは、おならのにおいが無くなるまでに時間がかかるからだよ。だって、そうしないと「０」が分からなくなるもん！
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そうだね。では、もっと速い通信をするためにはどうすれば良いと思う？
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">この世の中で一番速いものを使って「１」と「０」を表せば良いのだね。<br>
    一番速いもの、というと．．．分かった「光」だね！
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">その通り。さすがおならくん、凄いね！<br>
    この世の中で最も速いものは「光」です。１秒間に地球を7回半も回る速さだよ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">ということは「光がある」、「なし」、で通信をすれば良いのかな？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">その通り。実は、光も電波も電磁波のひとつなんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">光と電波は仲間なんだね。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">光を使った通信に光ファイバー通信があるんだ。きっとおならくんのお家にも光ファイバーが入っているのでは？そこで使われていると思うよ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">なるほど。じゃぁ電波は？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">電波は主に携帯電話や無線LANの無線通信で使われているよ。光を使う光ファイバー通信も電波を使う無線通信のいずれもデジタル通信だよ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">たしかに光は、パッとついたり消えたりできるから、おならのにおいみたいに長い間においが続くことが無いね。しかも、この世の中で最も速い！
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そう。電波も光と同じ電磁波のひとつなので高速なんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">むむむ、ということは、光ファイバーも無線もこの世のなかで最も速い電磁波を使うので、もうこれ以上高速にはならないの？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">いや、そんなこと無いよ。でもね、さっきデジタル通信で必要と言った時計が難しいんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">時計？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そう時計。もっとちゃんというと「１」と「０」の時間を正確に表すために基準となる時間のこと。この基準となる時間を作る装置のことを発振回路と言うんだ。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">発振回路？
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">そう、発振回路。発振回路が刻む時間にあわせて「１」か「０」のいずれかを送るんだ。なので、発振回路が正確に短い時間で刻むことでが重要になるんだ。短い時間で「１」と「０」を切り替えることができれば、それだけ高速にたくさん送ることができるからね。
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">なるほど、高速な発振回路が必要なんだね。
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">
    </p>
</div>
<div class="balloon_l">
  <div class="faceicon">
    <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/fart.jpg" alt="おならくん" width="80px" height="80px" >
  </div>
    <p class="says">
    </p>
</div>
<div class="balloon_r">
    <div class="faceicon">
      <img src="https://yamazato.nuee.nagoya-u.ac.jp/img/Yamazato.jpg" alt="やまざと" width="80px" >
    </div>
    <p class="says">
    </p>
</div>
