---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "How to Install Hugo Extended on Ubuntu 20.04"
subtitle: ""
summary: "One easy step to install hugo extended"
authors: []
tags: [ "Hugo", "Hugo Extended", "Ubuntu 20.04", "How to Install" ]
categories: []
date: 2021-09-22T20:01:48+03:00
lastmod: 2021-09-22T20:01:48+03:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

It's funny, but I could not find a simple guide on how to install Hugo Extended on Ubuntu 20.04 😅

I'll try to fix this annoying gap 😊

All you need to install Hugo Extended is to download the corresponding `.deb` file from the hugo repository
(can be found here 👉 [link](https://github.com/gohugoio/hugo/releases)).

For now, the corresponding release is `hugo_extended_0.88.1_Linux-64bit.deb`:

```shell
cd ~/Downloads
wget https://github.com/gohugoio/hugo/releases/download/v0.88.1/hugo_extended_0.88.1_Linux-64bit.deb
```

After that, it is enough to install this package using [dpkg](https://wiki.debian.org/Teams/Dpkg):

```shell
dpkg --install hugo_extended_0.88.1_Linux-64bit.deb
```

That's all ✌
