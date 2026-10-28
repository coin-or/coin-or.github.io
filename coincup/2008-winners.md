---
title: "COIN-OR Cup 2008 Winners"
permalink: /coinCup/coinCup2008Winner.html
parent:
  title: COIN-OR Cup
  url: /coincup/
---

## Team from the U.S. Environmental Protection Agency and Sandia National Laboratories

US EPA: Terra Haxton, Robert Janke, Regan Murray

Sandia Labs: Bill Hart (Team Representative), Jonathan Berry, Erik Boman, Robert Carr, Cindy Phillips, Lee Ann Riesen, Jean-Paul Watson

### U.S. Environmental Protection Agency Uses COIN-OR to Protect Drinking Water

The U.S. Environmental Protection Agency (EPA) is the lead federal agency for the security of drinking water in the United States. The agency is responsible for providing information and technical assistance to the more than 50,000 water utilities across the country. The distributed physical layout of drinking-water utilities makes them inherently vulnerable to contamination incidents caused by terrorists. To counter this threat, the EPA is using operations research to design, test, and deploy contamination warning systems (CWSs) that rapidly detect the presence of contaminants in drinking water.

The EPA's TEVA Research Project was a finalist in the 2008 INFORMS Edelman competition. Every year, the competition recognizes outstanding operations research-based projects that transform companies, entire industries, and people's lives. In collaboration with the University of Cincinnati, Sandia National Laboratories, and Argonne National Laboratory, the EPA has developed the Sensor Placement Optimization Tool (TEVA-SPOT) to design CWSs that can quickly detect contamination incidents and reduce the overall impact of terrorist attacks. The EPA partnered with member utilities of the American Water Works Association to apply TEVA-SPOT to nine utilities. These water utilities have begun installing CWSs based on these designs, and these CWSs are predicted to reduce the median impact of contamination incidents by 48 percent, and the corresponding economic-impact reduction is over $19 billion.

*COIN-OR was a key element of many of the discrete optimizers that are included in TEVA-SPOT, and the INFORMS Edelman judges highlighted the impact of COIN-OR in this project.* TEVA-SPOT can apply the PICO integer programming solver to find provably optimal sensor placements for a wide range of objectives. PICO uses OSI, CLP, and CGL to perform general-purpose, parallel optimization of integer programs. The COIN-OR Vol software, for unconstrained facility location, was also adapted for a Lagrangian method that can compute lower bounds on the optimal sensor placement. This was combined with a fractional rounding heuristic to provide a fast, low-memory heuristic for sensor placement. This heuristic is particularly critical because water utilities need to develop CWS designs with many contamination scenarios on limited-memory workstations.

The availability of COIN-OR's robust, open-source optimization software was critical to the success of this project. COIN-OR enabled the rapid development of rigorous optimization techniques that identify sensor placements with quantifiable performance guarantees. A specific goal of EPA's TEVA Research Project is to develop open-source software that promotes the security of water distribution systems. The EPA plans to release the TEVA-SPOT software, using COIN-OR, to encourage the use of CWS design tools in the water industry.

It is with great pleasure that we award the COIN-OR INFORMS 2008 Cup to the team from the EPA and Sandia National Labs.
