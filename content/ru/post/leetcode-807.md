---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "LeetCode 807"
subtitle: ""
summary: "Max Increase to Keep City Skyline"
authors: []
tags: [ "LeetCode", "Algorithms and data structures", "Greedy", "Matrix" ]
categories: []
date: 2021-11-09T12:45:16+03:00
lastmod: 2021-11-09T12:45:16+03:00
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

> 🙏 Спасибо LeetCode за замечательную задачу ["807. Max Increase to Keep City Skyline"](https://leetcode.com/problems/max-increase-to-keep-city-skyline/)

{{< toc >}}

## Задача

Имеется город, состоящий из $n \times n$ блоков, где каждый блок содержит ровно одно
здание в форме вертикальной квадратной призмы.
Дана **заиндексированная с 0** матрица целых чисел `grid`,
где `grid[i][j]` - представляет собой **высоту** здания, находящегося
в блоке на `i`-ой строке в `j`-ом столбце города.

**Горизонт города** - это внешний контур города, образованный всеми зданиями,
есди смотреть на город издалека.
**Горизонт города** с каждой стороны света может выглядеть по-разному.

Разрешается увеличивать высоту любого здания на любую величину, но горизонт города
не должен меняться с любой стороны света.

От вас требуется вычислить максимальную сумму, на которую может быть увеличена высота
зданий без изменения горизонта города с любой стороны света.

### Ограничения

- `n == grid.length`
- $\forall i \in \\{0, \dots, n - 1\\}: $ `n == grid[i].length`
- $2 \leq n \leq 50$
- $0 \leq grid[i][j] \leq 100$

## Примеры

```text
Input: grid = [ [3, 0, 8, 4],
                [2, 4, 5, 7],
                [9, 2, 6, 3],
                [0, 3, 1, 0] ]
Output: 35
`grid` города после максимального возможного увеличения высот всех зданий
new_grid    = [ [8, 4, 8, 7],
                [7, 4, 7, 7],
                [9, 4, 8, 7],
                [3, 3, 3, 3] ]
```

```text
Input: grid = [[0,0,0],[0,0,0],[0,0,0]]
Output: 0
Нельзя увеличить ни одно здание, так как тогда горизонт города изменится.
```

## Решение

- Пусть новые высоты зданий это $grid'$
- Мы хотим максимизировать $\underset{i, j}{\sum}\\{grid'[i][j] - grid[i][j]\\}$,
то нам необходимо максимизировать $grid'[i][j]$ для всех $i, j$
- Заметим, что
  - $\forall i, j: grid'[i][j] \leq \underset{0 \leq k < n}{\max}\\{grid[i][k]\\}$
  - $\forall i, j: grid'[i][j] \leq \underset{0 \leq k < n}{\max}\\{grid[k][j]\\}$
  - так как если здание станет выше, чем самое высокое здание в его строке или столбце,
  то горизонт города изменится
- Значит $\forall i, j: grid'[i][j] \leq \min(\underset{0 \leq k < n}{\max}\\{grid[i][k]\\}, \underset{0 \leq k < n}{\max}\\{grid[k][j]\\})$
- Отсюда уже очевидно, что $$grid'[i][j] = \min(\underset{0 \leq k < n}{\max}\\{grid[i][k]\\}, \underset{0 \leq k < n}{\max}\\{grid[k][j]\\})$$

{{< spoiler text="Python" >}}
```python
class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        row_max = list(map(max, grid))
        col_max = list(map(max, zip(*grid)))

        return sum(
            min(row_max[i], col_max[j]) - val
            for i, row in enumerate(grid)
            for j, val in enumerate(row)
        )
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
    int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {
        int n = len(grid);

        vector<int> row_max(n, -1);
        vector<int> col_max(n, -1);

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                row_max[i] = max(row_max[i], grid[i][j]);
                col_max[j] = max(col_max[j], grid[i][j]);
            }
        }

        int res = 0;

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                res += min(row_max[i], col_max[j]) - grid[i][j];
            }
        }

        return res;
    }
};
```
{{< /spoiler >}}

{{< spoiler text="JavaScript" >}}
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const n = grid.length;

    const row_max = Array(n).fill(-1);
    const col_max = Array(n).fill(-1);

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            row_max[i] = Math.max(row_max[i], grid[i][j]);
            col_max[j] = Math.max(col_max[j], grid[i][j]);
        }
    }

    let res = 0;

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            res += Math.min(row_max[i], col_max[j]) - grid[i][j];
        }
    }

    return res;
};
```
{{< /spoiler >}}
