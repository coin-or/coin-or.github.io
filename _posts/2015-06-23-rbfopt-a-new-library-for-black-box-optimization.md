---
title: "RBFOpt – A New Library for Black-box Optimization"
date: 2015-06-23 09:00:00
author: Lou Hafer
---

[RBFOpt](https://projects.coin-or.org/RBFOpt) is a library written in Python for black-box (also known as derivative-free) optimization. It is a global solver that requires zero-order information — just function values, not even gradients\! RBFOpt is aimed at finding the global minimum in a small number of function evaluations, which is particularly useful when each function evaluation requires an expensive computation, *e.g.*, a time-consuming computer simulation.
