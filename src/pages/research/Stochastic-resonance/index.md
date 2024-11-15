---
templateKey: pages
title: 確率共鳴による微弱通信
description: 確率共鳴とは、システムへの入力雑音の増大と共にそのシステムの応答が向上する現象のことです．私たちは，この確率共鳴現象の通信への応用を研究しています．
date: 2021-04-01T11:00:57.137Z
tags:
  - 確率共鳴
  - 微弱通信
---

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/499501573?h=57a52fd782&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="確率共鳴（Stochastic Resonance）"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

---

## 確率共鳴

![図1：確率共鳴系(非線形システム)と一般的な系である線形システムの出力SNR特性](./sr4.jpg)

図 1 に確率共鳴系(非線形システム)と一般的な系である線形システムの出力 SNR 特性を示します。線形システムにおいては、入力雑音電力が増大すると出力 SNR が低下します。
しかし、確率共鳴系においては、雑音電力の増大と共に出力 SNR が向上する領域が見られます。

## 確率共鳴による超微弱通信

我々の研究室では，確率共鳴現象の通信への応用について検討しています．
具体的には，確率共鳴現象を応用することで従来の受信機では感知することもできない微弱信号（sub-threshold signal）を用いた通信の実現に挑戦しています．
これにより極低電力通信システムが実現でき，また、エネルギーハーベスティングを利用することでグリーンワイヤレス、グリーンネットワークを実現できます．

![図２：確率共鳴を利用した受信機](./sr_sys4.jpg)

図２に確率共鳴受信機を示します。

送信信号は図２左上に示すように受信機の受信感度（η）未満の信号を想定します。このとき、通常の受信機では信号を感知することすらできず、よって、受信機からな何も出力されません。

一方、確率共鳴受信機では、故意に雑音を加えます。こうすることで、図２右上に示すように信号＋雑音が受信機の受信感度（η）を（確率的に）上回ります。つまり、受信機の受信感度を超えることになり、受信感度未満の信号であっても受信できるようになります。これが、確率共鳴受信機の簡単な原理です。

この度、確率共鳴現象の情報通信へ応用を解説した論文が第 76 回（令和元年度）電子情報通信学会論文賞を受賞しました。

（受賞論文へのリンク：https://search.ieice.org/bin/summary.php?id=j102-b_6_445&category=B&year=2019&lang=J）
