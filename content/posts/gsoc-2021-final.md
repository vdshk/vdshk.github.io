---
title: "GSoC 2021 Final"
date: 2021-08-20T13:43:56+03:00
draft: false
toc: false
images:
tags:
  - gsoc
  - networkx
series:
  - GSoC-2021
---

This will be a short post about
what I have done during the GSoC.

# 🚀 Project

The goal of this project is to create Jupyter notebooks that will become detailed and intuitive tutorials
containing the ideas behind, explanations and experimental analysis of the algorithms
implemented in NetworkX.
I decided to start with a tutorial on directed acyclic graphs (DAGs for short).

Under the project, I wrote a tutorial explaining the various concepts of graphs.
The main ones were
[Directed Graph](https://networkx.org/nx-guides/content/algorithms/dag/index.html#directed-graph)
and 
[Directed Acyclic Graph](https://networkx.org/nx-guides/content/algorithms/dag/index.html#directed-acyclic-graph).
In addition to explanation of the theory,
I developed examples using NetworkX and found various
[real-world applications](https://networkx.org/nx-guides/content/algorithms/dag/index.html#applications)
of these concepts.

Moreover, I wrote about
[topological sort](https://networkx.org/nx-guides/content/algorithms/dag/index.html#topological-sort) -
one of the most basic algorithms for working with DAGs.
It was very interesting to describe step-by-step how this algorithm works in a clear and comprehensible manner.

You can read about it in details
[here](https://networkx.org/nx-guides/content/algorithms/dag/index.html#).

# ✅ Results

The main result of my work is the
[topological sort tutorial](https://networkx.org/nx-guides/content/algorithms/dag/index.html#).
* ✅ Corresponding **merged PR:**
[[GSoC contribution] Topological sort notebook](https://github.com/networkx/nx-guides/pull/44).

Furthermore, during the work on DAGs module of NetworkX, I opened several PRs with improvements:
* ✅ **Merged PR** to improve code base:
[[GSoC contribution] Improving functions descendants and ancestors in dag.py](https://github.com/networkx/networkx/pull/5017)
* ✅ **Merged PR** to improve documentation:
[[GSoC contribution] Adding examples to docstrings in dag.py](https://github.com/networkx/networkx/pull/5019)

# 🥳 Conclusion

I want to express my deep gratitude to my mentors:
[Eric Ma](https://github.com/ericmjl)
and
[Ross Barnowski](https://github.com/rossbar).
It was a real pleasure to work with you guys.
I look forward to further productive cooperation.