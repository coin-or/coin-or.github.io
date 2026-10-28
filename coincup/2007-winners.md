---
title: "COIN-OR Cup 2007 Winners"
permalink: /coinCup/coinCup2007Winner.html
parent:
  title: COIN-OR Cup
  url: /coincup/
---

**John Tomlin**

John Tomin has been a long-time supporter of the goals of open-source and the COIN-OR intiative. In the past year, John has used COIN-OR as an essential asset in his collaboration with colleagues on the implementation of two innovative and important projects at Yahoo\!

1.  The problem of placing advertisements ("sponsored links") in search engines is an important one, and involves large amounts of money. In principle this is carried out by an auction mechanism, but when the bidders in these auctions have budgets, the results of the auction must often be modified so that bidders who may exceed their budgets are not included, or "held out." If this is done in a naive way, ignoring the possibility of shifting an advertiser's expenditure between the search terms he has bid on, inefficiencies may result. One solution is to model the showing of results for each search, taking into account all possible showings of ads (in auction order, but with some held out), subject to the bidder budgets and forecast search frequencies. Since the number of possibilities is huge, column generation is required to generate just those "slates" of ads which may be efficient. COIN-OR provided an ideal environment for column generation, tightly integrated with the CLP module. John and his colleagues were able to quickly build a system (beginning from an actual CLP example) to solve such models, which turned out to be fast and effective. The model and its COIN-OR implementation are described in a paper [Optimal Delivery of Sponsored Search Advertisements Subject to Budget Constraints](http://www-staff.it.uts.edu.au/~tomlin/ec07_p272.pdf), presented at the ACM Conference on Electronic Commerce (EC'07) in June 2007.
2.  Another advertising-related model concerns the choosing of bid levels by an advertiser, using historical data on the effectiveness of the bids against other participants, in the context of "banner ads". Since a bid either exceeds a competitor's or it does not, there is clearly a discrete component. However, a bidder's ability to make a high bid is constrained by a budget. Furthermore a bidder may have to spread this budget across several advertising campaigns. This can be formulated as an optimization model with Special Ordered Sets - needed to choose from the discrete bid levels available. COIN-OR gave John and his colleagues the ability to not only call the SOS algorithm, but to tailor the search strategy to reach a good valid solution quickly. This code has been used in production at Yahoo\! for the past year, and has resulted in imputed dollar gains well into 8 figures. The model and the COIN-OR implementation are described in the paper [Bid Optimization for Internet Graphical Ad Auction Systems via Special Ordered Sets](http://www.arxiv.org/abs/0706.3865), presented at the 2007 INFORMS International meeting in Puerto Rico.

John Tomlin's research accomplishments and business impact with COIN-OR exemplifies the value of open tools in operations research. We commend John for his leadership in spreading the use of open compuational tools for operations research in both the research and business communities.

It is with great pleasure that we award the COIN-OR INFORMS 2007 Cup to John Tomlin.

![The 2007 COIN-OR Cup]({{ '/assets/images/coincup/Cup2007.JPG' | relative_url }}) ![John Tomlin Wins the Cup]({{ '/assets/images/coincup/John_Tomlin_2007_Coin_Cup.JPG' | relative_url }})
