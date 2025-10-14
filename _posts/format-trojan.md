---
title: "Trojan Formats"
categories: [config]
description: "Trojan configurations including GFW, WS, GO/WS, XTLS, and gRPC."
author: "gilper0x"
date: 2025-10-14
---

<article class="post-content">

  <h1>Introduction</h1>

| Term           | Description                                                     |
|----------------|----------------------------------------------------------------|
| CDN            | Round-trip mode                                                |
| SNI            | Non-round-trip / SSL mode                                      |
| BUGSNI.COM     | Bug for SNI / SSL method                                       |
| BUGCDN.COM     | WebSocket bug as Host for round-trip method (CDN)             |
| IPCDN.COM      | WebSocket bug as IP for round-trip method (CDN)               |
| SERVER.COM     | Host / IP of the server you are using                         |

  <h1>Trojan GFW (SNI)</h1>
  <pre><code class="language-yaml">
- name: Trojan GFW (SNI)
  type: trojan
  server: SERVER.COM
  port: 443
  password: PASSWORD
  udp: true
  sni: BUGSNI.COM
  skip-cert-verify: true
  </code></pre>

  <h1>Trojan WS (SNI)</h1>
  <pre><code class="language-yaml">
- name: Trojan WS (SNI)
  server: SERVER.COM
  port: 443
  type: trojan
  password: PASSWORD
  skip-cert-verify: true
  sni: BUGSNI.COM
  network: ws
  ws-opts:
    path: /PATH
    headers:
      Host: BUGSNI.COM
  udp: true
  </code></pre>

  <h1>Trojan GO/WS (CDN)</h1>
  <pre><code class="language-yaml">
- name: Trojan GO/WS (CDN)
  server: IPCDN/BUGCDN.COM
  port: 443
  type: trojan
  password: PASSWORD
  network: ws
  sni: SERVER.COM
  skip-cert-verify: true
  udp: true
  ws-opts:
    path: /PATH
    headers:
        Host: SERVER.COM
  </code></pre>
  
  <h1>Trojan XTLS (SNI)</h1>
  <pre><code class="language-yaml">
- name: Trojan XTLS (SNI)
  server: SERVER.COM
  port: 443
  type: trojan
  password: PASSWORD
  flow: xtls-rprx-direct
  skip-cert-verify: true
  sni: BUGSNI.COM
  udp: true
  </code></pre>
  
  <h1>Trojan gRPC (SNI)</h1>
  <pre><code class="language-yaml">
- name: Trojan gRPC (SNI)
  type: trojan
  server: SERVER.COM
  port: 443
  password: PASSWORD
  udp: true
  sni: BUGSNI.COM
  skip-cert-verify: true
  network: grpc
  grpc-opts:
    grpc-service-name: NAMAGRPC
  </code></pre>

</article>

---
source: https://blog.vpngame.com/openwrt/kumpulan-daftar-format-akun-untuk-openclash/
---
