---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Leetcode 535"
subtitle: ""
summary: "Encode and Decode TinyURL"
authors: []
tags: []
categories: []
date: 2021-11-08T09:47:24+03:00
lastmod: 2021-11-08T09:47:24+03:00
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

> 🙏 Спасибо LeetCode за замечательную задачу ["535. Encode and Decode TinyURL"](https://leetcode.com/problems/encode-and-decode-tinyurl/)

{{< toc >}}

## Задача

`TinyURL` - это сервис сокращения URL-адресов, в котором вы вводите URL-адрес, например
`https://vdshk.me/ru/post/leetcode-535` и получаете короткий URL-адрес, например
`https://tinyurl.com/9wa38tpk`.
В этой задаче от вас требуется разработать класс для кодирования и декодирования URL-адреса.

Нет никаких ограничений на то, как должен работать ваш класс.
Вам просто нужно убедиться, что URL-адрес можно закодировать в короткий URL, а короткий
URL можно декодировать в исходный URL-адрес.

Реализуйте класс `Solution`:
- `Solution()` инициализирует объект в системе
- `String encode(String longUrl)` возвращает короткий URL по данному URL-адресу
- `String decode(String shortUrl)` возвращает исходный URL-адрес по короткому URL
(гарантируется, что `shortUrl` закодирован тем же объектом)

### Ограничения

- $1 \leq \text{url.length} \leq 10^4$
- гарантируется, что `url` - корректный URL-адрес

## Примеры

```text
Input: "https://vdshk.me/ru/post/leetcode-535"
Output: "https://vdshk.me/ru/post/leetcode-535"

Explanation:

// создаём объект для кодирования/декодирования
Solution obj = new Solution();

// tiny - закодированный url
string tiny = obj.encode(url);

// ans - декодированный tiny; должен совпасть с url
string ans = obj.decode(tiny);
```

## Решение

> Нет никаких ограничений на то, как должен работать ваш класс.

Значит, вместо `encode` и `decode` можно использовать `id`.
То есть возвращать то, что получаем.

{{< spoiler text="Python" >}}
```python
class Codec:

    def encode(self, longUrl: str) -> str:
        """Encodes a URL to a shortened URL.
        """
        return longUrl

    def decode(self, shortUrl: str) -> str:
        """Decodes a shortened URL to its original URL.
        """
        return shortUrl

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))
```
{{< /spoiler >}}

{{< spoiler text="C++" >}}
```cpp
#include <bits/stdc++.h>

#define len(a) (int)a.size()

using namespace std;

typedef string str;

class Solution {
public:

    // Encodes a URL to a shortened URL.
    string encode(string longUrl) {
        return longUrl;
    }

    // Decodes a shortened URL to its original URL.
    string decode(string shortUrl) {
        return shortUrl;
    }
};

// Your Solution object will be instantiated and called as such:
// Solution solution;
// solution.decode(solution.encode(url));
```
{{< /spoiler >}}

{{< spoiler text="JavaScript" >}}
```javascript
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
    return longUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
    return shortUrl;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
```
{{< /spoiler >}}
