---
title: "JuMP 0.5 Released"
date: 2014-05-03 10:00:00
author: Lou Hafer
---

The [JuMP](https://jump.readthedocs.org/) Team announced the release of JuMP 0.5, an open-source algebraic modeling language in Julia, now with support for algebraic modeling of nonlinear problems using [Ipopt](https://projects.coin-or.org/Ipopt) with a familiar scalar-based syntax similar to AMPL and GAMS. JuMP can efficiently compute sparse Jacobians and Hessians for large-scale problems using reverse-mode automatic differentiation coupled with Julia’s powerful just-in-time compilation abilities to generate and compile specialized matrix generators at runtime, all in memory. For example code, see the [documentation](http://jump.readthedocs.org/en/release-0.5/nlp.html).
