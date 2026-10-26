---
title: FAQ
description: Frequently asked questions about COIN-OR software and the COIN-OR Foundation.
---

<div class="accordion faq">

<details id="organization" markdown="1">
<summary><span id="ffs-tabbed-11"></span>What software is available in the COIN-OR repository and how is it organized?</summary>
<div class="details-body" markdown="1">

The software in the COIN-OR repository is organized into individual projects, each with its own project manager, project management site (now on Github), and project mailing list. Each project is managed by a project manager who oversees development. Some of the projects are inter-dependent and others are stand-alone. For a current list of projects and links to their Web sites, please see the [projects page](/projects/).

</div>
</details>

<details id="maturity-level" markdown="1">
<summary><span id="ffs-tabbed-12"></span>What is the maturity level of a project?</summary>
<div class="details-body" markdown="1">

All COIN-OR projects are classified on a scale from 0 to 5 according the level of development of the project. The following are the descriptions of the various maturity levels.

  - Level 0: A proposed project for which substantial development has yet to commence.
  - Level 1: Projects that don’t work yet or don’t meet the requirements for becoming a Level 2 project.
  - Level 2: Projects that build and do something useful.
  - Level 3: Level 2 projects that also have substantial documentation, tutorials, examples codes, or other aids to enhance usability.
  - Level 4: Level 3 projects that have versioning, a stable release (see below), and a substantial unit test.
  - Level 5: Level 4 projects that [distribute binaries](https://bintray.com/coin-or/download/) or are packaged in some way.

</div>
</details>

<details id="stable-version" markdown="1">
<summary><span id="ffs-tabbed-13"></span>What is a stable version? What is a stable release?</summary>
<div class="details-body" markdown="1">

Projects of maturity level 2 or above (see definition above) have a versioning system that ensures end users some degree of stability and a stable upgrade path as project development continues.

A *stable version* means roughly that the feature set and API associated with that particular version are frozen, but the code may continue to evolve through the application of patches to fix bugs, the addition of documentation, etc. Such a stable version is identified by a two-digit version number (i.e., 5.1). Stable versions continue to evolve, but this evolution should generally consist of bug fixes and minor tweaking only—development of new features is reserved for future versions. The current stable version of a project can generally only be obtained using a SVN client (see below).

A *stable release* is a fixed snapshot of a stable version identified by a three-digit release number (i.e., 5.1.1). For information on obtaining releases, see the [download](/downloading) page.

</div>
</details>

<details id="source-code" markdown="1">
<summary><span id="ffs-tabbed-14"></span>How do I obtain the source code for a COIN-OR project?</summary>
<div class="details-body" markdown="1">

Please see the [download](/downloading) page, as well as the [COIN-OR User’s Guide](/docs/user_introduction.html).

</div>
</details>

<details id="building" markdown="1">
<summary><span id="ffs-tabbed-15"></span>How do I compile, link, and run the COIN-OR code?</summary>
<div class="details-body" markdown="1">

Please see the [COIN-OR User’s Guide](/docs/user_introduction.html).

</div>
</details>

<details id="licenses" markdown="1">
<summary><span id="ffs-tabbed-16"></span>What licenses are COIN-OR projects distributed under?</summary>
<div class="details-body" markdown="1">

Most current COIN-OR projects use the Eclipse Public License and this is the license we recommend. However, we accept projects licensed under any license officially approved by the [Open Source Initiative](http://www.opensource.org/). The author of the EPL is the Eclipse Foundation, and they have an [EPL FAQ](http://www.eclipse.org/legal/eplfaq.php), based on their understanding of the EPL.

</div>
</details>

<details id="contact" markdown="1">
<summary><span id="ffs-tabbed-17"></span>Who do I contact for COIN-OR related questions?</summary>
<div class="details-body" markdown="1">

<info@coin-or.org>

</div>
</details>

<details id="bugs" markdown="1">
<summary><span id="ffs-tabbed-18"></span>Where do bugs get reported?</summary>
<div class="details-body" markdown="1">

Go to the project’s Github site (see the [projects page](/projects) for a list). Create a new issue or start a discussion.

</div>
</details>

<details id="management" markdown="1">
<summary><span id="ffs-tabbed-19"></span>How is the COIN-OR project managed?</summary>
<div class="details-body" markdown="1">

The COIN-OR project is managed by the COIN-OR Foundation, Inc., a non-profit educational foundation. More details are available on the [COIN-OR Foundation page](/foundation.html).

</div>
</details>

<details id="helping" markdown="1">
<summary><span id="ffs-tabbed-110"></span>How can I help?</summary>
<div class="details-body" markdown="1">

Glad you asked\! Check out the [contributing](/contributing/) page for some ideas on getting started.

</div>
</details>

<details id="name" markdown="1">
<summary><span id="ffs-tabbed-111"></span>Where does the name COIN-OR come from?</summary>
<div class="details-body" markdown="1">

At its incarnation, COIN-OR was known as the “Common Optimization Interface for OR”. The name (but not the acronym) was later changed to better reflect that COIN-OR is intended to host all types of OR software, not just “optimization” software.

</div>
</details>

<details id="url" markdown="1">
<summary><span id="ffs-tabbed-112"></span>Why is the web site url www.coin-or.org and not www.coin.org?</summary>
<div class="details-body" markdown="1">

Because there is another [open source project](http://www.coin3d.org/) which uses the name COIN and someone else already had the url `www.coin.org` (but don’t go there; it’s been flagged for bad behaviour).

</div>
</details>

<details id="citing" markdown="1">
<summary><span id="ffs-tabbed-113"></span>I'd like to cite COIN-OR. I notice several publications, is there some standard paper that is typically cited?</summary>
<div class="details-body" markdown="1">

The first paper on COIN-OR that appeared in the literature was in the proceedings of CP-AI-OR 2001. A better reference is the [refereed paper](http://www.research.ibm.com/journal/rd47-1.html) in the IBM Journal of Research and Development: Robin Lougee-Heimer. The Common Optimization INterface for Operations Research, IBM Journal of Research and Development, v47(1):57-66, January 2003.

</div>
</details>

</div>
