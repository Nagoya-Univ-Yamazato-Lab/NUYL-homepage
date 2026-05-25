---
templateKey: pages-en-white
lang: en
title: Prospective students
description: Thinking about joining Yamazato Laboratory? We'd love to hear from you.
date: 2026-05-25T07:57:21.383Z
tags:
  - Prospective students
  - Study at Yamazato lab
---
We are always looking for curious, self-motivated students who want to push the boundaries of communication engineering. 
Whether you enjoy hands-on experiments, building mathematical models, or diving into theory — there is a place for you here.

What we value most is a collaborative spirit. Our students learn from each other, respect different perspectives, and take ownership of their own growth. 
We work hard, but we also support one another.

---

## What We Work On

Our research spans the full stack of next-generation communications — from building and testing real systems outdoors and on moving vehicles, to proving fundamental limits in information theory and designing AI-native transceivers. Two faculty members lead complementary directions that frequently intersect.



### 🚗 V2X Visible Light Communication

Light-based vehicle-to-everything (V2X) communication is our flagship research area. Using LED arrays and image sensors already embedded in standard vehicles, we enable safe, high-speed data exchange between cars and infrastructure — without consuming any radio spectrum.

- **Rolling shutter image sensors:** reliable VLC demonstrated up to 60 km/h; long-range demodulation using complementary raw and processed image fusion ([Kondo et al., IEICE Commun. Express, 2026](https://okadalab.org/dbase/detail-e.php?idnum=2967&cid=1))
- **Event cameras:** V2X communication, inter-vehicle distance estimation, and integrated communication + positioning in real outdoor driving environments ([Soga et al., IEEE IV, 2025](https://arxiv.org/abs/2505.15412); [Kobayashi et al., IEEE IV, 2025](https://arxiv.org/abs/2505.17582); [Soga et al., APCC, 2025](https://arxiv.org/abs/2510.17203))
- **Collective Perception (CP):** sharing sensor data among vehicles via VLC to enhance safety in autonomous driving; feasibility confirmed in outdoor experiments ([Nakano et al., IEEE ICC, 2026](https://okadalab.org/dbase/detail-e.php?idnum=3001&cid=1); [Yamazato et al., IEICE Trans., 2026](https://okadalab.org/dbase/detail-e.php?idnum=2942&cid=1))
- **Semantic ISC/OCC:** combining camera-based sensing with data transmission for context-aware communication (IEEE P802.15 standardization activity)
- **LDPC-coded VLC:** iterative detection-decoding receiver design for reliable high-speed optical V2X links (Kuo et al., IEEE VTC, 2026)



### 💡 Image Sensor Communication (ISC) & Novel Transmitters

We develop transmitters that go far beyond a simple blinking LED.

- **Propeller LED transmitter:** LEDs on a rotating arm generate "light trails" — a unique signal format enabling high-capacity ISC; theoretical ISI models and BER analysis now available ([Asaoka et al., *IEEE Communications Letters*, 2026](https://doi.org/10.1109/LCOMM.2026.3691874); [Asaoka et al., IEICE Commun. Express, 2025](https://okadalab.org/dbase/detail-e.php?idnum=2933&cid=1))
- **High-density LED arrays:** pilot-aided geometric recognition for robust decoding when LED spots overlap due to optical distortion ([Shi et al., APCC, 2025](https://okadalab.org/dbase/detail-e.php?idnum=2952&cid=1))
- **Display-camera VLC:** data transmission via high-speed displays and rolling shutter cameras; inverse-frame methods for improved throughput and visual quality ([Okawa et al., *IEEE Photonics Journal*, 2025](https://okadalab.org/dbase/detail-e.php?idnum=2940&cid=1))
- **Rotary LED transmitter:** Alamouti-type space-time coding for reliable long-distance ISC ([Tang et al., *IEEE Photonics Journal*, 2022](https://doi.org/10.1109/JPHOT.2021.3137601))
- **Rolling shutter VLC at 50 km/h:** V2I system with LED array and rolling shutter image sensor ([Kondo et al., IEICE Trans. Commun., 2025](https://doi.org/10.14923/transcomj.2024GWL0003))

For a comprehensive review of image sensor communication and its vehicular applications, see [Huang & Yamazato, *Photonics*, 2023](https://doi.org/10.3390/photonics10060617).



### 📐 Information Theory & Channel Coding

This is where we ask the deeper questions: what are the fundamental limits of a channel, and how close can we get? Led by Lecturer Shan Lu, this research strand feeds directly into both our VLC systems and large-scale wireless networks.

- **Signature codes for multiple-access channels:** constructing uniquely decodable codes for adder channels, with extensions to fading environments; end-to-end ML-aided design ([Lu et al., *IEEE Trans. Inf. Theory*, 2015](https://ieeexplore.ieee.org/document/7270311/); [Wei et al., *IEICE Trans. Fundamentals*, 2022](https://www.jstage.jst.go.jp/article/transfun/E105.A/3/E105.A_2021TAP0008/_article); [Wei et al., *IEICE Trans. Fundamentals*, 2026](https://okadalab.org/dbase/detail-e.php?idnum=3002&cid=1))
- **Unsourced random access:** coded compressed sensing approaches; improving the maximum number of tolerable active users ([Lu & Kamabe, IEEE ISIT, 2024](https://okadalab.org/dbase/detail-e.php?idnum=2922&cid=1); [Lu & Kamabe, ISITA, 2022 🏆 Best Paper](https://ieeexplore.ieee.org/document/10683908/))
- **Polar codes & LDPC:** deep-learning-aided decoding, rate-compatible spatially coupled LDPC, and eBCH-polar code decoding ([Liang et al., *IEEE Trans. Cognitive Commun. Netw.*, 2024](https://ieeexplore.ieee.org/document/10288478/); [Lu et al., *IEEE VTC*, 2025](https://okadalab.org/dbase/detail-e.php?idnum=2946&cid=1))
- **Information-spectrum-based theoretical analysis of ISC:** JSPS-funded project (2025–2029) developing the theoretical foundation for image sensor communication



### 🤖 Physical AI Communication

Our broader research vision is **Physical AI Communication**: designing communication systems by grounding AI in physical models. The pipeline runs from real-world measurement → digital twin construction → AI-aided transceiver design → system evaluation. See [Dr. Lu's project page](https://shanlu-nagoya.github.io/projects/physical-ai-communication/index.html) for details.

- **AI-native receiver design** for optical and sensing-integrated 6G systems
- **Machine learning × channel coding:** learned encoders/decoders for multi-access channels ([Wei et al., IEEE GLOBECOM Workshops, 2020](https://ieeexplore.ieee.org/document/9322258/))
- **Human safety perception in V2X:** next-generation V2X design integrating human trust and safety cognition (Toyota Riken Scholar 2026 project)



### ⚡ Stochastic Resonance & Low-Power Receivers

We take a counterintuitive approach: we use noise to improve reception. By leveraging stochastic resonance, a 1-bit ADC receiver — far simpler and more power-efficient than conventional designs — can demodulate 16-QAM and OFDM signals reliably across a wide SNR range, including fading channels ([Isozaki et al., *IEEE GLOBECOM*, 2024](https://doi.org/10.1109/GLOBECOM52923.2024.10901412); [Isozaki et al., *IEICE Commun. Express*, 2024](https://www.jstage.jst.go.jp/article/comex/13/8/13_2024TCL0018/_article/); [Arai et al., *IEEE ISCAS*, 2021](https://doi.org/10.1109/ISCAS51556.2021.9401452)).



### 🛰️ Satellite & Large-Scale IoT

- **OTFS-SDMA for massive grant-free random access** in LEO satellite IoT ([Ren et al., *IEEE Trans. Wireless Commun.*, 2025](https://doi.org/10.1109/TWC.2025.3556873))
- **Hybrid neural network for adaptive user-activity detection** in massive IoT access ([Sun et al., *IEEE Internet of Things J.*, 2025](https://doi.org/10.1109/JIOT.2025.3542398))
- **LEO satellite MIMO:** feeder link capacity improvement using inter-satellite links to prevent temporary capacity drops ([Sakai et al., IEEE VTC, 2026](https://okadalab.org/dbase/detail-e.php?idnum=3004&cid=1))
- **Private 5G + VLC integration:** testbed for connecting VLC terminals to 5G core networks ([Zheng et al., IEEE ISCC, 2023](https://doi.org/10.1109/ISCC58397.2023.10218188))



### 🔐 Physical-Layer Security

- **Scratch-based optical PUF** (Physically Unclonable Function): a low-cost authentication method exploiting the unique scattering pattern of a scratched surface ([Noda et al., IEEE VTC Workshop, 2025](https://doi.org/10.1109/VTC2025-Spring65109.2025.11174849))



### 📡 Sensing

- **Event camera-based monocular distance estimation** in outdoor driving (20–60 m range, >90% success rate, sub-0.5 m error) ([Kobayashi et al., *IEICE Trans. Commun.*, 2026](https://okadalab.org/dbase/detail-e.php?idnum=2959&cid=1))
- **Simultaneous VLC and ranging** using high-speed stereo cameras ([Huang et al., *IEICE Trans. Fundamentals*, 2023](https://doi.org/10.1587/transfun.2022EAP1078))
- **Obstacle position estimation** using ultrasonic sensor arrays ([Hattori et al., *IEICE Commun. Express*, 2023](https://doi.org/10.1587/comex.2023XBL0045))



We are open to new ideas beyond the above themes. If you have a strong proposal, please share it.

To get a feel for our work, we encourage you to browse our [full publication list](https://yamazato.nuee.nagoya-u.ac.jp/en/publications/).

---

## How to Apply

Students interested in joining as a **research student**, **graduate student (Master's or Ph.D.)**, or **postdoctoral fellow** should contact **Prof. Yamazato** or **Lecturer Shan Lu** directly with a letter of interest in PDF format.

In your message, please include:

- Which research theme(s) you are interested in
- Your relevant background and experience



## A Note on Financial Support

Unfortunately, the laboratory is unable to provide financial support for students. Please make sure to secure scholarships or other funding independently before applying.



## Admission Information

For general admission to Nagoya University:
→ <https://en.nagoya-u.ac.jp/admissions/index.html>

For the Graduate School of Engineering admission guide:
→ <https://www.engg.nagoya-u.ac.jp/prospective/?lang=en>

For information on studying in Japan:
→ <https://www.studyinjapan.go.jp/en/>

<!-- 
-----

We are always interested in having talented and motivated students on our team. We value students who learn from each other and respect the opinions of lab members and colleagues. In addition, we desire to create an atmosphere that promotes personal growth and success.

Students in our lab tackle a wide range of communication engineering problems using a variety of approaches, including experimentation, modeling, and theoretical analysis. Because much of our research is conducted as a collaborative effort, students should be able to work effectively in a group setting. Students interested in joining Yamazato Laboratory as a research student, graduate student (master, Ph.D.), or postdoctoral fellow should contact Prof. Yamazato directly with a letter of interest in PDF format.

The following research is currently being conducted in the Yamazato Laboratory. Therefore, when contacting Professor Yamazato, please indicate which of these themes you would like to work on and how much background knowledge you have for this purpose. Of course, the other research topic is also possible, so please send us good proposals.

- Visible light communications (VLC)

  - VLC for automobile

    - Integrated ranging and communication using a high-speed camera
    - VLC signal reception using a rolling shutter image sensor
    - VLC signal reception using an event camera

  - New VLC transmitter
    - Rotary LED transmitter
    - Propella LED transmitter

- Stochastic resonance (SR) for communications

  - Noise-enhanced analog to digital converter

- Beyond 5G and 6G

  - Connecting VLC terminals to 5G core networks

- Obstacle position estimation using an ultrasonic sensor array

We suggest reading some of our published papers so that you will have some ideas of what we are working on.

Unfortunately, our lab does not provide financial support for students. Therefore, please obtain scholarships and other necessary funds on your own. Also, Prof. Yamazato will not assist you in obtaining scholarships.

For admission to Nagoya University, please refer to the following.

https://en.nagoya-u.ac.jp/admissions/index.html

Also, please refer to the following for the admission guide for the Graduate School of Engineering.

https://www.engg.nagoya-u.ac.jp/prospective/?lang=en

There is also a lot of helpful information on this site.

https://www.studyinjapan.go.jp/en/ -->
