---
layout: post
title: Cara setting dan Lokal Dev Jekyll untuk Windows
---

#### Windows

Anda dapat menyiapkan versi lokal situs Halaman Jekyll GitHub Anda untuk menguji perubahan ke situs Anda secara lokal. Kami sangat merekomendasikan menginstal Jekyll untuk melihat situs Anda dan membantu memecahkan masalah pembuatan Jekyll yang gagal.

daftar isi:

- [Persyaratan](#Persyaratan)
- Langkah 1: Buat repositori lokal untuk situs Jekyll Anda
- Langkah 2: Instal Jekyll menggunakan Bundler
- Langkah 3: Bangun situs Jekyll lokal Anda

##### Persyaratan

Kami merekomendasikan menggunakan [Bundler](http://bundler.io/) untuk menginstal dan menjalankan Jekyll. Bundler mengelola dependensi gem Ruby, mengurangi kesalahan build Jekyll, dan mencegah bug terkait lingkungan. Untuk menginstal Bundler, Anda harus menginstal [Ruby](https://www.ruby-lang.org/).

1. Buka terminal git base.
2. Cek versi Ruby yang kalian install minimal `v2.1.0` atau lebih dengan cara:
   > `$ ruby --version`<br> > `> ruby 2.X.X`
3. Jika anda sudah ada local repo untuk site Jekyll. langsung ke Langkah ke-2.

##### Langkah 1: Buat repositori lokal untuk situs Jekyll Anda

1. Buka terminal git base.
2. Di komputer lokal Anda, lakukan inisialisasi repositori Git baru untuk situs Jekyll Anda:
   > `$ git init JEKYLL-SITE-REPOSITORY-NAME`<br> > `> Initialized empty Git repository in /Users/octocat/my-site/.git/`
3. Pindah ke Folder repo yang anda buat.
   > `$ cd JEKYLL-SITE-REPOSITORY-NAME`

##### Langkah 2: Instal Jekyll menggunakan Bundler

Untuk melacak dependensi situs Anda, Ruby akan menggunakan konten Gemfile Anda untuk membangun situs Jekyll Anda.

1. Periksa untuk melihat apakah Anda memiliki Gemfile di repositori situs Jekyll lokal Anda:

   > `$ ls`<br> >`> Gemfile`<br>
   >
   > > "Jika Anda memiliki Gemfile, lanjutkan ke langkah 4. Jika Anda tidak memiliki Gemfile, lanjutkan ke langkah 2."

2. ika Anda tidak memiliki Gemfile, buka editor teks favorit Anda, seperti VSCode, dan tambahkan baris berikut ke file baru:

   > <code>source 'https://rubygems.org'<br>
   > gem 'github-pages', group: :jekyll_plugins</code>

3. Beri nama file "Gemfile" dan simpan ke direktori root dari repositori situs Jekyll lokal Anda. Lewati ke langkah 5 untuk menginstal Jekyll.

4. Jika Anda sudah memiliki Gemfile, buka editor teks favorit Anda, seperti VSCode, dan tambahkan baris berikut ke Gemfile Anda:
   > `$ bundle install`<br>
   > `> Fetching gem metadata from https://rubygems.org/............`<br>
   > `> Fetching version metadata from https://rubygems.org/...`<br>
   > `> Fetching dependency metadata from https://rubygems.org/..`<br>
   > `> Resolving dependencies...`

##### Langkah 3: Bangun situs Jekyll lokal Anda

1. Arahkan ke direktori root dari repositori situs Jekyll lokal Anda.

2. Jalan kan local site dev:

   > `$ bundle exec jekyll serve`<br> >`> Configuration file: /Users/octocat/my-site/_config.yml`<br> >`> Source: /Users/octocat/my-site`<br> >`> Destination: /Users/octocat/my-site/_site`<br> >`> Incremental build: disabled. Enable with --incremental`<br> >`> Generating...`<br> >`> done in 0.309 seconds.`<br> >`> Auto-regeneration: enabled for '/Users/octocat/my-site'`<br> >`> Configuration file: /Users/octocat/my-site/_config.yml`<br> >`> Server address: http://127.0.0.1:4000/`<br> >`> Server running... press ctrl-c to stop.`<br>

3. Lalu buka [http://localhost:4000](http://localhost:4000) di Browser anda.
