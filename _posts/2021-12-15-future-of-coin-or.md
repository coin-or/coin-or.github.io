---
title: "Future of COIN-OR"
date: 2021-12-15 09:00:00
author: Cristina Muñoz
tags: [funding]
---

**TL;DR**: Without financial support, we are struggling to maintain widely used [COIN-OR projects](http://github.com/coin-or/), such as Cbc, Clp and Ipopt. Email <sponsors@coin-or.org> to become a foundation sponsor, or [sponsor us on Github](https://github.com/sponsors/coin-or).

You can [join the discussion on GitHub](https://github.com/coin-or/COIN-OR-OptimizationSuite/discussions/18).

**Longer TL;DR**

[The COIN-OR Foundation](/about-the-foundation/) was founded in 2000 with the mission to create and disseminate knowledge related to all aspects of computational operations research. In many respects, COIN-OR has been a wildly successful initiative. COIN-OR projects, such as [Cbc](https://github.com/coin-or/Cbc), [Clp](https://github.com/coin-or/Clp), [Ipopt](https://github.com/coin-or/Ipopt), and [Pyomo](https://github.com/Pyomo/pyomo), are now used by thousands of organizations around the world. Additionally, new projects have demonstrated great potential. [Gravity](https://github.com/coin-or/Gravity), an algebraic modeling language written in C++, was used by the [winning team](https://arpa-e.energy.gov/news-and-media/blog-posts/announcing-grid-optimization-go-competition-challenge-2-winners) of the recent ARPA-E Grid Optimization Competition, and the authors of Gravity were awarded the [COIN-OR Cup for 2021](/2021/11/03/2021-coin-or-cup-winners-gravity-team).

Despite these successes, the strategic leadership board of the COIN-OR Foundation is re-assessing our mission and future direction. Two common threads have plagued the COIN-OR Foundation: access to funding and success at getting community members involved in important activities. Over the past few months, the board has discussed these problems, and we have come to the conclusion that without change, we see no path other than to slowly wind down some of the most impactful activities of COIN-OR. This means things such as releasing and distributing binaries, testing, documentation, responding to issues and questions. Without support, these activities will no longer be organized by the COIN-OR Foundation.

The rest of this (long) blog post describes why this is the case and how you can get involved to allow the COIN-OR Foundation to continue with these valuable activities.

**A brief history<sup>1</sup>**

COIN-OR was founded in 2000 to host a number of open-source projects from IBM. At the time, IBM provided hosting and infrastructure support, and contributed in-kind support in the form of developer hours. In 2004, the non-profit COIN-OR Foundation was established to provide independence from IBM, and the hosting infrastructure was migrated to servers at Clemson University. Now, all projects are hosted on GitHub, although some legacy infrastructure (the website, wiki and mailing lists) are still hosted on Clemson servers.

**Why was COIN-OR founded? **

It’s useful to remember that when the COIN-OR project was founded, the culture and tooling around open-source software in the optimization community was different. There was no Git, and there was no GitHub. Authors of optimization software often didn’t make source available and when they did, it was shared on personal websites in an ad hoc manner. Visibility of packages was dependent on word-of-mouth, or by attending conferences. There was also no quality control of software; it was user-beware.

COIN-OR set out to change the landscape through a few key initiatives:

1.  A website to collate and advertise the diversity of available operations research software
2.  A suite of common infrastructure for projects, including a common build system, version control, release tooling, testing, bug trackers, and mailing lists
3.  The establishment of standards for quality control and sustainability of projects, as well as a review system for publication of software in the COIN-OR repository
4.  A 501(c)(3) non-profit (the COIN-OR Foundation) to collect tax-exempt donations that could be used for maintenance and management of legal copyright and liability issues for each project.

**Did we succeed in each of these four initiatives?**

The first initiative is an unqualified yes. The COIN-OR brand is strong, and users recognize that COIN-OR provides a range of excellent open-source tools for operations research. According to independent benchmarks by Hans Mittelmann, Clp, Cbc, and Ipopt are the leading open-source solvers for [linear programming](http://plato.asu.edu/ftp/lpsimp.html), [mixed-integer programming](http://plato.asu.edu/ftp/milp.html), and [nonlinear programming](http://plato.asu.edu/ftp/ampl-nlp.html) respectively.

The suite of common infrastructure was also a great success. There are now 73 projects in COIN-OR, many of which would have died on the vine without the infrastructure provided by COIN-OR. Recently, we completed a move away from the hosting infrastructure provided by COIN-OR, with all projects now hosted on GitHub. This part of the common infrastructure met a critical need for the optimization community in the past, but that it is no longer needed. Even in the new world of Github, however, there is still a substantial need for maintenance of common infrastructure for build, test, release, and other related activities.

The success of initiatives related to review and publication of software has been mixed. At the least, we have raised awareness around issues of publication and sustainability and similar initiatives are now being undertaken by traditional publication venues.

The final initiative has been a failure. COIN-OR has never received any significant donations, and we have never been in a position to hire developers to work on COIN-OR projects. The lack of funds and available developers has meant that many projects are now effectively unmaintained; We’ve managed to keep them building, but they have not received any new features or updates in years.

**Where are we now?**

The key components of COIN-OR today are:

  - The COIN-OR Foundation, governed by the Strategic Leadership Board
  - The [Github organization](https://github.com/coin-or), which hosts all of the projects
  - The [COIN-OR website](/), which contains a wealth of information relating to the projects and computational operations research in general.

The Strategic Leadership Board meets every two weeks. We recently updated the COIN-OR bylaws, and have had on-going discussions about the future of COIN-OR that spurred this blog post.

Within the group of widely-used core solvers—Clp, Cbc, and Ipopt—development and maintenance has been undertaken by a small group of developers who have received little recognition, despite the immense value they have provided to the operations research community. These people represent a critical risk within the entire open-source operations research ecosystem. Without increasing the number of people that contribute to COIN-OR, or obtaining funding to pay for on-going maintenance and support, we expect that COIN-OR will be unable to maintain our existing projects.

**Possible future directions**

The board has discussed the following three options for the future of COIN-OR.

*Option 1: Wind down the COIN-OR Foundation activities related to maintenance and development of common infrastructure and existing codes that are not otherwise maintained.  *

In this scenario:

  - All legacy infrastructure on the Clemson servers is taken offline (https://www.coin-or.org)
  - All projects remain part of the GitHub organization; however, no new projects are invited and the Github organization itself is no longer maintained by the COIN-OR Foundation.
  - Official maintenance of existing projects in the COIN-OR GitHub organization is stopped, including maintaining build infrastructure, building and distributing binaries, continuous integration, testing, and responding to issues
  - Any maintenance or development work that does occur is on a voluntary basis by individuals using the tools provided by GitHub as-is

*Option 2: Continue operating in a haphazard fashion and hope that the community will eventually take up the cause as things slowly degrade. *

In this scenario, we continue as we have for the last few years. The Foundation does not attempt any large projects due to funding and time constraints, issues accumulate unaddressed on Github and projects slowly undergo bit rot, eventually failing to build or work in a modern computational environment. 

*Option 3: Find a path to funding the current activities of the COIN-OR Foundation in a sustainable way.*

In this scenario, we find financial resources to support professionals working on COIN-OR infrastructure and projects on behalf of the foundation. In addition, or as an alternative, we find members with the drive and enthusiasm to revive COIN-OR and expand it into new areas. Working in concert with the board, these members could:

  - Perform outreach to expand the number and diversity of contributors to COIN-OR software
  - Search for and acquire sources of funding to pay developers, maintainers and community managers of COIN-OR projects
  - Explore ways to leverage the COIN-OR brand, for example by starting an open-source journal to aid the publication of work associated with open-source software for operations research.

**If we had funding…**

If we pursue Option 3, the board has set a goal of raising $200,000/year to hire one full time developer (or equivalent) to work on the core COIN-OR projects of Cbc, Clp, and Ipopt (and their dependencies). This development time would be used to:

  - ensure core projects continue to compile and build on the latest platforms, e.g., the latest M1 architecture,
  - fix bugs,
  - respond to user queries,
  - improve the documentation,
  - improve and extend existing functionality.

**The Board’s position**

It is the position of the Board that Option 2 (status quo) is not viable. Therefore, we are left with the option of acquiring new members and expanding COIN-OR through funding, or winding down the COIN-OR foundation. We are writing this blog post as an attempt to pursue Option 3. However, if nothing in the next few months changes with regard to COIN-ORs funding situation, we will be left with Option 1. 

Option 1 does not mean the end of COIN-OR projects; the code is still open-source and anyone will be able to continue to use it and distribute it, even in commercial products, in accordance with the license. Instead, it means a transition from COIN-OR as an entity with a presence at conferences, providing support, documentation, pre-compiled binaries, and the like to a COIN-OR that exists only as a collection of individuals working on projects living in the COIN-OR GitHub organization without an official governance structure. Even the Github organization itself would need to be managed by willing individuals with no guarantee of continuity.

**How you can get involved**

If you use COIN-OR software and you want to see continued support for COIN-OR, here’s how you can help avoid Option 1.

**As an individual**

[Donate to COIN-OR.](https://github.com/sponsors/coin-or) Donations send a strong signal that there is demand for our software.

As an individual, you can also contribute to our projects or [join the discussion](https://github.com/coin-or/COIN-OR-OptimizationSuite/discussions/18). Remember that contributing is not just writing code to fix bugs; you can improve the documentation, or triage and reply to open issues on GitHub.

If you are interested in helping the board expand the activities of COIN-OR, or have suggestions for how we might do so, please email <info@coin-or.org>.

**As an organization**

If you are part of an organization that uses COIN-OR software, please contact <sponsors@coin-or.org> discuss a support agreement or to make a tax-deductible donation. We are interested in exploring long-term relationships with commercial users of our software in order to provide on-going support and maintenance. We estimate that we need $200,000 per year on an on-going basis to avoid Option 1.

Finally, please share this with your friends and colleagues, and email <info@coin-or.org> with any feedback on the topics discussed in this blog post.

*You can join the discussion on our future over at [Github](https://github.com/coin-or/COIN-OR-OptimizationSuite/discussions/18).*

<sup>1</sup> Also see a [20 year retrospective](https://higherlogicdownload.s3.amazonaws.com/INFORMS/a4f852dd-2bdc-46bc-98e7-47e7d7c12752/UploadedImages/ICS-newsletter-2021.pdf) appearing in the ICS newsletter for a longer history of the COIN-OR Foundation
