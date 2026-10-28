---
title: "OpenOffice 3.4.0 Uses COIN-OR Tools"
date: 2012-05-14 09:00:00
author: Andrew Mason
---

The [Apache Software Foundation](http://www.apache.org/) (ASF) has announced availability of [OpenOffice](http://www.openoffice.org/) version 3.4.0. Among its new features: The linear programming solver in the Calc spreadsheet program has been replaced with COIN-OR tools. The spreadsheet uses the [CoinMP](https://projects.coin-or.org/CoinMP "CoinMP: a lightweight API and DLL for CLP, CBC, and CGL") API, which in turn uses the [COIN-OR Branch and Cut](https://projects.coin-or.org/Cbc/ "CBC: COIN-OR Branch-and-Cut MIP Solver") MIP solver (CBC) and the [COIN-OR Linear Programming](https://projects.coin-or.org/Clp "CLP: COIN-OR LP") solver (CLP) as solver engines, the [Open Solver Interface](http://projects.coin-or.org/Osi/ "OSI: Open Solver Interface") (OSI), the [Cut Generator Library](https://projects.coin-or.org/Cgl/ "CGL: Cut Generator Library") (CGL) and the [CoinUtils](https://projects.coin-or.org/CoinUtils/ "CoinUtils: COIN-OR utilities") utility library.
