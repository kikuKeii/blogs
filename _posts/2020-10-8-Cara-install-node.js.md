---
layout: post
title: Cara install node.js
---

<p>Ada yang belum tau Node.js? Ada yang sudah tau JavaScript? Kalo selama ini kita mengenal JavaScript sebagai <em>client side scripting</em>, sekarang JavaScript sudah ada untuk <em>server side scripting</em>nya juga. Dialah Node.js. Artinya sekarang Kamu bisa membangun&nbsp;layanan&nbsp;web menggunakan bahasa JavaScript.</p> 
<p>Node.js punya NPM atau Node Package Manager, yaitu managemen paket librari untuk Node.js. NPM memudahkan pengembang untuk membagikan librari dan aplikasi node, sehingga orang lain dapat dengan mudah memasang dan mencopot librari pada programnya.</p> 
<p>Adapun cara instalasi Node.js sebenernya langkah-langkahnya sudah dijelaskan di <a href="https://nodejs.org/en/download/" target="_blank">websitenya Node.js</a> sendiri. Tapi pada tulisan ini&nbsp;akan dijelaskan&nbsp;langkah-langkah praktis instalasi Node.js untuk Windows, Mac, dan Linux.</p> 
<h2>Instalasi Node.js di Windows</h2> 
<p>Untuk instalasi di Windows, Kamu cukup mengunduh <em>installer</em> yang telah disediakan  untuk Windows. Buka halaman <a href="https://nodejs.org/en/download/" target="_blank"><em>download</em> Node.js</a> dan&nbsp;klik&nbsp;tautan unduhan  untuk Windows Installer. Jalankan installer dan ikuti panduannya seperti menginstal aplikasi lainnya pada Windows.</p> 
<h2>Instalasi Node.js di&nbsp;Mac OS</h2> 
<p>Sama seperti di Windows, untuk instalasi di&nbsp;Mac OS pun&nbsp;Kamu cukup mengunduh <em>installer</em> yang telah disediakan untuk Mac OS. Buka halaman <a href="https://nodejs.org/en/download/" target="_blank"><em>download</em> Node.js</a> dan&nbsp;klik&nbsp;tautan unduhan untuk Macintosh&nbsp;Installer. Jalankan installer dan ikuti panduannya seperti menginstal aplikasi pada umumnya.</p> 
<h2>Instalasi Pada&nbsp;Linux berbasis Ubuntu dan Debian</h2> 
<p>Untuk instalasi di Ubuntu,&nbsp;lebih mudah menggunakan Package Manager. Langkah-langkah  berikut dapat diterapkan pada Ubuntu 14.04 LTS ke atas dan Debian 8 ke atas. Selain itu  juga dapat diterapkan pada distribusi turunannya seperti Linux Mint 17, Elementary OS Freya dan Trisquel 7.</p> 
<p>Pada terminal jalankan perintah berikut:</p> 
<p><code>curl -sL <a href="https://deb.nodesource.com/setup_4.x">https://deb.nodesource.com/setup_4.x</a> | sudo -E bash -</code> <br> <code>sudo apt-get install -y nodejs</code> <br> <code>sudo apt-get install -y build-essential</code></p> <br> 

<p>Adapun untuk instalasi di distribusi linux lainnya, Kamu bisa&nbsp;merujuk ke halaman panduan instalasi langsung di website Node.js <a href="https://nodejs.org/en/download/package-manager/" target="_blank">disini</a>. </p> 
<h2>Cek Hasil Instalasi</h2> 
<p>Untuk memastikan NodeJS sudah terinstal dengan baik dan sudah terdaftar di path (untuk Windows), buka jendela baru terminal atau&nbsp;cmd lalu ketikkan perintah berikut:</p> 
<p><code>node -v</code></p> <p><code>npm -v</code></p> 
<p>Kedua perintah di atas berfungsi untuk mengecek nomor versi &nbsp;nodejs dan npm. Apabila nomor versi muncul maka itu artinya nodejs dan npm sudah siap digunakan.</p>